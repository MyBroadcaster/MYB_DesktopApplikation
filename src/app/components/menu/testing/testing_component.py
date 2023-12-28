import eel
import psutil
from src.app.components.functions.twitch.autobot import blacklist
from src.app.services.python.mysql import k189647_autoswitcher
from src.app.services.python.twitch_api import getChannelInfo
threadloop = True


@eel.expose
def twitchaprove(categoryname:str, oauthtoken: str):
    back = getChannelInfo.getCategoryByName(oauth_token=oauthtoken,categoryName=categoryname)
    return back

@eel.expose
def addnewentry(prozess: str, anwendung: str, kategorie: str, window: str):
    k189647_autoswitcher.addentry(prozess, anwendung, kategorie, window)

@eel.expose
def processlist_Scan():
    processlist=list()
    for process in psutil.process_iter():
        if process.name() not in blacklist.blacklist:
            processlist.append(process.name())
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

@eel.expose
def globalbadgesAPI(oauthtoken: str):
 globalbadges = getChannelInfo.getGlobalBadges(oauthtoken)
 return globalbadges

@eel.expose
def channelbadgesAPI(oauthtoken: str, twitchid: str):
    channelbadges = getChannelInfo.getchannelbadges(oauth_token=oauthtoken, twitchID=twitchid)
    return channelbadges


@eel.expose
def globalEmoteAPI(oauthtoken: str):
    globalemotes = getChannelInfo.getGlobalEmotes(oauth_token=oauthtoken)
    print(globalemotes)
    return globalemotes