from django.contrib import admin
from .models import Branch, Customer
# Register your models here.

# class BranchAdmin(admin.ModelAdmin):
#     list_display = ('title','description','completed')

# admin.site.register(Branch, BranchAdmin)
admin.site.register((
    Branch,
    Customer
    ))
