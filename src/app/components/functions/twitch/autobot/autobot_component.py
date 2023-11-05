import eel
import threading
from src.app.services.python.mysql import k189647_autoswitcher
from src.app.services.python.system import get_system_processes
from src.app.components.functions.twitch.autobot import blacklist
from src.app.services.python.twitch_api.getChannelInfo import getCategoryByName
from src.app.services.python.twitch_api.updateChannelInfo import category_switch
from src.app.services.python.twitch_api.getChannelInfo import getChannelInformations

exit_event = threading.Event()
defaultcategory = ""
deactivatebtn = False
activecategory = ""

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
def currentCategory(oauthToken: str, twitchID: str):
    global gameid, gamepic
    data = getChannelInformations(oauth_token=oauthToken, twitchID=twitchID)
    game = getCategoryByName(oauth_token=oauthToken,categoryName= data[0]["game_name"])
    gamepic = game[0]['box_art_url']
    gameid = game[0]['id']
    gamepic = gamepic.replace("-{width}x{height}", "")
    return data[0]["game_name"],gameid, gamepic

@eel.expose
def getpydata():
    return gamepic, activecategory, gameid, deactivatebtn

def autobot(twitchID:str, oauthtoken: str):
    global activecategory, gamepic, gameid, defaultcategory, deactivatebtn
    activecategory = ""
    deactivatebtn = True
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
                        game = getCategoryByName(oauth_token=oauthtoken,categoryName=data[0][3])
                        if game != []:
                            gamepic = game[0]['box_art_url']
                            gameid = game[0]['id']
                            gamepic = gamepic.replace("-{width}x{height}", "")
                        eel.updateInformations(gamepic)
                        category_switch(twitchId=twitchID, oauth_token=oauthtoken, game_id=gameid)
                        
        
        if found == False:
            if activecategory != defaultcategory:
                activecategory = defaultcategory
                game = getCategoryByName(oauth_token=oauthtoken,categoryName=defaultcategory)
                gamepic = game[0]['box_art_url']
                gameid = game[0]['id']
                gamepic = gamepic.replace("-{width}x{height}", "")
                eel.updateInformations(gamepic)
                category_switch(twitchId=twitchID, oauth_token=oauthtoken, game_id=gameid)
        
        if exit_event.is_set():
            print("close")
            deactivatebtn = False
            exit_event.clear()
            break