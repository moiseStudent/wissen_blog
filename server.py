from flask import Flask, render_template

app = Flask(__name__)

### Manejo de errores - Error Handler ###
@app.errorhandler(404)
def not_fount(error):
    return render_template('404.html', error=error)

### Main path ##
@app.route('/')
def index():
    return render_template('index.html')

### Blog ##
@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/login')
def login():
    return render_template('sign.html')

@app.route('/sign')
def sign():
    return render_template('sign.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)