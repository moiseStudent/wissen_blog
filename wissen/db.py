"""
Definicion y acceso a la base de datos sqlite
g es un objecto al que multiples funciones pueden acceder durante una peticion
"""
import sqlite3
import click
from flask import current_app, g

### Registro de las funciones
def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

### Esta funcion de python ejecuta la sentencia sql de schema.sql
def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))

@click.command('init-db')
def init_db_command():
    """
        Limpiar los datos existente y crear una nueva tabla
        Clear the existing data and create new tables.
    """
    init_db()

    click.echo('Initialized the database')
    click.echo('Base de datos inicializada')

### Obtener datos de la base de datos
def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types = sqlite3.PARSE_DECLTYPES
        )

        g.db.row_factory = sqlite3.Row
    return g.db

### Cerrar el acceso a la base de datos
def close_db(e=None):
    db = g.pop('db', None)


