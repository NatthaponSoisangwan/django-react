from django.db import models
import uuid

class Menu(models.Model):
    MEAL_TIME = (
        ('Breakfast', 'Breakfast'),
        ('Lunch','Lunch'),
        ('Dinner','Dinner'),
    )

    YES_NO_OPTION =(
        ('1','yes'),
        ('0','no')
    )
    menu_name = models.CharField(primary_key=True, max_length=120)
    meal_time = models.CharField(max_length=10, choices=MEAL_TIME)
    meal_vegan = models.CharField(max_length=1, choices=YES_NO_OPTION)
    meal_vegetarian = models.CharField(max_length=1, choices=YES_NO_OPTION)
    meal_gluten_free = models.CharField(max_length=1, choices=YES_NO_OPTION)
    id = models.UUIDField("id", default=uuid.uuid4, editable=False)
 
    
    def __unicode__(self):
       return u'%s' % self.menu_name

    def __str__(self):
        return u'%s' % self.menu_name



# Create your models here.

# class Image(models.Model):
#     id = models.UUIDField("id", primary_key=True, default=uuid.uuid4, editable=False)
#     menu_name = models.ForeignKey(Menu, on_delete=models.CASCADE)
#     image = models.ImageField(upload_to='review_images')

# Review:
# stores Review object as db file review_review.sqlite3
class Review(models.Model):

    # creates columns and data types for review_review.sqlite3
    menu_name  = models.ForeignKey(Menu, related_name='review', on_delete=models.CASCADE)
    id = models.UUIDField("id", primary_key=True, default=uuid.uuid4, editable=False)
    rating = models.IntegerField("rating")
    description = models.TextField("Description")
    reviewer_email = models.CharField("Reviewer Email", max_length=255, blank=True)
    created_date = models.DateTimeField("Created Dtae", auto_now_add=True)
    image = models.ImageField(upload_to='review_images')

    # stars = models.CharField("Star Rating", max_length=120)
    def _str_(self):
        return self.id


