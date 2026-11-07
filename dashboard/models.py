from django.db import models

class PopRoom(models.Model):
    room_id = models.IntegerField(unique=True)
    name = models.CharField(max_length=100) # যেমন: "Dst-1,2 Quarter" বা "Dst-17 Vatara"
    floor = models.CharField(max_length=50)
    address = models.TextField()
    mainline = models.CharField(max_length=10, default="UP") # UP বা DOWN
    temp = models.CharField(max_length=10, default="22°C")
    door = models.CharField(max_length=20, default="Closed")
    
    # ব্যাটারি ও পাওয়ার সম্পর্কিত তথ্য
    battery_level = models.IntegerField(default=100) # পার্সেন্টেজ (0-100)
    total_watt = models.IntegerField(default=300)
    
    def __str__(self):
        return self.name
