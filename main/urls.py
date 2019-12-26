
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from bank import views as bank_views

router = routers.DefaultRouter()
router.register(r'users',bank_views.UserViewSet, 'users')
router.register(r'groups',bank_views.GroupViewSet,'groups')
router.register(r'branches',bank_views.BranchViewSet,'branches')
router.register(r'accounts',bank_views.AccountViewSet, 'accounts')
router.register(r'products',bank_views.ProductViewSet, 'products')
router.register(r'customers',bank_views.CustomerViewSet, 'customers')


urlpatterns = [
    path('',include(router.urls)),
    path('admin/', admin.site.urls),
]
