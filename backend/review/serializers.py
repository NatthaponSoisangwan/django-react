# todo/serializers.py

from rest_framework import serializers
from .models import Review, Menu #,Image

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('menu_name', 'id', 'rating', 'description', 'reviewer_email', 'created_date', 'image')
        ordering = ('created_date')
    
   
# class ImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Image
#         fields = '__all__'

