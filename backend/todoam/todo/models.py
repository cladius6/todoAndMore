from django.db import models
from django.utils import timezone 

# Validators here.
def validate_priority(value):
    if not value > 0 and value <= 10:
        raise ValidationError(
                _('%(value)s is not in range 1 to 10.'),
                params={'value': value}
        )


# Create your models here.
class Todo(models.Model):
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=250, blank=True) 
    status = models.BooleanField(default=False, blank=True)
    date_created = models.DateTimeField(default=timezone.now, blank=True)
    deadline = models.DateTimeField(null=True, blank=True)
    priority = models.SmallIntegerField(default=1)

    class Meta:
        ordering = ['status']
