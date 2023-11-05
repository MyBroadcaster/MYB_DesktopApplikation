from requests.structures import CaseInsensitiveDict
import json
import requests
from src.app.services.python.twitch_api import conf, authentication

def category_switch(twitchId: str,oauth_token: str, game_id: str):
    game_id = {"game_id": str(game_id)}
    y = json.dumps(game_id)
    url = "https://api.twitch.tv/helix/channels?broadcaster_id=" + twitchId
    headers = CaseInsensitiveDict()
    headers["Authorization"] = "Bearer " + oauth_token
    headers["Client-Id"] = conf.CLIENT_ID
    headers["Content-Type"] = "application/json"
    data = y
    resp = requests.patch(url, headers=headers, data=data)


def title_switch(twitchId: str,oauth_token: str, new_title: str):
    game = new_title
    title = {"title": str(game)}
    y = json.dumps(title)
    url = "https://api.twitch.tv/helix/channels?broadcaster_id=" + twitchId
    headers = CaseInsensitiveDict()
    headers["Authorization"] = "Bearer " + oauth_token
    headers["Client-Id"] = conf.CLIENT_ID
    headers["Content-Type"] = "application/json"
    data = y
    resp = requests.patch(url, headers=headers, data=data)