### Fabrica de aplicaciones - Applications Factory ###
import os

from flask import Flask, render_template, redirect
from . import db
from .routes import auth
#from .routes import routes

### Funcion para crear apps de flask - Create apps flask function
def create_app(test_config=None):

    ### Crear y configurar la app - Create and setings the app
    app = Flask(__name__)
    app.config.from_mapping(
        SECRET_KEY = 'mZB!1w8NAt1T^%kvhUI*S^!',
        DATABASE=os.path.join(app.instance_path, 'wissen.sqlite')
    )

    ### Units test - Pruebas unitarias
    if test_config is None:
        """
        Cargar la configuracion de la instancia, si no existe, cuando no este en testeo
        load the instance config, if it exists, when not testing
        """
        app.config.from_pyfile('config.py', silent=True)
    
    else:
        """
        load the test config if passed in
        Cargar la configuracion de prueba si se pasa
        """
        app.config.from_mapping(test_config)
    
    ### Comprobar existencia de la carpeta de instancia
    try:
        os.makedirs(app.instance_path)
    
    except OSError:
        pass
    
    ### Registrar las funciones de la base de datos
    db.init_app(app)

    ### Routes and blueprints - Rutas y blueprints
    app.register_blueprint(auth.bp)
   # app.register_blueprint(routes)

    @app.route('/')
    def root():
        print("Visited")
        return redirect('homepage')

    @app.route('/homepage')
    def index():
        return render_template('index.html')

    ### Manejo de errores ###
    @app.errorhandler(404)
    def not_fount(error):
        return render_template('404.html', error=error)

    return app
