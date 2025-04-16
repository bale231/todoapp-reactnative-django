from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ToDoViewSet

router = DefaultRouter()
router.register(r'todos', ToDoViewSet, basename='todo')  # Specifica il basename

urlpatterns = [
    path('api/', include(router.urls)),
]
