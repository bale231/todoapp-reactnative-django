from rest_framework import viewsets
from .models import ToDo
from .serializers import ToDoSerializer
from rest_framework.permissions import IsAuthenticated

class ToDoViewSet(viewsets.ModelViewSet):
    serializer_class = ToDoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtra le ToDo in base all'utente autenticato
        return ToDo.objects.filter(user=self.request.user)