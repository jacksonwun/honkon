from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from django.forms import inlineformset_factory
from django.contrib.contenttypes.models import ContentType
from parler.admin import TranslatableAdmin

from .models.article import Article, Author, ArticleTag
from .models.category import Category

from users.upload.models import Image

class ImageInline(GenericTabularInline):
    model = Image

    def post_save_formset(self, request, form, model_admin, change):
        print('123')
        print(form)


@admin.register(Article)
class ArticleAdmin(TranslatableAdmin):
    list_display = ("title", "category")
    search_fields = ['slug', "title", "category"]
    inlines = [
        ImageInline,
    ]

    # def save_model(self, request, obj, form, change):
    #     print('1')
    #     print(self.inlines[0].formset)
    #     #super().save_formset(request, form, self.inlines[0].formset, change)
    #     super().save_model(request, obj, form, change)

    # def save_formset(self, request, form, formset, change):
    #     print('2')
    #     super().save_formset(request, form, formset, change)
    #     #formset.post_save_formset(request, form, self, change)        

@admin.register(ArticleTag)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("tag",)

@admin.register(Category)
class CategoryAdmin(TranslatableAdmin):
    list_display = ("name", "parent")

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("author_name", "about")

    def get_queryset(self, request):
        qs = super().get_queryset(request).prefetch_related("article_author")
        return qs