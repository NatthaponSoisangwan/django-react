from django.db import models


# Create your models here.

# add this
class Review(models.Model):
    STARS = (
    ('1', 'One'),
    ('2', 'Two'),
    ('3', 'Three'),
    ('4', 'Four'),
    ('5', 'Five'),
    )
    title = models.CharField(max_length=120)
    # stars = models.CharField(max_length=1, choices=STARS)
    stars = models.CharField(max_length=120)

    description = models.TextField()
# img here
    name = models.CharField("Name", max_length=255)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    def _str_(self):
        return self.title