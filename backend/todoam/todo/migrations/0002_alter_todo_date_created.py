# Generated by Django 4.0.2 on 2022-02-04 14:43

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
