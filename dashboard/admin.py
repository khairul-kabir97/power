from django.contrib import admin
from .models import PopRoom

@admin.register(PopRoom)
class PopRoomAdmin(admin.ModelAdmin):
    list_display = ('room_id', 'name', 'floor', 'mainline', 'battery_level', 'temp')
    search_fields = ('name', 'address')
