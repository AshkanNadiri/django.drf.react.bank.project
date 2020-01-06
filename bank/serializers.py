from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Branch, Account, Customer, Product

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','url','username','email','groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id','url','name']

class BranchSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Branch
        fields = ['id','url','branch','address']

class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ['id','url','customer','deposite']

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name="branch-fields")
    class Meta:
        model = Customer
        fields = ['id','url','bank','customer','gender','email','phone']

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id','url','account_options','account_type']