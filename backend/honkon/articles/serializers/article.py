from rest_framework import serializers
from rest_framework.reverse import reverse

from ..models.article import Article

class ArticleSerializer(serializers.BaseSerializer):

    class Meta:
        model = Article
        fields = '__all__'
        ordering = ['-publish_time']

    def get_edit_url(self, obj):
        request = self.context.get('request') # self.request
        if request is None:
            return None
        return reverse("category-detail", kwargs={"slug": obj.category.slug}, request=request) 

    def to_representation(self, instance):
        return {
            'category': str(instance.category),
            'category_slug': str(instance.category.slug),
            'category_url': self.get_edit_url(instance),
            'slug': instance.slug,
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
        ordering = ['publish_time']

    def get_edit_url(self, obj):
        request = self.context.get('request') # self.request
        if request is None:
            return None
        return reverse("article-detail", kwargs={"slug": obj.slug}, request=request) 
    
    def to_representation(self, instance):
        return {
            'category': str(instance.category),
            'category_slug': str(instance.category.slug),
            'slug': instance.slug,
            'author': str(instance.author),
            'title': instance.title,
            'caption': instance.caption,
            'pic': instance.pic,
            'publish_time': instance.publish_time,
            'url': self.get_edit_url(instance)
        }

