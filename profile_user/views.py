from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse


def profile(request):
    if not request.user.is_authenticated:
        return HttpResponseRedirect(reverse('account_login'))
    return render(request, "profile/index.html")