from django.core.checks import messages
from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User as MainUser
from .models import Messages, Posts, User
from .serializers import MessageSerializer, PostsSerializer, UserSerializer
from django.db.models import Q
import datetime


class Register(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        try:
            username = request.data.get('username')
            if (MainUser.objects.filter(username=username).count() == 0):
                password = request.data.get('password')
                firstName = request.data.get('firstName')
                lastName = request.data.get('lastName')

                age = request.data.get('age')
                gender = request.data.get('gender')
                info = request.data.get('info')

                main_user = MainUser.objects.create_user(username=username, password=password,
                                                         first_name=firstName, last_name=lastName)
                new_user = User(user=main_user, age=age,
                                gender=gender, info=info)
                new_user.save()

                return HttpResponse(status=status.HTTP_200_OK)
            else:
                return Response({"Fail": "User already exists"}, status=status.HTTP_409_CONFLICT)
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
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            main_users = MainUser.objects.all()
            users_list = []
            for main_user in main_users:
                user = User.objects.get(user=main_user)
                user_response = {
                    'username': main_user.username,
                    'firstName': main_user.first_name,
                    'lastName': main_user.last_name,
                    'age': user.age,
                    'gender': user.gender,
                    'info': user.info,
                }
                users_list.append(user_response)
            return Response(users_list)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            main_user = MainUser.objects.get(username=request.user)
            user = User.objects.get(user=main_user)
            user_response = {
                'username': main_user.username,
                'firstName': main_user.first_name,
                'lastName': main_user.last_name,
                'age': user.age,
                'gender': user.gender,
                'info': user.info,
            }
            return Response(user_response)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MessageCreateView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):

        # example json request:
        # {
        #     "receiver": "user1",
        #     "send_time": "18/09/19 01:55:19",
        #     "content": "Blablabla"
        # }

        try:
            main_user_sender = MainUser.objects.get(username=request.user)
            user_sender = User.objects.get(user=main_user_sender)

            main_user_receiver = MainUser.objects.get(
                username=request.data.get("receiver"))
            user_receiver = User.objects.get(user=main_user_receiver)

            send_time = datetime.datetime.strptime(
                request.data.get("send_time"), '%d/%m/%y %H:%M:%S')

            content = request.data.get("content")

            message = Messages(
                user_sender=user_sender, user_receiver=user_receiver, send_time=send_time, content=content)
            message.save()
            return Response(status=status.HTTP_201_CREATED)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MessageSentView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            main_user_sender = MainUser.objects.get(username=request.user)
            user_sender = User.objects.get(user=main_user_sender)

            main_user_receiver = MainUser.objects.get(
                username=request.data.get('receiver'))
            user_receiver = User.objects.get(user=main_user_receiver)

            messages = Messages.objects.filter(
                Q(user_sender=user_sender) & Q(user_receiver=user_receiver))
            serializer = MessageSerializer(messages, many=True)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class MessageReceivedView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            main_user_receiver = MainUser.objects.get(username=request.user)
            user_receiver = User.objects.get(user=main_user_receiver)

            main_user_sender = MainUser.objects.get(
                username=request.data.get('sender'))
            user_sender = User.objects.get(user=main_user_sender)

            messages = Messages.objects.filter(
                Q(user_sender=user_sender) & Q(user_receiver=user_receiver))
            serializer = MessageSerializer(messages, many=True)
            return Response(serializer.data)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
