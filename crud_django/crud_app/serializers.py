from rest_framework import serializers
from .models import react_data


class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = react_data
        fields = "__all__"
