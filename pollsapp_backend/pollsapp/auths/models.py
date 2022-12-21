from django.db import models
from django.contrib.auth.models import AbstractUser
from polls.models import Poll

# Create your models here.

class PollsUser(AbstractUser):
    score = models.IntegerField(default=0)





    def __str__(self):
         return self.username