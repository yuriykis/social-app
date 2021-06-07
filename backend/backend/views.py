from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Posts
from .serializers import PostsSerializer, UserSerializer

class Test(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        return HttpResponse(status=status.HTTP_200_OK)


class Register(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            firstName = request.data.get('firstName')
            lastName = request.data.get('lastName')

            # should be used when the default user is overridden
            age = request.data.get('age')
            gender = request.data.get('gender')

            user = User.objects.create_user(username=username, password=password,
                                            first_name=firstName, last_name=lastName)
            user.save()
            return HttpResponse(status=status.HTTP_200_OK)
        except:
            return HttpResponse(status=status.HTTP_400_BAD_REQUEST)


class PostsList(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        posts = Posts.objects.all()
        serializer = PostsSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Users(APIView):
    permission_classes = (AllowAny,)

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
