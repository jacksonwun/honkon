from django.db import models
from django.utils.translation import gettext_lazy as _

from ..models.category import Category

class ArticleTag(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, help_text=_('This is the help text'), related_name='tag_category')
    tag = models.CharField(max_length=32)
    slug = models.SlugField(max_length=32)

    def __str__(self):
        return self.tag
