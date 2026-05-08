from django.contrib import admin
from .models import Lead


@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = (
        "company",
        "name",
        "email",
        "phone",
        "status",
        "created_at",
    )

    search_fields = (
        "company",
        "name",
        "email",
        "phone",
    )

    list_filter = (
        "status",
        "created_at",
    )