from rest_framework import viewsets, permissions, generics, mixins

from ..models.article import Author
from ..serializers import AuthorSerializer

class AuthorDetailAPIView(
    generics.RetrieveAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    lookup_field = 'pk'

author_detail_view = AuthorDetailAPIView.as_view()

class AuthorListCreateAPIView(
    generics.ListCreateAPIView):
    '''
    Get All Authors
    '''
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

author_list_create_view = AuthorListCreateAPIView.as_view()