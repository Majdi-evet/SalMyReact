from salal.models import Salal
from rest_framework import viewsets, permissions
from .serializers import SalalSerializer


class SalalViewSet(viewsets.ModelViewSet):
    queryset = Salal.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SalalSerializer