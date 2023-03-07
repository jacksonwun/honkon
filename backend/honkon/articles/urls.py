from django.urls import path

from .views.article import article_list_create_view, article_detail_view, article_update_view, article_destroy_view
from .views.author import author_list_create_view, author_detail_view
from .views.category import category_list_create_view, category_detail_view
from .views.tag import tag_detail_view, tag_list_create_view


urlpatterns = [
    # Article
    path('article/', article_list_create_view, name='article-list'),
    path('article/<str:slug>/', article_detail_view, name='article-detail'),
    path('article/<str:slug>/update/', article_update_view, name='article-edit'),
    path('article/<str:slug>/delete/', article_destroy_view),
    # Author
    path('author/list/', author_list_create_view, name='author-list'),    
    path('author/<int:pk>/', author_detail_view, name='author-detail'),
    # Tag
    path('tags/', tag_list_create_view, name='tag-list'),
    path('tag/<str:slug>/', tag_detail_view, name='tag-detail'),
    # Category
    path('categories/', category_list_create_view, name='category-list'),   
    path('<str:slug>/', category_detail_view, name='category-detail'),
]