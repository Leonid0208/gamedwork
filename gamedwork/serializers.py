from rest_framework import serializers
from .models import Gamedwork

class GamedworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gamedwork
        fields = ('id', 'name', 'email', 'message')