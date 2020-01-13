
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from bank import views as bank_views

router = routers.DefaultRouter()
router.register(r'users',bank_views.UserViewSet)
router.register(r'groups',bank_views.GroupViewSet)
router.register(r'branches',bank_views.BranchViewSet)
router.register(r'accounts',bank_views.AccountViewSet)
router.register(r'products',bank_views.ProductViewSet)
router.register(r'customers',bank_views.CustomerViewSet)


urlpatterns = [
    path('',include(router.urls)),
    path('admin/', admin.site.urls),
    path('user/', include('account.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
