# USSD ilovasi
USSD xizlatlari

## Python
> python file necha marta chaqirilsa shuncha marta yaratiladi
> 
> ``-U, --upgrade`` - Upgrade all packages to the newest available version

## O&#8216;rnatish
Virtual muhit (venv)
``python -m venv ./venv``

### Server qismi
Umumiy o&#8216;rnatish
```bash
pip install -r requirements.txt
```
venv
```bash
./venv/bin/pip install -r requirements.txt
```

Yangi kutubxona qo&#8216;shilsa
```bash
pip freeze > requirements.txt
```

## Ishga tushurish

Ma&#8217;lumotlar bazasi ``reserve-1.sql``

```bash
./venv/bin/python3 tizim.py
```

### Mijoz qismi
1. Mahsulot shakliga o'tirish  
``react-scripts build && move build webapp`` - Windows uchun  
``BUILD_PATH='../webapp' react-scripts build`` - Boshqa tizimlar uchun (MacOs va Linux)


## References
- [Python](https://docs.python.org/3/) The Python is a programming language that lets you work quickly and integrate systems more effectively.
- [Flask](https://flask.palletsprojects.com/en/2.3.x/) The Flask depends on the Werkzeug WSGI toolkit, the Jinja template engine, and the Click CLI toolkit.
- [MySQL](https://www.mysql.com/) The MySQL is an open-source relational database management system (RDBMS)
- [Orator](https://orator-orm.com/) The Orator ORM provides a simple yet beautiful ActiveRecord implementation.
- [PyMysql](https://pymysql.readthedocs.io/en/latest/) This package contains a pure-Python MySQL client library, based on PEP 249.
- [Cors](https://flask-cors.readthedocs.io/en/latest/) A Flask extension for handling Cross Origin Resource Sharing (CORS), making cross-origin AJAX possible.
- [Toml](https://toml.io/en/) A config file format for humans.

### Links
- [PyFormat](https://pyformat.info/)
- [Clean Architecture](https://habr.com/ru/companies/exness/articles/494370/)
- [Clean Architecture REST](https://github.com/chonhan/flask_restapi_clean_architecture)
- [Clean Architecture Flask](https://github.com/microsoft/cookiecutter-python-flask-clean-architecture)

### Templates
https://tailwindcomponents.com/
https://www.material-tailwind.com/
https://www.tailwindawesome.com/?price=free
https://freefrontend.com/tailwind-forms/