from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Branch, Account, Customer, Product

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email']
        # ['id','url','username','email','groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id','name']

class BranchSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True, read_only = True)
    groups = GroupSerializer(many=True, read_only = True)

    class Meta:
        model = Branch
        fields = ['branch','address','id','users','groups']

class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ['id','deposite']

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['id','bank','account']
        # 'bank',,'gender','email','phone','gender'
class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id','account_options','account_type']