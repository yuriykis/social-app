# Generated by Django 3.2.2 on 2021-06-14 15:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='auth.user')),
                ('age', models.IntegerField(default=0)),
                ('gender', models.CharField(default=None, max_length=256)),
                ('info', models.TextField(default=None)),
            ],
        ),
        migrations.AlterField(
            model_name='messages',
            name='user_receiver',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_receiver', to='backend.user'),
        ),
        migrations.AlterField(
            model_name='messages',
            name='user_sender',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_sender', to='backend.user'),
        ),
        migrations.AlterField(
            model_name='posts',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.user'),
        ),
        migrations.AlterField(
            model_name='user_description',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.user'),
        ),
        migrations.AlterField(
            model_name='user_interests',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.user'),
        ),
    ]
