import rest_framework.status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from .models import Project, Todo
from .filter import ProjectFilter, ToDoFilter
from .serializers import ProjectModelSerializer, TodoModelSerializer


class ProjectLOP(LimitOffsetPagination):
    default_limit = 10


class ToDoLOP(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLOP
    filterset_class = ProjectFilter
    lookup_field = 'text'


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    pagination_class = ToDoLOP
    filterset_class = ToDoFilter

    def destroy(self, request, *args, **kwargs):
        try:
            todo = self.get_object()
            todo.is_active = False
            todo.save()
        except():
            return Response(status=rest_framework.status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=rest_framework.status.HTTP_200_OK)

