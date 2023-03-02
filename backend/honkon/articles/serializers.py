from django.contrib.auth.models import User, Group

from rest_framework import serializers
from rest_framework.reverse import reverse
from .models.article import Article, Author

class AuthorSerializer(serializers.ModelSerializer):

    def to_representation(self, obj):
            return obj.author_name
    class Meta:
        model = Author
        fields = ['author_name']


class ArticleSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
            view_name='api:articles-detail',
            lookup_field='pk',
            read_only=True
    )
    author = AuthorSerializer("author", read_only=True)
    class Meta:
        model = Article
        fields = '__all__'
        ordering = ['-publish_time']

    def get_edit_url(self, obj):
        request = self.context.get('request') # self.request
        if request is None:
            return None
        return reverse("article-edit", kwargs={"pk": obj.pk}, request=request) 
