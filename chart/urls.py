from django.conf.urls import patterns, url

from chart import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
)
