# Generated by Django 4.1.7 on 2023-03-13 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('upload', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Picturesource',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=63)),
                ('slug', models.SlugField(max_length=63)),
                ('url', models.URLField(max_length=255)),
            ],
        ),
    ]
