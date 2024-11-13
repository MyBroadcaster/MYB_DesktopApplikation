import asyncio
import eel
from src.app.services.python.twitch_api.authentication import authentication
from src.app.services.python.twitch_api.getChannelInfo import get_user_info

@eel.expose
def tw_Login():
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
        token, refresh_token = asyncio.run(authentication())
        userdata = get_user_info(token)
        twitchId = userdata[0]['id']
        twitchLogin = userdata[0]['login']
        twitchDisplayName = userdata[0]['display_name']
        twitchPicture = userdata[0]['profile_image_url']
        eel.change_acc_info(twitchPicture, twitchDisplayName)
        return token, refresh_token, twitchId, twitchLogin, twitchDisplayName, twitchPicture