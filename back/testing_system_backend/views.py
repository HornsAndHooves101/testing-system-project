
from rest_framework import viewsets
from rest_framework import permissions
from testing_system_backend.serializers import TestSerializer
from testing_system_backend.models import Test


class TestViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Test.objects.all()
    serializer_class = TestSerializer
    # permission_classes = [permissions.IsAuthenticated]
