from django.urls import path
from .views import connect_database, create_database, connect_existing_database, list_repositories, upload_file

urlpatterns = [
    path('connect/', connect_database),
    path('create-database/', create_database),
    path('connect-existing/', connect_existing_database),
    path('repositories/', list_repositories),
    path('upload/', upload_file),
]
