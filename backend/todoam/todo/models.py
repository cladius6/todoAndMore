from django.db import models
from django.utils import timezone 

# Create your models here.
class Todo(models.Model):
    content = models.CharField(max_length=32)
    description = models.CharField(max_length=250, blank=True) 
    status = models.BooleanField(default=False, blank=True)
    date_created = models.DateTimeField(default=timezone.now, blank=True)
    date_goal = models.DateTimeField(null=True, blank=True)
    # todo:
        # piority also
        # authorization - user

