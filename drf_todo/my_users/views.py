from rest_framework.viewsets import ModelViewSet
from .models import CustomUser
from .serializers import CustomUserModelSerializer
from rest_framework import mixins, viewsets


class CustomUserModelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin,
                             mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserModelSerializer

