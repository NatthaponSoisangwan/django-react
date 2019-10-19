from django.contrib import admin
from .models import Review  # add this


class ReviewAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'stars', 'description', 'name', 'createdAt','image')


# Register your models here.
admin.site.register(Review, ReviewAdmin)  # add this