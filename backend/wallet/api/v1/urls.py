from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DriverWalletViewSet, PaymentMethodViewSet, UserWalletViewSet

router = DefaultRouter()
router.register("paymentmethod", PaymentMethodViewSet)
router.register("driverwallet", DriverWalletViewSet)
router.register("userwallet", UserWalletViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
