from django.contrib import admin
from .models import Review, Menu  # add this

class ReviewAdmin(admin.ModelAdmin):  # add this
    list_display = ("menu_name",
        "rating",
        "description",
        "reviewer_email",
        "created_date",
        "image",)

class MenuAdmin(admin.ModelAdmin):  # add this
    list_display = ("menu_name",
    "meal_time",
    "meal_vegan", 
    "meal_vegetarian",
    "meal_gluten_free",
    "id",)

# Register your models here.
admin.site.register(Review, ReviewAdmin)  # add this
admin.site.register(Menu, MenuAdmin)  # add this