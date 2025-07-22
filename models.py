from django.db import models

# Create your models here.

class front_data(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    age = models.IntegerField()
    mobile = models.BigIntegerField()

    def __str__(self):
        return self.name
    

class react_data(models.Model):
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    mobile = models.BigIntegerField()
    age = models.IntegerField()

    def __str__(self):
        return self.name