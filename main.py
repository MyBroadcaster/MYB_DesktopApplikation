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
            eel.init(directory, ['.tsx', '.ts', '.jsx', '.js', '.html'])
            eel.start(page,mode='electron',suppress_error=True)

        if dev[1] == "build":
            directory = "dist/angular-eel"
            page = "index.html"
            eel.browsers.set_path('electron', 'node_modules/electron/dist/electron')
            eel.init(directory, ['.tsx', '.ts', '.jsx', '.js', '.html'])
            eel.start(page,mode='custom', cmdline_args=['node_modules/electron/dist/electron.exe', '.'])
    else:
            directory = "dist/angular-eel"
            page = {"port": 8000}
            options = {
            'mode': 'electron'}
            eel.browsers.set_path('electron', 'electron')
            eel.init(directory, ['.tsx', '.ts', '.jsx', '.js', '.html'])
            eel.start(page,options=options,suppress_error=True)


def test():
     eel.change_acc_info("","")

if __name__ == "__main__":
        start_eel(dev=sys.argv)