from rest_framework import generics, permissions, status
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer, PasswordSerializer

# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data = request.data)
    serializer.is_valid(raise_exception =True)
    user = serializer.save()
    return Response({
      'user': UserSerializer(user, context = self.get_serializer_context()).data,
      'token': AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data = request.data)   
    serializer.is_valid(raise_exception = True) 
    user = serializer.validated_data
    return Response ({
      'user': UserSerializer(user, context = self.get_serializer_context()).data,
      'token': AuthToken.objects.create(user)[1]
    })
    
# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user

# Get password API
class PasswordAPI(APIView):

    def get_object(self, username):
        user = generics.get_object_or_404(User, username=username)
        return user

    def put(self, request):
        serializer = PasswordSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.data['username']
            user = self.get_object(username)
            new_password = serializer.data['password']
            is_same_as_old = user.check_password(new_password)
            if is_same_as_old:
                """
                old password and new passwords should not be the same
                """
                return Response({"password": ["It should be different from your last password."]},
                                status=status.HTTP_400_BAD_REQUEST)
            user.set_password(new_password)
            user.save()
            return Response({'success':True})

            # res = {key: user.__dict__[key] for key in user.__dict__.keys() & {'username', 'email', 'date_joined'}} 

            # return Response(res)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)