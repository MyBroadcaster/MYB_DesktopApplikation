import eel
import psutil
from src.app.services.python.mysql import k189647_autoswitcher
from src.app.services.python.system.get_system_processes import processlist_Scan
threadloop = True

@eel.expose
def processlistsc():
    processlist= processlist_Scan()
    return processlist

def processlist():
    print("Thread start!")
    while threadloop:
        eel.sleep(1)
        processlist=list()
        for process in psutil.process_iter():
            processlist.append(process.name())
        print(processlist)
    print("Thread stop!")

@eel.expose
def getautodb(item):
    print(item)
    callback = k189647_autoswitcher.autobot_dbcall(item)
    return callback


@eel.expose
def threadtest():
    global threadloop
    threadloop = True
    eel.spawn(processlist)

@eel.expose
def stop_threadtest():
    global threadloop
    threadloop = False