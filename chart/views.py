from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader

# Create your views here.

def index(request):
    #template = loader.get_template('chart/index.html');


    return render(request, 'chart/index.html')