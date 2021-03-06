# Generated by Django 2.2.6 on 2019-10-20 20:24

from __future__ import unicode_literals
from django.db import migrations, models
from django.core.management import call_command

def load_my_initial_data(apps, schema_editor):
    call_command("loaddata", "review_populator.json")

class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='image',
            field=models.ImageField(blank=True, upload_to='review_images'),
        ),
        migrations.RunPython(
            load_my_initial_data
        ),
    ]
