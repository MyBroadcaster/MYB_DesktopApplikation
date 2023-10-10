import asyncio
import eel
import psutil
import requests
from twitchAPI.helper import first
from twitchAPI.oauth import refresh_access_token,UserAuthenticator,AuthScope
from twitchAPI.twitch import Twitch
import conf
from SQL import autobot_sql

threadloop = True

@eel.expose
def say_hello(name):
  print(f"Hello {name}!")
  return "Hello"

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
def processlist_Scan():
    processlist=list()
    for process in psutil.process_iter():
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
    print(item)
    callback = autobot_sql.autobot_dbcall(item)
    return callback

@eel.expose
def tw_Login():
    token, refresh_token, userid, username, profile_image = asyncio.run(oauthprocess())
    return [token, refresh_token, userid, username, profile_image]

async def oauthprocess():
    twitch = await Twitch(conf.CLIENT_ID, conf.CLIENT_SECRET)
    target_scope = [AuthScope.CHANNEL_MANAGE_BROADCAST,AuthScope.MODERATOR_READ_CHATTERS, AuthScope.CHAT_READ, AuthScope.BITS_READ, AuthScope.WHISPERS_EDIT,
                    AuthScope.WHISPERS_READ, AuthScope.CHAT_EDIT, AuthScope.CHANNEL_READ_EDITORS, AuthScope.USER_READ_FOLLOWS, AuthScope.USER_MANAGE_WHISPERS]
    auth = UserAuthenticator(twitch, target_scope, force_verify=True)
    token, refresh_token = await auth.authenticate()
    await twitch.set_user_authentication(token, target_scope, refresh_token)
    userid, username, profile_image = get_user_info(token)
    eel.change_acc_info(profile_image, username)
    return token, refresh_token, userid, username, profile_image
@eel.expose

def get_user_info(access_token):
    # Twitch API endpoint to get user information
    api_url = 'https://api.twitch.tv/helix/users'

    # Twitch API headers with the OAuth token
    headers = {
        'Client-ID': "rcjdyk9v784dy2h7sq8tvsaaidcd8i",  # Replace with your Twitch client ID
        'Authorization': f'Bearer {access_token}',
    }

    try:
        # Make a GET request to the Twitch API to get user information
        response = requests.get(api_url, headers=headers)
        response_data = response.json()

        if response.status_code == 200:
            # Extract user ID and display name from the API response
            user_id = response_data['data'][0]['id']
            display_name = response_data['data'][0]['display_name']
            profile_image = response_data['data'][0]['profile_image_url']
            return user_id, display_name, profile_image
        else:
            print(f"Failed to retrieve user information. Status code: {response.status_code}")
            return None, None
    except requests.RequestException as e:
        print(f"An error occurred: {str(e)}")
        return None, None

@eel.expose
def get_data():
    return "ඞ"

def start_eel(dev):
    if dev:
        directory = "src"
        page = {"port": 4200}
    else:
        directory = "dist/angular-eel"
        page = "index.html"

    eel.init(directory, [".ts", ".js", ".html"])

    eel.start(page, size=(1280, 1000))

if __name__ == "__main__":
    import sys
    start_eel(dev=len(sys.argv) == 2)
