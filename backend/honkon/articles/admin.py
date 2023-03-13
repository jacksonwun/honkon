from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from django.forms import inlineformset_factory
from django.contrib.contenttypes.models import ContentType
from parler.admin import TranslatableAdmin

from .models.article import Article, Author
from .models.tag import ArticleTag
from .models.category import Category

from users.upload.models import Picture

class PictureInline(admin.TabularInline):
    model = Picture

@admin.register(Article)
class ArticleAdmin(TranslatableAdmin):
    list_display = ("slug", "title", "category")
    search_fields = ['slug', "category"]
    fields=(
        'category',
        'slug',
        'author',
        'title',
        'caption',
        'content',
        'public',
        'pic',
        'tags',
        'picture_preview',
        )
    autocomplete_fields = ('tags', 'category')
    readonly_fields=('picture_preview',)
    inlines = [
        PictureInline,
    ]

    def picture_upload(self, obj):
        return ""

    def picture_preview(self, obj):
        return obj.picture.thumbnail_preview

    picture_preview.short_description = 'Thumbnail Preview'
    picture_preview.allow_tags = True
     

@admin.register(ArticleTag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("tag",)
    search_fields = ("tag",)

@admin.register(Category)
class CategoryAdmin(TranslatableAdmin):
    list_display = ("name", "parent")
    search_fields = ("name",)

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("author_name", "about")

    def get_queryset(self, request):
        qs = super().get_queryset(request).prefetch_related("article_author")
        return qs