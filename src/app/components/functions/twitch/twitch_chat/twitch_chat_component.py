from src.app.services.python.twitch_api.getChannelInfo import getchannelbadges, getGlobalEmotes
import eel

messages = []

@eel.expose
def getchannelbadge(twitchID:str, oauthtoken: str):
    return getchannelbadges(oauth_token=oauthtoken, twitchID=twitchID)

@eel.expose
def savemessages(list):
    global messages
    messages = list

@eel.expose
def getmessages():
    global messages
    return messages

@eel.expose
def getglobalEmote(oauthtoken: str):
    globalemotes = getGlobalEmotes(oauth_token=oauthtoken)
    return globalemotes