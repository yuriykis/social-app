from django.db import models
from django.contrib.auth.models import User


class Posts(models.Model):
    """Post table"""
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    creation_time = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=256, null=False, default=None)
    content = models.TextField(null=False, default=None)


class Messages(models.Model):
    """Message table"""
    user_sender = models.ForeignKey(
        User, null=True, on_delete=models.CASCADE, related_name='user_sender')
    user_receiver = models.ForeignKey(
        User, null=True, on_delete=models.CASCADE, related_name='user_receiver')
    send_time = models.DateTimeField(auto_now_add=True)
    content = models.TextField(null=False, default=None)


class User_Interests(models.Model):
    """User interests table"""
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    content = models.TextField(null=False, default=None)


class User_Description(models.Model):
    """User desription table"""
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    content = models.TextField(null=False, default=None)
