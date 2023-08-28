import database
from app import create_app


def main():
    app = create_app()
    database.connect()
    app.run(debug=True, host="0.0.0.0")


if __name__ == "__main__":
    main()
