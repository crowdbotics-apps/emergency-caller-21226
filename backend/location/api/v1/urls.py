from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MapLocationViewSet, ProfileLocationViewSet, VehicleLocationViewSet

router = DefaultRouter()
router.register("vehiclelocation", VehicleLocationViewSet)
router.register("profilelocation", ProfileLocationViewSet)
router.register("maplocation", MapLocationViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
