from django.contrib import admin
from .models import DriverWallet, PaymentMethod, UserWallet

admin.site.register(PaymentMethod)
admin.site.register(DriverWallet)
admin.site.register(UserWallet)

# Register your models here.
