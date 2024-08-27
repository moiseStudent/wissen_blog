from flask import Blueprint, render_template
from wissen.db import get_db


bp = Blueprint('editor', __name__)

@bp.route('/post/<int:post_id>')
def read_article(post_id):
    print(f"Visited - post {post_id}")

    # Usar un marcador de posición para evitar inyecciones SQL
    cursor = get_db().execute(
        'SELECT title, body, created FROM post WHERE id=?',  # Cambiado a un marcador de posición
        (post_id,)  # Pasar el parámetro como una tupla
    )

    article = cursor.fetchone()

    return render_template('reading.html', article=article)
