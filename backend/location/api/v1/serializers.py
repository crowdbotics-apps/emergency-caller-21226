from rest_framework import serializers
from location.models import MapLocation, ProfileLocation, VehicleLocation


class VehicleLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VehicleLocation
        fields = "__all__"


class ProfileLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileLocation
        fields = "__all__"


class MapLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MapLocation
        fields = "__all__"
