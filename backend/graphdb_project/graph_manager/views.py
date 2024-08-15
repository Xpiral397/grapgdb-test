from django.shortcuts import render, redirect
from .services import create_namespace, upload_data
from django.http import JsonResponse
import requests
from django.conf import settings
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile


def connect_database(request):
    try:
        response = requests.get(f'{settings.BLAZEGRAPH_URL}/sparql?query=SELECT%20%3Fgraph%20WHERE%20%7B%20GRAPH%20%3Fgraph%20%7D&format=json')
        if response.status_code == 200:
            return JsonResponse({'status': 'success', 'message': 'Connected successfully'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Failed to connect'}, status=400)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

def create_database(request):
    if request.method == 'POST':
        try:
            db_name = request.POST.get('db_name')
            response = requests.post(f'{settings.BLAZEGRAPH_URL}/admin/create', data={'db_name': db_name})
            if response.status_code == 200:
                return JsonResponse({'status': 'success', 'message': 'Database created successfully'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Failed to create database'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

def connect_existing_database(request):
    if request.method == 'POST':
        try:
            ip_address = request.POST.get('ip_address')
            port = request.POST.get('port')
            response = requests.get(f'http://{ip_address}:{port}/blazegraph/sparql?query=SELECT%20%3Fgraph%20WHERE%20%7B%20GRAPH%20%3Fgraph%20%7D&format=json')
            if response.status_code == 200:
                return JsonResponse({'status': 'success', 'message': 'Connected to existing database successfully'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Failed to connect to existing database'}, status=400)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

def list_repositories(request):
    try:
        response = requests.get(f'{settings.BLAZEGRAPH_URL}/sparql?query=SELECT%20DISTINCT%20%3Fnamespace%20WHERE%20%7B%20%3Fgraph%20%3Fpredicate%20%3Fobject%20%7D&format=json')
        if response.status_code == 200:
            data = response.json()
            repositories = [result['namespace']['value'] for result in data['results']['bindings']]
            return JsonResponse({'status': 'success', 'repositories': repositories})
        else:
            return JsonResponse({'status': 'error', 'message': 'Failed to retrieve repositories'}, status=400)
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)}, status=400)



def upload_file(request):
    if request.method == 'POST' and request.FILES.get('file'):
        file = request.FILES['file']
        file_path = default_storage.save(f'files/{file.name}', ContentFile(file.read()))
        # Upload logic to Blazegraph
        return JsonResponse({'status': 'success', 'file_path': file_path})
    return JsonResponse({'status': 'error', 'message': 'No file uploaded or invalid request'}, status=400)


def create_namespace_view(request):
    if request.method == 'POST':
        namespace_name = request.POST.get('namespace_name')
        create_namespace(namespace_name)
        return redirect('success')
    return render(request, 'graph_manager/create_namespace.html')

def upload_data_view(request):
    if request.method == 'POST':
        file = request.FILES.get('data_file')
        upload_data(file)
        return redirect('success')
    return render(request, 'graph_manager/upload_data.html')
