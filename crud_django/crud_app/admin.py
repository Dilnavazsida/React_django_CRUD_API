from django.contrib import admin
from . models import front_data
from .models import react_data
# Register your models here.

class admin_api_front_data(admin.ModelAdmin):
    display_field = ('name','city','age' ,'mobile')

admin.site.register(front_data,admin_api_front_data)


class react_user(admin.ModelAdmin):
    display_fields = ('name','city','mobile','age')

admin.site.register(react_data,react_user)