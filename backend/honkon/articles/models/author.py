
from django.db import models

class Author(models.Model):
    author_name = models.CharField(max_length=32, default="Anonymous")
    about = models.CharField(max_length=256, null=True, blank=True)
    profile_pic = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.author_name
