import asyncio
import eel
from src.app.services.python.twitch_api.authentication import refreshing

@eel.expose()
def refreshchannel(refToken: str):
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    token, refreshToken = asyncio.run(refreshing(refresh_token=refToken))
    return token, refreshToken