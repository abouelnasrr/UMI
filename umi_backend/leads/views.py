from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LeadSerializer

@api_view(["POST"])
def create_lead(request):
    serializer = LeadSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({
            "success": True,
            "message": "Lead created successfully"
        })

    return Response(serializer.errors, status=400)