from twitchAPI.oauth import refresh_access_token,UserAuthenticator,AuthScope
from twitchAPI.twitch import Twitch
from src.app.services.python.twitch_api import conf
import eel
from src.app.services.python.twitch_api.getChannelInfo import get_user_info


async def authentication():
    twitch = await Twitch(conf.CLIENT_ID, conf.CLIENT_SECRET)
    target_scope = [AuthScope.CHANNEL_MANAGE_BROADCAST,AuthScope.MODERATOR_READ_CHATTERS, AuthScope.CHAT_READ, AuthScope.BITS_READ, AuthScope.WHISPERS_EDIT,
                    AuthScope.WHISPERS_READ, AuthScope.CHAT_EDIT, AuthScope.CHANNEL_READ_EDITORS, AuthScope.USER_READ_FOLLOWS, AuthScope.USER_MANAGE_WHISPERS]
    auth = UserAuthenticator(twitch, target_scope, force_verify=True)
    token, refresh_token = await auth.authenticate()
    await twitch.set_user_authentication(token, target_scope, refresh_token)
    return token, refresh_token


async def refreshing(refresh_token:str):
    new_token, new_refresh_token = await refresh_access_token(refresh_token=refresh_token, app_id=conf.CLIENT_ID, app_secret=conf.CLIENT_SECRET)
    return new_token, new_refresh_token
