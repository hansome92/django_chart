
from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_chart.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'chart.views.index', name='index'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^chart/', include('chart.urls')),    
    url(r'^api/', include('api.urls')),    
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
