from django.urls import path
from . import views

urlpatterns = [
    path('api/gamedwork/', views.GamedworkListCreate.as_view() ),
]