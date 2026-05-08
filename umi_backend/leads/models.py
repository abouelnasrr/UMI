from django.db import models


class Lead(models.Model):
    STATUS_CHOICES = [
        ("new", "New"),
        ("contacted", "Contacted"),
        ("closed", "Closed"),
    ]

    company = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.EmailField()

    country_code = models.CharField(max_length=10)
    phone = models.CharField(max_length=20)

    branches = models.IntegerField(default=0)

    business_description = models.TextField()
    note = models.TextField(blank=True)

    # DASHBOARD FIELDS
    admin_comment = models.TextField(blank=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="new"
    )

    color = models.CharField(
        max_length=20,
        default="gray"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.company} - {self.name}"