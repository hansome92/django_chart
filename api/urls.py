from django.conf.urls import patterns, url
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    ##url(r'^$', views.snippet_list),
    url(r'^loan$', views.loan),
]

urlpatterns = format_suffix_patterns(urlpatterns)