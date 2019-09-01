from rest_framework import serializers
from salal.models import Salal

class SalalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salal
        fields = "__all__"