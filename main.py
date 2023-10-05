import asyncio
import eel
import psutil
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
    token, refresh_token = asyncio.run(oauthprocess())
    return [token, refresh_token]

async def oauthprocess():
    twitch = await Twitch(conf.CLIENT_ID, conf.CLIENT_SECRET)
    target_scope = [AuthScope.CHANNEL_MANAGE_BROADCAST,AuthScope.MODERATOR_READ_CHATTERS, AuthScope.CHAT_READ, AuthScope.BITS_READ, AuthScope.WHISPERS_EDIT,
                    AuthScope.WHISPERS_READ, AuthScope.CHAT_EDIT, AuthScope.CHANNEL_READ_EDITORS, AuthScope.USER_READ_FOLLOWS, AuthScope.USER_MANAGE_WHISPERS]
    auth = UserAuthenticator(twitch, target_scope, force_verify=True)
    token, refresh_token = await auth.authenticate()
    await twitch.set_user_authentication(token, target_scope, refresh_token)
    return token, refresh_token

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
