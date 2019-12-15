from django.contrib import admin
from .models import Review  # add this


class ReviewAdmin(admin.ModelAdmin):  # add this
    list_display = ("menu_name",
        "rating",
        "description",
        "reviewer_email",
        "created_date",
        "image",)


# Register your models here.
admin.site.register(Review, ReviewAdmin)  # add this