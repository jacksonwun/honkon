from django.shortcuts import render
from django.contrib.auth.models import User, Group

from rest_framework import viewsets, permissions, generics, mixins

from random import randrange

from ..models.article import Article, Author
from ..serializers import ArticleSerializer, AuthorSerializer, ArticleListSerializer
from users.mixins import (
    StaffEditorPermissionMixin,
    UserQuerySetMixin)


class ArticleListCreateAPIView(
    generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleListSerializer

    def perform_create(self, serializer):
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content') or None
        if content is None:
            content = title
        serializer.save(user=self.request.user, content=content)

article_list_create_view = ArticleListCreateAPIView.as_view()

class ArticleDetailAPIView(
    generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'slug'

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

article_detail_view = ArticleDetailAPIView.as_view()

class ArticleUpdateAPIView(
    UserQuerySetMixin,
    StaffEditorPermissionMixin,
    generics.UpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'slug'

    def perform_update(self, serializer):
        instance = serializer.save()
        if not instance.content:
            instance.content = instance.title

article_update_view = ArticleUpdateAPIView.as_view()

class ArticleDestroyAPIView(
    UserQuerySetMixin,
    StaffEditorPermissionMixin,
    generics.DestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'slug'

    def perform_destroy(self, instance):
        # instance 
        super().perform_destroy(instance)

article_destroy_view = ArticleDestroyAPIView.as_view()
