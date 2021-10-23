from django.db import models
from django.utils import timezone


class Student(models.Model):
    full_name = models.CharField(max_length=150)
    birthDate = models.DateField(default=timezone.now)
    email = models.EmailField(default='')
    login = models.CharField(max_length=150, default='')
    password = models.CharField(max_length=50, default='')
    phone = models.CharField(max_length=100, default='')


class Teacher(models.Model):
    full_name = models.CharField(max_length=150)
    birthDate = models.DateField(default=timezone.now)
    email = models.EmailField(default='')
    login = models.CharField(max_length=150, default='')
    password = models.CharField(max_length=50, default='')
    phone = models.CharField(max_length=100, default='')