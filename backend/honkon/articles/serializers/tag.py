from rest_framework import serializers

from ..models.tag import ArticleTag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleTag
        fields = '__all__'