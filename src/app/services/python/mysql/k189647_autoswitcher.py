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

def autobot_dbconnect_admin():
    database = mysql.connector.connect(
    host="mysqle81d.netcup.net",
    port="3306",
    user="k189647_adminmaster233",
    password="318l3v#yC",
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

def getDataByEXE(item):
    connect = autobot_dbconnect()
    cursor = connect.cursor()
    cursor.execute(f"SELECT * FROM `app_database` where Prozess= '{item}' ")
    result = cursor.fetchall()
    return result


def getDataByEXE(item):
    connect = autobot_dbconnect()
    cursor = connect.cursor()
    cursor.execute(f"SELECT * FROM `app_database` where Prozess= '{item}' ")
    result = cursor.fetchall()
    return result


def addentry(prozess: str, anwendung: str, kategorie: str, window: str):
    verbindung = autobot_dbconnect_admin()
    zeiger = verbindung.cursor()
    sql_anweisung = f"INSERT INTO `app_database`(`Prozess`, `Anwendung`, `Kategorie`, `Window`) VALUES ('{prozess}','{anwendung}','{kategorie}','{window}')"
    zeiger.execute(sql_anweisung)
    verbindung.commit()
    verbindung.close()