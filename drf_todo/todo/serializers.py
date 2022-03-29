from rest_framework.serializers import ModelSerializer
from my_users.serializers import CustomUserModelSerializer
from .models import Project, Todo


class ProjectModelSerializer(ModelSerializer):
    authors = CustomUserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    author = CustomUserModelSerializer()
    project = ProjectModelSerializer()

    class Meta:
        model = Todo
        fields = '__all__'
