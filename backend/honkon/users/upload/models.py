from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.admin.decorators import display
from django.db import models
from django.utils.translation import gettext_lazy as _

from imagekit.models import ImageSpecField
from pilkit.processors import ResizeToFill

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
    picture = models.ImageField(_("Picture"), upload_to="pictures")
    picture_desktop = ImageSpecField(
        source="picture",
        processors=[ResizeToFill(1200, 600)],
        format="JPEG",
        options={"quality": 100},
    )
    picture_tablet = ImageSpecField(
        source="picture", processors=[ResizeToFill(768, 384)], 
        format="PNG",
        options={"quality": 70}
    )
    picture_mobile = ImageSpecField(
        source="picture", processors=[ResizeToFill(640, 320)], 
        format="PNG",
        options={"quality": 50}
    )
    name = models.CharField(max_length=255)
    source = models.ForeignKey(Picturesource, on_delete=models.CASCADE,related_name='picture_source')
    tags = models.ManyToManyField(PictureTag, blank=True)


