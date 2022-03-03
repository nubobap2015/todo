from django.db import models
from django.utils.translation import gettext_lazy as _
from uuid import uuid4
from my_users.models import CustomUser


class Project(models.Model):
    authors = models.ManyToManyField(CustomUser)
    ext_url = models.URLField(blank=True)

    id = models.UUIDField(primary_key=True, default=uuid4)
    text = models.CharField(max_length=2000, blank=False)
    color = models.IntegerField(blank=False, default=int("0xffdb8b", 16))
    is_active = models.BooleanField(default=True)
    is_html = models.BooleanField(default=False)
    updated_at = models.DateField(auto_now=True)
    created_at = models.DateField(auto_now_add=True)


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.PROTECT)
    author = models.ForeignKey(CustomUser, on_delete=models.PROTECT)

    id = models.UUIDField(primary_key=True, default=uuid4)
    text = models.CharField(max_length=2000, blank=False)
    color = models.IntegerField(blank=False, default=int("0xffdb8b", 16))
    is_active = models.BooleanField(default=True)
    is_html = models.BooleanField(default=False)
    updated_at = models.DateField(auto_now=True)
    created_at = models.DateField(auto_now_add=True)



