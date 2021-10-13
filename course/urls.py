from django.urls import path
from . import views

urlpatterns = [
    path('my_courses/', views.my_courses, name='my_courses'),
    path('all_courses/', views.all_courses, name='all_courses'),
]