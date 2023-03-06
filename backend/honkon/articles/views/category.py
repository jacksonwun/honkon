from django.shortcuts import render
from django.contrib.auth.models import User, Group

from rest_framework import viewsets, permissions, generics, mixins

from ..models.category import Category
from ..serializers.category import CategoryListSerializer, CategorySerializer
from users.mixins import (
    StaffEditorPermissionMixin,
    UserQuerySetMixin)


class CategoryListCreateAPIView(
    generics.ListAPIView):

    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer

    def perform_create(self, serializer):
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content') or None
        if content is None:
            content = title
        serializer.save(user=self.request.user, content=content)

category_list_create_view = CategoryListCreateAPIView.as_view()

class CategoryDetailAPIView(
    generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

category_detail_view = CategoryDetailAPIView.as_view()