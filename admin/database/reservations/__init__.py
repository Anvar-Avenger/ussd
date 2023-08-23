import mysql.connector
from mysql.connector import ProgrammingError

from config import DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME

connection = mysql.connector.connect(
    host=DB_HOST,
    user=DB_USERNAME,
    password=DB_PASSWORD
)

cursor = connection.cursor(dictionary=True)

# Create database
try:
    query = F"CREATE DATABASE {DB_NAME};"
    cursor.execute(query)
    connection.commit()
except (ProgrammingError, ReferenceError) as err:
    print(err)

# Fill database from reservation file
r = open('reservations/reserve-1.sql')
cursor.execute(r.read(), multi=True)
connection.commit()
