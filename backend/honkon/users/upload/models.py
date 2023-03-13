from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.admin.decorators import display
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils.html import format_html

from imagekit.models import ImageSpecField
from pilkit.processors import ResizeToFill
from pilkit.processors import Thumbnail
from sorl.thumbnail import get_thumbnail

from articles.models.article import Article

class Image(models.Model):
    image = models.ImageField(upload_to="images")
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey("content_type", "object_id")

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    @display(description='Preview')
    def my_image_thumbnail(self):
        return get_template('my_image_thumbnail_template.html').render({
            'field_name': 'pic',
            'src': self.pic if self.pic else None,
        })


class Picturesource(models.Model):
    name = models.CharField(max_length=63)
    slug = models.SlugField(max_length=63)
    url = models.URLField(max_length=255)

    def __str__(self):
        return self.name

class PictureTag(models.Model):
    tag = models.CharField(max_length=32)
    slug = models.SlugField(max_length=32)

    def __str__(self):
        return self.tag

class Picture(models.Model):
    picture = models.ImageField(_("Picture"), upload_to="pictures/%Y/%m/%d/")
    picture_desktop = ImageSpecField(
        source="picture",
        processors=[Thumbnail(1200, 600)],
        format="JPEG",
        options={"quality": 70},
    )
    picture_tablet = ImageSpecField(
        source="picture", processors=[Thumbnail(768, 384)], 
        format="JPEG",
        options={"quality": 50}
    )
    picture_mobile = ImageSpecField(
        source="picture", processors=[Thumbnail(640, 320)], 
        format="JPEG",
        options={"quality": 50}
    )
    name = models.CharField(max_length=255)
    source = models.ForeignKey(Picturesource, on_delete=models.CASCADE,related_name='picture_source')
    tags = models.ManyToManyField(PictureTag, blank=True)
    article = models.ForeignKey(Article, on_delete=models.CASCADE, blank=True, null=True, related_name='article_picture')


    def get_tags(self):
        return "\n".join([p.tags for p in self.tags.all()])

    def __str__(self):
        return self.name

    @property
    def thumbnail_preview(self):
        if self.picture:
            _thumbnail = get_thumbnail(self.picture,
                                   '300x300',
                                   upscale=False,
                                   crop=False,
                                   quality=100)
            return format_html('<img src="{}" width="{}" height="{}">'.format(_thumbnail.url, _thumbnail.width, _thumbnail.height))
        return ""
    
    @property
    def get_picture_mobile(self):
        if self.picture:
            return self.picture_mobile.url
        return ""

