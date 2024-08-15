import requests
from .config import BLAZEGRAPH_URL

def create_namespace(namespace_name):
    url = f"{BLAZEGRAPH_URL}/namespace/{namespace_name}"
    response = requests.post(url)
    return response.json()

def upload_data(file_path):
    url = f"{BLAZEGRAPH_URL}/data"
    with open(file_path, 'rb') as file:
        response = requests.post(url, files={'file': file})
    return response.json()

# Add other functions as needed
