from django.contrib.auth.models import User, Group

from rest_framework import serializers
from rest_framework.reverse import reverse

from .models.article import Article
from .models.author import Author
from .models.category import Category

class AuthorSerializer(serializers.ModelSerializer):
    def to_representation(self, obj):
            return obj.author_name
    class Meta:
        model = Author
        fields = ['author_name']


class ArticleSerializer(serializers.BaseSerializer):

    class Meta:
        model = Article
        fields = '__all__'
        ordering = ['-publish_time']

    def to_representation(self, instance):
        return {
            'category': str(instance.category),
            'author': str(instance.author),
            'title': instance.title,
            'caption': instance.caption,
            'content': instance.content,
            'pic': instance.pic,
            'publish_time': instance.publish_time,
            'public': instance.public,
        }
    

class ArticleListSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
            view_name='articles:article-detail',
            lookup_field='slug',
            read_only=True
    )

    class Meta:
        model = Article
        fields = '__all__'
        #exclude = ('user', 'public')
        ordering = ['-publish_time']

    def get_edit_url(self, obj):
        request = self.context.get('request') # self.request
        if request is None:
            return None
        return reverse("article-detail", kwargs={"slug": obj.slug}, request=request) 
    
    def to_representation(self, instance):
        return {
            'category': str(instance.category),
            'author': str(instance.author),
            'title': instance.title,
            'caption': instance.caption,
            'pic': instance.pic,
            'publish_time': instance.publish_time,
            'url': self.get_edit_url(instance)
        }


class CategoryListSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
            view_name='articles:category-detail',
            lookup_field='slug',
            read_only=True
    )

    class Meta:
        model = Category
        fields = '__all__'
        ordering = ['-publish_time']

    def get_edit_url(self, obj):
        request = self.context.get('request') # self.request
        if request is None:
            return None
        return reverse("category-detail", kwargs={"slug": obj.slug}, request=request) 
    
    def to_representation(self, instance):
        return {
            'slug': str(instance.slug),
            'url': self.get_edit_url(instance)
        }
    
class CategorySerializer(serializers.ModelSerializer):
    category = ArticleListSerializer(read_only=True, many=True)

    class Meta:
        model = Category
        fields = ['slug','category','articles','last_article_on','last_thread_slug','parent','last_poster','last_article']
        ordering = ['-publish_time']