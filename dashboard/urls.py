from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'), # ড্যাশবোর্ড UI দেখানোর জন্য
    path('api/room/<int:room_id>/', views.get_room_data, name='get_room_data'), # এপিআই ডেটা পাওয়ার জন্য
]