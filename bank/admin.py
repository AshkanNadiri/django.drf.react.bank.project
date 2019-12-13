from django.contrib import admin
from .models import Branch, Customer, Account, Product

class BranchAdmin(admin.ModelAdmin):
    list_display = ('branch','address')
admin.site.register(Branch,BranchAdmin)


class CustomerAdmin(admin.ModelAdmin):
    list_display = ('bank','customer','gender','email','phone')
admin.site.register(Customer, CustomerAdmin)

class AccountAdmin(admin.ModelAdmin):
    list_display = ('customer','deposite')
admin.site.register(Account, AccountAdmin)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('account_options','account_type')
admin.site.register(Product, ProductAdmin)