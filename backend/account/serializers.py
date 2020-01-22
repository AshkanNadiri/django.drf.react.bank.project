from rest_framework import serializers
from django.contrib.auth.models import User, Permission, Group
from django.contrib.auth import authenticate

# Permission Serializer
class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ('id', 'name',)

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    groups = PermissionSerializer(many=True)
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'groups')
    def created(self, validated_data):
        permissions_data = validated_data.pop('groups')
        user = User.objects.create(**validated_data)
        for permission_data in permissions_data:
            Permission.objects.create(user=user, **permission_data)
        return user

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'groups')
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )     
        user.groups.set(validated_data['groups'])
        return user

# Log in Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
          return user
        raise serializers.ValidationError("Incorrect Credentials")

# Group Serializer
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

# Reset Password Serializer
class PasswordSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass
        # instance.username = validated_data.get('username', instance.username)
        # instance.password = validated_data.get('hashedNewPassword', instance.password)
        # instance.save()
        # return instance

    def validate(self, data):
        """ check that username and new password are different """
        if data["username"] == data["password"]:
            raise serializers.ValidationError("Password should be different")
        return data

    def validate_password(self, value):
        """
        check if new password meets the specs
        min 1 lowercase and 1 uppercase alphabet
        1 number
        1 special character
        8-16 character length
        """

        if len(value) < 8 or len(value) > 16:
            raise serializers.ValidationError("It should be between 8 and 16 characters long")

        if not any(x.isupper() for x in value):
            raise serializers.ValidationError("It should have at least one upper case alphabet")

        if not any(x.islower() for x in value):
            raise serializers.ValidationError("It should have at least one lower case alphabet")

        if not any(x.isdigit() for x in value):
            raise serializers.ValidationError("It should have at least one number")

        valid_special_characters = {'@', '_', '!', '#', '$', '%', '^', '&', '*', '(', ')',
                                    '<', '>', '?', '/', '|', '{', '}', '~', ':'}

        if not any(x in valid_special_characters for x in value):
            raise serializers.ValidationError("It should have at least one special character")

        return value