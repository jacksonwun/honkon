# Generated by Django 4.1.7 on 2023-03-03 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0010_article_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='tags',
            field=models.ManyToManyField(to='articles.articletag'),
        ),
    ]
