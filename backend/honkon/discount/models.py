from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
User = settings.AUTH_USER_MODEL # auth.User 

from parler.models import TranslatableModel, TranslatedFields
from parler.managers import TranslatableManager, TranslatableQuerySet

from ckeditor.fields import RichTextField

class DiscountTag(models.Model):
    tag = models.CharField(max_length=32)
    slug = models.SlugField(max_length=32)

    def __str__(self):
        return self.tag

class Discount(TranslatableModel):
    translations = TranslatedFields(
        title = models.CharField(max_length=127),
        caption = models.CharField(max_length=255),
        content = RichTextField()
    )    
    slug = models.CharField(max_length=255)
    user = models.ForeignKey(User, default=1, null=True, on_delete=models.SET_NULL, related_name="discount_user")
    pic = models.URLField(max_length=511, null=True, blank=True)
    publish_time = models.DateTimeField(auto_now=True, auto_now_add=False)
    public = models.BooleanField(default=True)
    tags = models.ManyToManyField(DiscountTag, blank=True)

    def __str__(self):
        return self.title