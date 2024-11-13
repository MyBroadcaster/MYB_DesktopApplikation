import eel
import psutil
from src.app.services.python.mysql import k189647_autoswitcher
from src.app.services.python.system.get_system_processes import processlist_Scan
threadloop = True

@eel.expose
def processlist_Scanning():
    processlist = processlist_Scan()
    return processlist

@eel.expose
def getgames(item):
    callback = k189647_autoswitcher.autobot_dbcall(item)
    return callback

@eel.expose
def addnewgame(itemlist):
    callback = k189647_autoswitcher.addnewData(itemlist)
    return callback

@eel.expose
def deletegames(ids):
    print(ids)
    callback = k189647_autoswitcher.deleteData(ids)
    return callback