
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from bank import views as bank_views

router = routers.DefaultRouter()
router.register(r'users',bank_views.UserViewSet,basename='users')
router.register(r'groups',bank_views.GroupViewSet,basename='groups')
router.register(r'branches',bank_views.BranchViewSet,basename='branches')
router.register(r'accounts',bank_views.AccountViewSet,basename='accounts')
router.register(r'products',bank_views.ProductViewSet,basename='products')
router.register(r'customers',bank_views.CustomerViewSet,basename='customers')


urlpatterns = [
    path('',include(router.urls)),
    path('admin/', admin.site.urls),
    path('', include('account.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
