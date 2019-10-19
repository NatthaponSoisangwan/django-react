"""
Aron's database scraper
references:
    > https://www.sqlitetutorial.net/sqlite-python/sqlite-python-select/
"""

# ------------------------------------------------------
# IMPORTS
import sqlite3
from sqlite3 import Error

dbs = []


# ------------------------------------------------------


# ------------------------------------------------------
# create_connection:
# creates a database connection to named database
# REVIEW DATABASE = "review_review"
def create_connection(database_name):
    """
    :param database_name: database of submitted reviews
    :return: Connection object or None
    """
    # creates connection object
    connection = None

    # connects connection object to database
    try:
        connection = sqlite3.connect(database_name)
        return connection
    except Error as e:
        print(e)
    return None


# ------------------------------------------------------


# ------------------------------------------------------
# select_all_data:
# queries all rows in review_review,
# if currently connected database
def select_all_review_rows(connection):
    """
    :param connection: the Connection object
    :return:
    """
    # creates cursor object and executes SQL select command
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM review_review")

    # fetches all rows of review_review
    rows = cursor.fetchall()
    for row in rows:
        print(row)


# ------------------------------------------------------


# ------------------------------------------------------
# select_review_by_priority:
# queries reviews by a given priority
def select_review_by_priority(connection, priorityType):
    """
    :param connection: connection object
    :param priorityType: column of review_review to sort query by
    :return:
    """
    # creates cursor object and executes SQL select command
    cursor = connection.cursor()
    cursor.execute("SELECT * FROM review_review WHERE priority=?", (priority,))

    # fetches all rows of review_review
    rows = cursor.fetchall()
    for row in rows:
        print(row)
# ------------------------------------------------------


# ------------------------------------------------------
# main:
# executable fxn
def main():
    # sets database file
    database = "review_review.sqlite3"

    # creates a database connection
    connection = create_connection(database)
    with connection:
        print("QUERY REVIEWS BY PRIORITY")
        select_review_by_priority(connection, "Creation Date")
# ------------------------------------------------------
