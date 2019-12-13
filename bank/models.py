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
    branch = models.ForeignKey(Branch, on_delete = models.CASCADE, null = True)
    customer_name = models.CharField(max_length = 200)
    email = models.EmailField(max_length = 200, unique=True,verbose_name='email address')
    customer_number = PhoneField(blank = True,help_text = "Contact phone number",)

    def __str__(self):
        return f"Location: {self.branch} | Name: {self.customer_name}"