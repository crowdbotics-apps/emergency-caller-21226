from django.contrib import admin
from .models import MapLocation, ProfileLocation, VehicleLocation

admin.site.register(VehicleLocation)
admin.site.register(ProfileLocation)
admin.site.register(MapLocation)

# Register your models here.
