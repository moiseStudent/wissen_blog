from flask import Blueprint
from flask import render_template

articles = Blueprint('editor', __name__)

@articles.route('/articles')
def main_article():
    print("Visited")
    return "ok"
