from rest_framework import viewsets, permissions, generics, mixins

from ..models.tag import ArticleTag
from ..serializers.tag import TagSerializer, TagListSerializer

class TagDetailAPIView(
    generics.RetrieveAPIView):
    queryset = ArticleTag.objects.all()
    serializer_class = TagSerializer
    lookup_field = 'pk'

tag_detail_view = TagDetailAPIView.as_view()

class TagListCreateAPIView(
    generics.ListCreateAPIView):
    '''
    Get All Authors
    '''
    queryset = ArticleTag.objects.all()
    serializer_class = TagListSerializer

tag_list_create_view = TagListCreateAPIView.as_view()