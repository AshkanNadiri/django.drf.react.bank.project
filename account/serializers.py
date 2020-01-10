from rest_framework import serializers
from django.contrib.auth.models import User, Permission
from django.contrib.auth import authenticate

class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'
# User Serializer
class UserSerializer(serializers.ModelSerializer):   
    user_permissions = PermissionSerializer(many=True)
    class Meta:
        model = User
        fields = '__all__'
    def create(self, validated_data):
        permissions_data = validated_data.pop('user_permissions')
        user = User.objects.create(**validated_data)
        for permission_data in permissions_data:
            Permission.objects.create(user=user, **permission_data)
        return user
  
#Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id','username','password','email']
    extra_kwargs = {'password' : {'write_only' : True}}

  def create(self, validated_data):
    user = User.objects.create_user(
      validated_data['username'],
      validated_data['email'],
      validated_data['password']
    ) 
    return user

  

#login Serializer
class LoginSerializer(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active: 
      return user
    raise serializers.ValidationError("Incorrect Credentials")