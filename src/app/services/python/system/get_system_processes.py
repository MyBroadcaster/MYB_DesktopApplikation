import psutil
from src.app.services.python.system.scan_blacklist import blacklist
def processlist_Scan():
    processlist=list()
    for process in psutil.process_iter():
        if process.name() in blacklist:
            continue
        else:
            processlist.append(process.name())
    return processlist