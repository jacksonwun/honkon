from rest_framework import viewsets, permissions, generics, mixins

from ..models.article import Article
from ..serializers.tag import TagSerializer, TagListSerializer
from ..serializers.article import ArticleSerializer, ArticleListSerializer

class LatestAPIView(
    generics.ListAPIView):
    queryset = Article.objects.all().order_by('-publish_time')[:4]
    serializer_class = ArticleListSerializer

latest_list_view = LatestAPIView.as_view()

class EditorsAPIView(
    generics.ListAPIView):
    '''
    Get All Authors
    '''
    queryset = Article.objects.all().order_by('-publish_time')[:6]
    serializer_class = ArticleListSerializer

editors_list_view = EditorsAPIView.as_view()

class FeatureAPIView(
    generics.ListAPIView):
    '''
    Get All Authors
    '''
    queryset = Article.objects.all().order_by('-publish_time')[:10]
    serializer_class = ArticleListSerializer

feature_list_view = FeatureAPIView.as_view()


class FeatureSlideAPIView(
    generics.ListAPIView):
    '''
    Get All Authors
    '''
    queryset = Article.objects.all().order_by('-publish_time')[:10]
    serializer_class = ArticleListSerializer

featureslide_list_view = FeatureSlideAPIView.as_view()