from flask import Flask, render_template
from config import config

from routes.routes import routes
from routes.auth import auth
from routes.dashboard import dashboard
from routes.articles import articles

app = Flask(__name__)

app.register_blueprint(dashboard)
app.register_blueprint(routes)
app.register_blueprint(auth)
app.register_blueprint(articles)

@app.errorhandler(404)
def not_fount(error):
    return render_template('404.html', error=error)

if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.run()