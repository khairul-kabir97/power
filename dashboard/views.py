from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'dashboard/index.html')



from django.http import JsonResponse
from .models import PopRoom

def get_room_data(request, room_id):
    try:
        room = PopRoom.objects.get(room_id=room_id)
        data = {
            "room_id": room.room_id,
            "name": room.name,
            "floor": room.floor,
            "address": room.address,
            "mainline": room.mainline,
            "temp": room.temp,
            "door": room.door,
            "battery_level": room.battery_level,
            "total_watt": room.total_watt,
        }
        return JsonResponse(data)
    except PopRoom.DoesNotExist:
        return JsonResponse({"error": "Room not found"}, status=404)