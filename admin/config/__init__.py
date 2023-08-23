from dotenv import dotenv_values

env = dotenv_values()

APP_TEMPLATE = "public"
APP_STATIC_FILES = "public"

DB_CONNECTION = "mysql"
DB_HOST = env['DB_HOST']
DB_PORT = env['DB_PORT']
DB_USERNAME = env['DB_USERNAME']
DB_PASSWORD = env['DB_PASSWORD']
DB_NAME = env['DB_NAME']

# Flask app file moved to app directory
APP_TEMPLATE = "../public"
APP_STATIC_FILES = "../public"
