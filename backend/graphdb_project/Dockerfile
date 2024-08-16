
FROM python:3.11

# Set the working directory in the container
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app/

# Expose port 8000
EXPOSE 8000

# Run the Django server
CMD ["gunicorn", "graphdb_project.wsgi:application", "--bind", "0.0.0.0:8000"]
