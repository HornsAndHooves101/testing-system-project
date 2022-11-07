from testing_system_backend.models import Test
from rest_framework import serializers


class TestSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Test
        fields = ["name", 'id']
