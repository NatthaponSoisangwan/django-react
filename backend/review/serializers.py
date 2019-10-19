# todo/serializers.py

from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('id', 'title', 'stars', 'description', 'name', 'createdAt','image')
