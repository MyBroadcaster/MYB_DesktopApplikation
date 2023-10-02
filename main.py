import eel

@eel.expose
def say_hello(name):
  print(f"Hello {name}!")
  return "Hello"


def test():
    print("hallo")

@eel.expose
def threadstart():
    eel.spawn(test())


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
