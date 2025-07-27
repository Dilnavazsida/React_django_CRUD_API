from django.shortcuts import render,HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ApiSerializer


# Create your views here.

def home(request):
    return HttpResponse("this is home page")
@api_view(['POST'])
def save_user(request):
    serializer = ApiSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"data is stored"})
    else:
        return Response(serializer.errors) 