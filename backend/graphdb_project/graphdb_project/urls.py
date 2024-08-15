from django.urls import path, include

urlpatterns = [
    path('api/', include('graphdb_project.urls')),  ]
