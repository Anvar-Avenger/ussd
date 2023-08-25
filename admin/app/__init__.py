import html

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from werkzeug.exceptions import UnsupportedMediaType

from app.net.response import success, fail
from app.repositories import TrafficRepository, CredentialRepository, UserRepository
from config import APP_STATIC_FILES, APP_TEMPLATE

ilova = Flask(__name__, "/", static_folder=APP_STATIC_FILES, template_folder=APP_TEMPLATE)
CORS(ilova)

user_repo = UserRepository()
credential_repo = CredentialRepository()


# noinspection PyUnusedLocal
@ilova.route('/')
@ilova.route('/<url>')  # <int:url> <string:url> // defaults={'url': None}, It blocks all files in template directory
def index(url=None):
    # cap = captcha.create()
    return render_template("index.html")


@ilova.route('/tizimga-kirish', methods=['POST'])
def sign_in():
    try:
        natija = credential_repo.kirish(request.json['login'], request.json['password'])
        if natija:
            return success(jsonify({
                'token': 0000
            }))
        else:
            return fail([], html.unescape(
                "Bunday foydalanuvchi mavjud emas yoki noto&#8216;g&#8216;ri parol kiritilgan"
            ))
    except KeyError:
        return fail([], 'Ma\u2019lumotlar to\u2018liq daqdim etilmagan!')


@ilova.get('/users')
def user_all():
    return success(user_repo.all())


@ilova.post("/users")
def user_create():
    try:
        res = user_repo.create(request.json)
        return success(res)
    except TypeError as e:
        return fail(e.args)


@ilova.get('/users/<int:nd>')
def user_get(nd):
    user = user_repo.get(nd)
    if user:
        return success(user)
    else:
        return fail([])


@ilova.put('/users/<int:nd>')
def user_update(nd):
    try:
        return success(user_repo.update(nd, request.json))
    except UnsupportedMediaType:
        return fail([])


@ilova.delete('/users/<int:nd>')
def user_delete(nd):
    user_repo.delete(nd)
    return success(None)


@ilova.errorhandler(404)
def not_found(error):
    return 404, error


def create_app():
    return ilova
