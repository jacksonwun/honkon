from django.contrib import admin

from .models import Image, Picturesource, Picture, PictureTag


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('content_type', 'image')    
    readonly_fields=('my_image_thumbnail',)

@admin.register(Picture)
class PictureAdmin(admin.ModelAdmin):
    list_display = ('name', 'source', 'get_tags', 'picture', 'thumbnail_preview','picture_mobile')
    readonly_fields = ('thumbnail_preview','get_picture_mobile')
    search_fields = ('picture',)
    autocomplete_fields = ('tags',)


    def thumbnail_preview(self, obj):
        return obj.thumbnail_preview

    thumbnail_preview.short_description = 'Thumbnail Preview'
    thumbnail_preview.allow_tags = True

@admin.register(PictureTag)
class PictureTagAdmin(admin.ModelAdmin):
    list_display = ('tag','slug')
    search_fields = ('tag',)

@admin.register(Picturesource)
class PicturesourceAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'url')