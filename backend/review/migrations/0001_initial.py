# Generated by Django 2.2.6 on 2019-10-20 18:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120, verbose_name='Food Title')),
                ('stars', models.CharField(max_length=1, verbose_name='Star Rating')),
                ('description', models.TextField(verbose_name='Description')),
                ('image', models.ImageField(upload_to='review_images')),
                ('name', models.CharField(blank=True, max_length=255, verbose_name='Name')),
                ('createdAt', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
            ],
        ),
    ]
