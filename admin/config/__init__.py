from dotenv import dotenv_values

env = dotenv_values()

APP_TEMPLATES = "public"
APP_STATIC_FILES = "public"

DB_CONNECTION = env['DB_CONNECTION']
DB_HOST = env['DB_HOST']
DB_PORT = env['DB_PORT']
DB_USERNAME = env['DB_USERNAME']
DB_PASSWORD = env['DB_PASSWORD']
DB_NAME = env['DB_NAME']

# Flask app file moved to app directory
APP_TEMPLATES = "../public"
APP_STATIC_FILES = "../public"


def dbconfig():
    return {
        'mysql': {
            'driver': DB_CONNECTION,
            'host': DB_HOST,
            'database': DB_NAME,
            'user': DB_USERNAME,
            'password': DB_PASSWORD,
            'charset': 'utf8mb4',
            'prefix': ''
        }
    }
