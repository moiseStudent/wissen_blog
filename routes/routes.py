from flask import Blueprint, render_template, redirect

### Endpoints ###
routes = Blueprint('routes', __name__)

@app.route('/')
def root():
    return render_template('index.html', articles=articles)

@app.route('/homepage')
def home_page():
    return 'Ok'
    
### Blog ###
@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/login')
def login():
    return render_template('sign.html')

@app.route('/sign')
def sign():
    return render_template('sign.html')