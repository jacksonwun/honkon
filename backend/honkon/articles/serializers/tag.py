from rest_framework import serializers
from rest_framework.reverse import reverse

from ..models.tag import ArticleTag

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = ArticleTag
        fields = '__all__'


class TagListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ArticleTag
        fields = '__all__'
        ordering = ['tag']


    def get_edit_url(self, obj):
        request = self.context.get('request') # self.request
        if request is None:
            return None
        return reverse("tag-detail", kwargs={"slug": obj.slug}, request=request)