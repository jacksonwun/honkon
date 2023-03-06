from rest_framework import serializers

from ..models.author import Author

class AuthorSerializer(serializers.ModelSerializer):
    def to_representation(self, obj):
            return obj.author_name
    class Meta:
        model = Author
        fields = ['author_name']
