from django.db import models
from phone_field import PhoneField
from django.contrib.auth.models import User

# Branch
class Branch(models.Model):
    branch = models.CharField(max_length = 100)
    address = models.CharField(max_length = 200)

    class Meta:
        verbose_name_plural = "branches"

    def __str__(self): 
        return f"{self.branch}"

class Account(models.Model):
    
    # customer = models.CharField(max_length=100, null=True)
    deposite = models.DecimalField(max_digits = 20, decimal_places = 1)
   
    def __str__(self):
        return f"{self.deposite}"

class Customer(models.Model):
    # gender_options = (
    #     ('male','MALE'),
    #     ('female','FEMALE'),
    #     ('other','OTHER')
    # )
    bank = models.ForeignKey(Branch,related_name='bank', on_delete = models.CASCADE)
    # gender = models.CharField(
    #     max_length = 20,
    #     choices = gender_options,
    #     default = gender_options[0]
    # )
    # email = models.EmailField(max_length = 200, unique=True,verbose_name='email address',null=True)
    # phone = PhoneField(blank = True,help_text = "Contact phone number",max_length=10)
    customer = models.ForeignKey(
        User,
        related_name = "customers",
        on_delete = models.CASCADE,
        null = True
    )
    account = models.ForeignKey(
        Account,
        on_delete = models.CASCADE,
        null = True
    )
    
    def __str__(self):
        return f"{self.customer}"


        
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