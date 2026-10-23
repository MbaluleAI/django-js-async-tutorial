from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

@api_view(['GET'])
@permission_classes([AllowAny])
def get_data(request):
    """
    Processes an incoming HTTP GET request and returns a secure,
    serialized JSON payload to our client frontend application.
    """
    payload = {
        "message": "Hello from your Django REST API backend!",
        "status": "success",
        "data_origin": "Local SQLite Database Placeholder"
    }
    return Response(payload)
