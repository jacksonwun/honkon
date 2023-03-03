from django.core.cache import cache
from django.db import models
from django.conf import settings
from mptt.managers import TreeManager
from mptt.models import MPTTModel, TreeForeignKey

from parler.models import TranslatableModel, TranslatedFields
from parler.managers import TranslatableManager, TranslatableQuerySet

class Category_QuerySet(TranslatableQuerySet):
    def is_public(self):
        return self.filter(public=True)

class CategoryManager(TreeManager, TranslatableManager):
    def private_threads(self):
        pass

    def get_queryset(self, *args,**kwargs):
        return Category_QuerySet(self.model, using=self._db)

class Category(MPTTModel, TranslatableModel):
    parent = TreeForeignKey(
        "self", null=True, blank=True, related_name="children", on_delete=models.CASCADE
    )
    slug = models.CharField(max_length=255)

    translations = TranslatedFields(
        name = models.CharField(max_length=255),
        description = models.TextField(null=True, blank=True),
        last_thread_title = models.CharField(max_length=255, null=True, blank=True),     
        last_poster_name = models.CharField(max_length=255, null=True, blank=True)    
    )

    is_closed = models.BooleanField(default=False)
    articles = models.PositiveIntegerField(default=0)
    last_article_on = models.DateTimeField(null=True, blank=True)
    last_article = models.ForeignKey(
        "articles.article",
        related_name="+",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )
    last_thread_slug = models.CharField(max_length=255, null=True, blank=True)
    last_poster = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="+",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )
    last_poster_slug = models.CharField(max_length=255, null=True, blank=True)

    objects = CategoryManager()

    def __str__(self):
        return self.name

    def delete(self, *args, **kwargs):
        Category.objects.clear_cache()
        clear_acl_cache()
        return super().delete(*args, **kwargs)

    def synchronize(self):
        threads_queryset = self.thread_set.filter(is_hidden=False, is_unapproved=False)
        self.threads = threads_queryset.count()

        if self.threads:
            replies_sum = threads_queryset.aggregate(models.Sum("replies"))
            self.posts = self.threads + replies_sum["replies__sum"]
        else:
            self.posts = 0

        if self.threads:
            last_thread_qs = threads_queryset.filter(
                is_hidden=False, is_unapproved=False
            )
            last_thread = last_thread_qs.order_by("-last_post_on")[:1][0]
            self.set_last_thread(last_thread)
        else:
            self.empty_last_thread()

    def delete_content(self):
        from .signals import delete_category_content

        delete_category_content.send(sender=self)

    def move_content(self, new_category):
        from .signals import move_category_content

        move_category_content.send(sender=self, new_category=new_category)

    def get_absolute_url(self):
        return self.thread_type.get_category_absolute_url(self)

    def get_last_thread_url(self):
        return self.thread_type.get_category_last_thread_url(self)

    def get_last_thread_new_url(self):
        return self.thread_type.get_category_last_thread_new_url(self)

    def get_last_post_url(self):
        return self.thread_type.get_category_last_post_url(self)

    def set_name(self, name):
        self.name = name
        self.slug = slugify(name)

    def set_last_thread(self, thread):
        self.last_post_on = thread.last_post_on
        self.last_thread = thread
        self.last_thread_title = thread.title
        self.last_thread_slug = thread.slug
        self.last_poster = thread.last_poster
        self.last_poster_name = thread.last_poster_name
        self.last_poster_slug = thread.last_poster_slug

    def empty_last_thread(self):
        self.last_post_on = None
        self.last_thread = None
        self.last_thread_title = None
        self.last_thread_slug = None
        self.last_poster = None
        self.last_poster_name = None
        self.last_poster_slug = None

    def has_child(self, child):
        return child.lft > self.lft and child.rght < self.rght