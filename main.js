const { app, BrowserWindow } = require('electron');
app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('allow-file-access-from-files');
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    backgroundColor: '#FFF',
  })
  win.webContents.openDevTools();

  //win.loadURL(`http://localhost:4200`);
  win.loadURL(`file://${__dirname}/dist/angular-eel/index.html`)
  //win.loadFile(`./dist/angular-eel/index.html`);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
