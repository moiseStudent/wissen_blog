from flask import Blueprint
from flask import render_template, redirect

### Rutas comunes del sitio web ###
dashboard = Blueprint('dashboard', __name__)

@dashboard.route('/dashboard')
def dashboard_editor():
    print("Visited")
    return "ok"