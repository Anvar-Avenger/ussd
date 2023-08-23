from typing import Optional

from mysql.connector import connect, MySQLConnection
from mysql.connector.cursor import MySQLCursor

from config import DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME


class Ulagich:
    mb: Optional[MySQLCursor]
    ulanish: Optional[MySQLConnection]

    def __init__(self):
        self.mb = None
        self.ulanish = None

    def ulash(self) -> None:
        self.ulanish = connect(
            host=DB_HOST,
            user=DB_USERNAME,
            password=DB_PASSWORD,
            database=DB_NAME
        )
        self.mb = self.ulanish.cursor(dictionary=True)

    def uzish(self):
        self.ulanish.disconnect()
