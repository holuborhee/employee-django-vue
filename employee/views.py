from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def auth(request):
    return render(request, 'auth.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def employees(request):
    return render(request, 'employees.html')