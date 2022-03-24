from django_filters import rest_framework
from django_filters.widgets import RangeWidget, DateRangeWidget

from .models import Project, Todo


class ProjectFilter(rest_framework.FilterSet):
    text = rest_framework.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['text']


class ToDoFilter(rest_framework.FilterSet):
    # project = rest_framework.AllValuesFilter(lookup_expr='text')
    project = rest_framework.ModelChoiceFilter(queryset=Project.objects.order_by('text'))
    created_at = rest_framework.DateFromToRangeFilter(field_name='created_at',
                                                      # widget=RangeWidget(attrs={'type': 'date'}))
                                                      widget=DateRangeWidget(attrs={'type': 'date'}))

    class Meta:
        model = Todo
        fields = ['project', 'created_at']

