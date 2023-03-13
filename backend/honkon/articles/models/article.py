from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
User = settings.AUTH_USER_MODEL # auth.User 
from django.contrib.contenttypes.models import ContentType
from django.contrib.admin.decorators import display
from django.template.loader import get_template

from parler.models import TranslatableModel, TranslatedFields
from parler.managers import TranslatableManager, TranslatableQuerySet

from .author import Author
from .category import Category
from .tag import ArticleTag
#from users.upload.models import Picture, Image

from ckeditor.fields import RichTextField
from random import randrange

class Article_QuerySet(TranslatableQuerySet):
    def is_public(self):
        return self.filter(public=True)

    def search(self, query, user=None):
        lookup = Q(title__icontains=query) | Q(content__icontains=query)
        qs = self.is_public().filter(lookup)
        if user is not None:
            qs2 = self.filter(user=user).filter(lookup)
            qs = (qs | qs2).distinct()
        return qs


class Article_manager(TranslatableManager):
    def get_message():
        pass

    def get_queryset(self, *args,**kwargs):
        return Article_QuerySet(self.model, using=self._db)

    def search(self, query, user=None):
        return self.get_queryset().search(query, user=user)


class Article(TranslatableModel):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, help_text=_('This is the help text'), related_name='category')
    slug = models.CharField(max_length=255)
    user = models.ForeignKey(User, default=1, null=True, on_delete=models.SET_NULL, related_name="article_user")
    author = models.ForeignKey(Author, null=True, on_delete=models.CASCADE, related_name="article_author")
    translations = TranslatedFields(
        title = models.CharField(max_length=127),
        caption = models.CharField(max_length=255),
        content = RichTextField()
    )
    pic = models.URLField(max_length=511, null=True, blank=True)
    publish_time = models.DateTimeField(auto_now=True, auto_now_add=False)
    public = models.BooleanField(default=True)
    tags = models.ManyToManyField(ArticleTag, blank=True)
    #picture = models.ForeignKey(Picture, on_delete=models.CASCADE, blank=True, null=True, related_name='article_picture')

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug[-1].isdigit():
            self.slug = self.slug + '-' + str(randrange(10000,99999))
        if not self.pic:
            print('save')
            #self.pic = Image.objects.filter(
            #     object_id=self.id,
            #     content_type_id=ContentType.objects.get_for_model(self).id
            # )
        super().save(*args, **kwargs)

    @display(description='Preview')
    def my_image_thumbnail(self):
        return get_template('my_image_thumbnail_template.html').render({
            'field_name': 'pic',
            'src': self.pic if self.pic else None,
        })
    
    objects = Article_manager()

