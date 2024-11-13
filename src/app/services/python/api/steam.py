import requests
import eel
def get_game_list():
    url = 'http://api.steampowered.com/ISteamApps/GetAppList/v2/'
    response = requests.get(url)
    return response.json().get('applist', {}).get('apps', [])

def get_app_details(app_id):
    url = f"http://store.steampowered.com/api/appdetails?appids={app_id}"
    response = requests.get(url)
    return response.json().get(str(app_id), {}).get('data', {})

def find_game_by_name(game_name):
    games = get_game_list()
    for game in games:
        if game_name.lower() == game['name'].lower():
            return game['appid']
    return None

def steaminfo(gamename):
    app_id = find_game_by_name(gamename)
    if app_id:
        details = get_app_details(app_id)
        if details:
            # print(details)
            preis_info = details.get('price_overview', {})
            screenshots = details.get('screenshots', [])
            detail = [{
                "name": f'{details.get('name', 'Unbekannt')}', 
                "description": f'{details.get('short_description', 'Keine Beschreibung verfügbar')}', 
                "price": f'{preis_info.get('final_formatted', 'Nicht verfügbar')}',
                "cover": f'{screenshots[0].get('path_full')}'}]
            return detail
    else:
        return None
