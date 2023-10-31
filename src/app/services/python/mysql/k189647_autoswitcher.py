import mysql.connector

def autobot_dbconnect():
    database = mysql.connector.connect(
    host="mysqle81d.netcup.net",
    port="3306",
    user="k189647_read_applist",
    password="Jx3eQquzCZweueYzHsZN",
    database="k189647_autoswitcher"
)
    return database


def autobot_dbcall(item):
    connect = autobot_dbconnect()
    cursor = connect.cursor()
    if item == "":
        cursor.execute(f"SELECT * FROM `app_database`")
        result = cursor.fetchall()
    else:
        cursor.execute(f'SELECT * FROM `app_database` WHERE ID LIKE "%{item}%" OR Prozess LIKE "%{item}%" OR Anwendung LIKE "%{item}%" OR Kategorie LIKE "%{item}%";')
        result = cursor.fetchall()
    return result