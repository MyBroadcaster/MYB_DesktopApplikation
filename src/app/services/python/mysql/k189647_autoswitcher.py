import mysql.connector

def autobot_dbconnect():
    database = mysql.connector.connect(
    host="mysqle81d.netcup.net",
    port="3306",
    user="k189647_updater",
    password="jCXJwtz3GHpTehxMNMqQ",
    database="k189647_autoswitcher"
)
    return database


def autobot_dbcall(item):
    connect = autobot_dbconnect()
    cursor = connect.cursor(dictionary=True)
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

def addnewData(item):
    connect = autobot_dbconnect()
    cursor = connect.cursor()
    query = """
    INSERT INTO `app_database` (`Anwendung`, `Prozess`, `Kategorie`, `Window`) 
    VALUES (%s, %s, %s, %s);
    """
    values = (item["title"], item["executable"], item["category"], item["window"])
    cursor.execute(query, values)
    connect.commit()
    cursor.close()
    connect.close()
    return "Done"

def deleteData(ids):
    connect = autobot_dbconnect()
    cursor = connect.cursor()
    print(ids)
    if not ids:
        return

    # Create placeholders based on the number of IDs
    if len(ids) > 1:
        placeholders = ', '.join(['%s'] * len(ids))
        query = f"DELETE FROM `app_database` WHERE ID IN ({placeholders})"
        cursor.execute(query, tuple(ids))
    else:
        query = f"DELETE FROM `app_database` WHERE ID = {ids[0]};"
        cursor.execute(query)
    connect.commit()
    cursor.close()
    connect.close()
    return "Done"