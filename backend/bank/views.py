from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .serializers import UserSerializer, GroupSerializer, BranchSerializer, CustomerSerializer, ProductSerializer, AccountSerializer
from rest_framework import viewsets, permissions
from .models import Branch, Account, Product, Customer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows user to be viewed and edit
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows group to be viewed or edit.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branch.objects.all()
    # permission_classes = [
    #     permissions.IsAuthenticated
    # ]
    serializer_class = BranchSerializer
    # def get_queryset(self, request):
    #     qs = super().get_queryset(request)

    #     return qs.filter(branch = request.user.branch)


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class CustomerViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = CustomerSerializer
    
    def get_queryset(self):
        return self.request.user.customers.all()[1]

    def perform_create(self, serializer):
        serializer.save(customer = self.request.user)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
