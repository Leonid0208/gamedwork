from .models import Gamedwork
from .serializers import GamedworkSerializer
from rest_framework import generics

class GamedworkListCreate(generics.ListCreateAPIView):
    queryset = Gamedwork.objects.all()
    serializer_class = GamedworkSerializer