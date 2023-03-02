from django.urls import path

from . import views

urlpatterns = [
    path('', views.article_list_create_view, name='article-list'),
    path('<int:pk>/', views.article_detail_view, name='article-detail'),
    path('<int:pk>/update/', views.article_update_view, name='article-edit'),
    path('<int:pk>/delete/', views.article_destroy_view),
    path('author/list/', views.author_list_create_view, name='author-list'),    
    path('author/<int:pk>/', views.author_detail_view, name='author-detail'),
]