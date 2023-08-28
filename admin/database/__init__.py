from typing import Optional

from mysql import connector
from mysql.connector import MySQLConnection
from mysql.connector.cursor import MySQLCursor
from orator import DatabaseManager, Model

from config import DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, dbconfig


class Ulagich:
    mb: Optional[MySQLCursor]
    ulanish: Optional[MySQLConnection]

    def __init__(self):
        self.mb = None
        self.ulanish = None

    def ulash(self) -> None:
        self.ulanish = connector.connect(
            host=DB_HOST,
            user=DB_USERNAME,
            password=DB_PASSWORD,
            database=DB_NAME
        )
        self.mb = self.ulanish.cursor(dictionary=True)

    def uzish(self):
        self.ulanish.disconnect()


def connect():
    db = DatabaseManager(dbconfig())
    Model.set_connection_resolver(db)
    return db
