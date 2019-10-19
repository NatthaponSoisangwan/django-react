# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets  # add this
from .serializers import ReviewSerializer  # add this
from .models import Review  # add this
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status


class ReviewView(viewsets.ModelViewSet):  # add this
    serializer_class = ReviewSerializer  # add this
    queryset = Review.objects.all()  # add this
