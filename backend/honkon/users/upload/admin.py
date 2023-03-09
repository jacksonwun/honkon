from django.contrib import admin

from .models import Image


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('content_type', 'image')
    
    readonly_fields=('my_image_thumbnail',)