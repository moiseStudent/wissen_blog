from flask import Blueprint, render_template
from wissen.db import get_db
from markupsafe import escape

bp = Blueprint('editor', __name__)

### Read post
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

### science
@bp.route('/section/<string:area>') ### REcibir las section por url
def article_section(area):
    section = escape(area)
    ### Seleccionar los articulos con un section igual a "science"
    cursor = get_db().execute(
        """
        SELECT p.id, title, body, section, created, author_id, username
        FROM post p JOIN user u ON p.author_id = u.id
        WHERE section = ?
        ORDER BY created DESC;
        """,
        (section, )

    )

    posts = cursor.fetchall()
    return render_template('sections.html', posts=posts)

