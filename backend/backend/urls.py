"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# backend/urls.py

from django.contrib import admin
from django.urls import path, include  # add this
from rest_framework import routers  # add this
from review import views  # add this

router = routers.DefaultRouter()  # add this
router.register(r'reviews', views.ReviewView)  # add this
router.register(r'menus', views.MenuView)  # add this
# router.register(r'images', views.ImageView)  # For future development: add Url for Image table. 

urlpatterns = [
    path('admin/', admin.site.urls), path('api/', include(router.urls))  # add this
]

from django.conf import settings

from django.conf.urls.static import  static
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
