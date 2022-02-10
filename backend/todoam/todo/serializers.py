from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'
        ordering = ['status']

    def get_todo_set(self, instance):
        todos = instance.queryset.all().order_by('-status')
        return TodoSerializer(todos).data
