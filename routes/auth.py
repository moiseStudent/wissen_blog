from flask import Blueprint
from flask import render_template, redirect

### Rutas para el la administracion de logs ###
auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return render_template('auth/login.html')

@auth.route('/signup')
def sign_up():
    return render_template('auth/sign.html')

