from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('', include('frontend.urls')),
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('profile/', include('profile_user.urls')),
    path('courses/', include('course.urls')),
]
