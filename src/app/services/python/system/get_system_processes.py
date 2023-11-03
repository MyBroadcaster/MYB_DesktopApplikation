import psutil

def processlist_Scan():
    processlist=list()
    for process in psutil.process_iter():
        processlist.append(process.name())
    return processlist