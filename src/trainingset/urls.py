from django.conf.urls import url
from .views import IndexView

urlpatterns = [
    url(r'^create/$', IndexView.as_view()),
]
