# Generated by Django 4.1.7 on 2023-03-13 17:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0021_article_picture'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='picture',
        ),
    ]
