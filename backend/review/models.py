from django.db import models


# Create your models here.

# Review:
# stores Review object as db file review_review.sqlite3
class Review(models.Model):
    # sets permitted values for stars
    STARS = (
        1,
        2,
        3,
        4,
        5
    )

    # creates columns and data types for review_review.sqlite3
    title = models.CharField("Food Name", max_length=120)
    stars = models.CharField("Star Rating", max_length=1, choices=STARS)
    description = models.TextField("Description")
# img here
    name = models.CharField("Poster Name", max_length=255)
    createdAt = models.DateTimeField("Creation DateTime", auto_now_add=True)

    # stars = models.CharField("Star Rating", max_length=120)
    def _str_(self):
        return self.title