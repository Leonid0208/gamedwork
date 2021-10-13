from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse


def my_courses(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse('account_login'))
    return render(request, "courses/my.html")


def all_courses(request):
    return render(request, "courses/all.html")