from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from uuid import uuid4

# from .manager import CustomUserManager


class CustomUser(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid4)
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    # objects = CustomUserManager()

    def __str__(self):
        return self.email
