# Generated by Django 4.0.2 on 2022-03-03 14:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('ext_url', models.URLField(blank=True)),
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('text', models.CharField(max_length=2000)),
                ('color', models.IntegerField(default=16767883)),
                ('is_active', models.BooleanField(default=True)),
                ('is_html', models.BooleanField(default=False)),
                ('updated_at', models.DateField(auto_now=True)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('authors', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('text', models.CharField(max_length=2000)),
                ('color', models.IntegerField(default=16767883)),
                ('is_active', models.BooleanField(default=True)),
                ('is_html', models.BooleanField(default=False)),
                ('updated_at', models.DateField(auto_now=True)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='todo.project')),
            ],
        ),
    ]