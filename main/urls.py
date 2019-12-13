
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from bank import views as bank_views

router = routers.DefaultRouter()
router.register(r'user',bank_views.UserViewSet)
router.register(r'group',bank_views.GroupViewSet)
router.register(r'branch',bank_views.BranchViewSet)
router.register(r'account',bank_views.AccountViewSet)
router.register(r'product',bank_views.ProductViewSet)
router.register(r'customer',bank_views.CustomerViewSet)


urlpatterns = [
    path('',include(router.urls)),
    path('admin/', admin.site.urls),
]
