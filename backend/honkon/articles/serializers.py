from django.contrib.auth.models import User, Group

from rest_framework import serializers
from rest_framework.reverse import reverse
from .models.article import Article, Author
import json


class AuthorSerializer(serializers.ModelSerializer):
    def to_representation(self, obj):
            return obj.author_name
    class Meta:
        model = Author
        fields = ['author_name']


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = '__all__'
        ordering = ['-publish_time']

    def get_edit_url(self, obj):
        request = self.context.get('request') # self.request
        if request is None:
            return None
        return reverse("article-edit", kwargs={"pk": obj.pk}, request=request) 

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