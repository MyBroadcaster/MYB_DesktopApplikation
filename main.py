from src import components
import sys
import eel
import eel.browsers

def start_eel(dev):
    if len(dev) == 2:
        if dev[1] == "dev":
            directory = "src"
            page = {"port": 4200}
            eel.browsers.set_path('electron', 'node_modules/electron/dist/electron')
            eel.init(directory, [".ts", ".js", ".html, .py"])
            eel.start(page,mode='electron')

        if dev[1] == "build":
                directory = "dist/angular-eel/"
                page = "index.html"
                options = {
                'mode': 'electron'}
                eel.browsers.set_path('electron', 'node_modules/electron/dist/electron')
                eel.init(directory, [".ts", ".js", ".html, .py"])
                eel.start(page,options=options,suppress_error=True)
    else:
            directory = "dist/angular-eel/"
            page = "index.html"
            options = {
            'mode': 'electron'}
            eel.browsers.set_path('electron', 'electron')
            eel.init(directory, [".ts", ".js", ".html, .py"])
            eel.start(page,options=options,suppress_error=True)

if __name__ == "__main__":
        start_eel(dev=sys.argv)