from flask import Blueprint
from flask import render_template, redirect

### Rutas comunes del sitio web ###
routes = Blueprint('routes', __name__)

@routes.route('/')
def root():
    print("Visited")
    return redirect('homepage')

@routes.route('/homepage')
def index():
    return render_template('index.html')