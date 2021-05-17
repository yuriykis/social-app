from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User


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
