from django.db import models


class TrainingSetCollection(models.Model):
    DATA_TYPE = [
        ("image", "Image Data"),
        ("text", "Text Data"),
    ]
    name = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    timestamp = models.DateTimeField(auto_now=True)
    type = models.CharField(max_length=15, choices=DATA_TYPE)


class TrainingSet(models.Model):
    name = models.CharField(max_length=255)
    created = models.DateTimeField(auto_now_add=True)
    timestamp = models.DateTimeField(auto_now=True)
    collection = models.ForeignKey(TrainingSetCollection)
