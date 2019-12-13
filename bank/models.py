from django.db import models
from phone_field import PhoneField

# Branch
class Branch(models.Model):
    branch_name = models.CharField(max_length = 100)
    branch_address = models.CharField(max_length = 200)

    class Meta:
        verbose_name_plural = "branches"

    def __str__(self):
        return f"{self.branch_name} - {self.branch_address}"

class Customer(models.Model):
    gender_options = (
        ('male','MALE'),
        ('female','FEMALE'),
        ('other','OTHER')
    )
    branch = models.ForeignKey(Branch, on_delete = models.CASCADE, null = True)
    customer_name = models.CharField(max_length = 200)
    gender_options = models.CharField(
        max_length = 20,
        choices = gender_options,
        default = gender_options[0]
    )
    email = models.EmailField(max_length = 200, unique=True,verbose_name='email address')
    customer_number = PhoneField(blank = True,help_text = "Contact phone number",)

    def __str__(self):
        return f"{self.customer_name}"

class Account(models.Model):
    
    customer = models.OneToOneField(Customer, on_delete = models.CASCADE)
    deposite = models.DecimalField(max_digits = 20, decimal_places = 1)
   
    def __str__(self):
        return f"Customer: {self.customer} - Deposited: $ {self.deposite}"
        
class Product(models.Model):
    account_options = (
        ('savings','SAVINGS'),
        ('checkings','CHECKINGS'),
        ('business','BUSINESS')
    )
    account_type = (
        ('business','BUSINESS'),
        ('personal','PERSONAL'),
        ('charity','CHARITY')
    )
    account_options = models.CharField(
        max_length = 20,
        choices = account_options,
        default = account_options[0]
    )
    account_type = models.CharField(
        max_length = 20,
        choices = account_type,
        default = account_type[0]
        )
    def __str__(self):
        return f"Account option: {self.account_options} - Account type: {self.account_type} "