from django.contrib import admin

from .models.article import Article, Author, ArticleTag
from .models.category import Category

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("author_name", "about")

    def get_queryset(self, request):
        qs = super().get_queryset(request).prefetch_related("article_author")
        return qs

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title",)

    # def get_queryset(self, request):
    #     qs = super().get_queryset(request).select_related("user", "author")
    #     return qs

    # def author_name(self, obj):
    #     return obj


@admin.register(ArticleTag)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("tag",)

@admin.register(Category)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("name",)