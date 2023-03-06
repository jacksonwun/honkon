from rest_framework import serializers
from rest_framework.reverse import reverse

from ..models.category import Category
from .article import ArticleListSerializer

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