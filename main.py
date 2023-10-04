import eel
import psutil

@eel.expose
def say_hello(name):
  print(f"Hello {name}!")
  return "Hello"

@eel.expose
def processlist():
    processlist=list()
    for process in psutil.process_iter():
        processlist.append(process.name())
    return processlist

@eel.expose
def threadstart():
    eel.spawn(test())


@eel.expose
def get_data():
    return "ඞ"

def start_eel(dev):
    if dev:
        directory = "src"
        page = "index.html"
    else:
        directory = "dist/angular-eel"
        page = "index.html"

    eel.init(directory, [".ts", ".js", ".html"])

    eel.start(page, size=(1280, 1000))

if __name__ == "__main__":
    import sys
    start_eel(dev=len(sys.argv) == 2)
