### Configuraciones de la aplicacion y de las conexiones ###
class Config():
    SECRET_KEY = 'mZB!1w8NAt1T^%kvhUI*S^!'

class DevelopmentConfig(Config):

    DEBUG = True
    PORT = 5000

config = {
    'development':DevelopmentConfig
}