from flask import Flask, render_template

app = Flask(__name__)

### Manejo de errores - Error Handler ###
@app.errorhandler(404)
def not_fount(error):
    return render_template('404.html', error=error)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)