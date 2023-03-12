from rest_framework import viewsets, permissions, generics, mixins

from ..models.article import Article
from ..serializers.tag import TagSerializer, TagListSerializer
from ..serializers.article import ArticleSerializer, ArticleListSerializer

class ArticleSuggestView(
    generics.ListAPIView):
    queryset = Article.objects.all().order_by('-publish_time')[:2]
    serializer_class = ArticleListSerializer

article_suggest_view = ArticleSuggestView.as_view()