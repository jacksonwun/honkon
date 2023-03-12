from django.contrib import admin

from .models import Image, Picture, PictureTag


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('content_type', 'image')
    
    readonly_fields=('my_image_thumbnail',)

@admin.register(Picture)
class PictureAdmin(admin.ModelAdmin):
    list_display = ('picture',)    
    readonly_fields=('picture_desktop',)

@admin.register(PictureTag)
class PictureTagAdmin(admin.ModelAdmin):
    list_display = ('tag',)    
    readonly_fields=('tag',)