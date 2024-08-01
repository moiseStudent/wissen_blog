import functools

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for

)

from werkzeug.security import check_password_hash, generate_password_hash
from wissen.db import get_db

### bp - Blue print 
"""
auth es el nombre del blueprint
url_prefix - carpeta 
"""
bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/register', methods=('GET', 'POST'))
def register():

    if request.method == 'POST':

        username = request.form['username']
        password = request.form['password']
        db = get_db()

        error = None

        if not username:
            error = "Se requiere el nombre de usuario."
        
        elif not password:
            error = 'la clave es requerida.'
        
        if error is None:
            try:
                db.execute(
                    "INSERT INTO user (username, password) VALUES (?, ?)",
                    (username, generate_password_hash(password)),
                )

                db.commit()
            
            except db.IntegrityError:
                error = f"El usuario: {username} ya esta registrado."
            
            else:
                return redirect(url_for("auth.login"))
        
        flash(error)
    
    return render_template('auth/register.html')


@bp.route('/login')
def login():
    return render_template('auth/login.html')
