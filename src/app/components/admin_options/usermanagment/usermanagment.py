import eel
from src.app.services.python.twitch_api.getChannelInfo import getchannelinfobyname

@eel.expose()
def getinfobyname(token: str, twitchname: str):
    infos = getchannelinfobyname(oauth_token=token, username=twitchname)
    return infos