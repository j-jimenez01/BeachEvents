from rest_framework import response 
from rest_framework.decorators import api_view
from django.shortcuts import HttpResponse
from .processing import processTime
import requests

@api_view(['GET'])
def LoginAuth(request):    
    v = {"a": "aum"}
    return response.Response([v])