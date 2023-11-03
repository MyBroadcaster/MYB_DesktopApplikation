import requests
from src.app.services.python.twitch_api import conf
from requests.structures import CaseInsensitiveDict

def get_user_info(access_token):
    # Twitch API endpoint to get user information
    api_url = 'https://api.twitch.tv/helix/users'

    # Twitch API headers with the OAuth token
    headers = {
        'Client-ID': conf.CLIENT_ID,  # Replace with your Twitch client ID
        'Authorization': f'Bearer {access_token}',
    }
        # Make a GET request to the Twitch API to get user information
    response = requests.get(api_url, headers=headers)
    response_data = response.json()
    return response_data['data']


def getCategoryByName(oauth_token: str,categoryName: str):
    url = f"https://api.twitch.tv/helix/games?name={categoryName}"
    headers = CaseInsensitiveDict()
    headers["Authorization"] = "Bearer " + oauth_token
    headers["Client-Id"] = conf.CLIENT_ID
    resp = requests.get(url, headers=headers)
    test = resp.json()["data"]
    id = test[0]["id"]
    picture = test[0]["box_art_url"]
    picture = picture.replace("-{width}x{height}", "")
    return id, picture
