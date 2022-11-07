from django.urls import path, include
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from testing_system_backend import views


router = routers.DefaultRouter()
router.register(r'tests', views.TestViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
