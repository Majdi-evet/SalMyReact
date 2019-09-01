from django.db import models

# Create your models here.
class Salal(models.Model):
    ids = models.CharField(max_length=100, unique=True)
    album = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    song = models.CharField(max_length=100)