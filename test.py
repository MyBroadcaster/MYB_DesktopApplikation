import webview

if __name__ == '__main__':
    webview.create_window('Example', 'http://localhost:4200', easy_drag=True,hidden=True, resizable=True)
    webview.start(debug=True)