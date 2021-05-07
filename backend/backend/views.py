from rest_framework.views import APIView
from django.http import HttpResponse
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated


class Test(APIView):
    permission_classes = (AllowAny,)

    def get(sekf, request):
        return HttpResponse(status=status.HTTP_200_OK)
