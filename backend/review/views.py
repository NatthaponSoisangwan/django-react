# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets  # add this
from .serializers import ReviewSerializer, MenuSerializer #,ImageSerializer  # add this
from .models import Review, Menu #, Image  # add this
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework import filters

class ReviewView(viewsets.ModelViewSet):  # add this
    serializer_class = ReviewSerializer  # add this
    queryset = Review.objects.all()  # add this
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_date']

class MenuView(viewsets.ModelViewSet):  # add this
    serializer_class = MenuSerializer  # add this
    queryset = Menu.objects.all()  # add this
    filterset_fields = ['meal_time']

# class ImageView(viewsets.ModelViewSet):  # add this
#     serializer_class = ImageSerializer  # add this
#     queryset = Image.objects.all()  # add this

