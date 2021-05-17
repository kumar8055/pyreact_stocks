from django.urls import path
from .views import Stockinfo

urlpatterns = [
    path('<str:tk>', Stockinfo.as_view())
]