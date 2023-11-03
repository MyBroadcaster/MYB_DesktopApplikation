import eel
import threading
from src.app.services.python.mysql import k189647_autoswitcher
from src.app.services.python.system import get_system_processes
from src.app.components.functions.twitch.autobot import blacklist
from src.app.services.python.twitch_api.getChannelInfo import getCategoryByName
from src.app.services.python.twitch_api.updateChannelInfo import category_switch

exit_event = threading.Event()
defaultcategory = ""

def getdata(data):
    getalldata = k189647_autoswitcher.getDataByEXE(data)
    return getalldata

def getprocesses():
    processlist = get_system_processes.processlist_Scan()
    return processlist


@eel.expose
def startbot(twitchID:str, oauthtoken: str, defaultCategory: str):
    global t, defaultcategory
    defaultcategory = defaultCategory
    t = threading.Thread(target=autobot, args = (twitchID, oauthtoken))
    t.daemon = True
    t.start()

@eel.expose
def stopbot():
    exit_event.set()

@eel.expose
def getpydata():
    activecategory = activecategory
    gameid = gameid
    gamepic = gamepic
    return gamepic, activecategory, gamepic

def autobot(twitchID:str, oauthtoken: str):
    global activecategory, gamepic, gameid, defaultcategory
    activecategory = ""
    while True:
        found = False
        processes = getprocesses()
        for p in processes:
            if p in blacklist.blacklist:
                continue
            else:
                data = getdata(p)
                if data != []:
                    found = True
                    if activecategory == data[0][3]:
                        continue
                    else:
                        activecategory = data[0][3]
                        gameid, gamepic = getCategoryByName(oauth_token=oauthtoken,categoryName=data[0][3])
                        eel.updateInformations(gamepic)
                        category_switch(twitchId=twitchID, oauth_token=oauthtoken, game_id=gameid)
                        
        
        if found == False:
            if activecategory != defaultcategory:
                activecategory = defaultcategory
                gameid, gamepic = getCategoryByName(oauth_token=oauthtoken,categoryName=defaultcategory)
                eel.updateInformations(gamepic)
                category_switch(twitchId=twitchID, oauth_token=oauthtoken, game_id=gameid)
        
        if exit_event.is_set():
            print("close")
            exit_event.clear()
            break