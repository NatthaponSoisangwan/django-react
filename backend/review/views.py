# todo/views.py

from django.shortcuts import render
from rest_framework import viewsets  # add this
from .serializers import ReviewSerializer  # add this
from .models import Review  # add this


class ReviewView(viewsets.ModelViewSet):  # add this
    serializer_class = ReviewSerializer  # add this
    queryset = Review.objects.all()  # add this
