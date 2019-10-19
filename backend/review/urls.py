from django.urls import path
from . import views

urlpatterns = [
    path('reviews/', views.PostView.as_view(), name= 'reviews_list'),
]