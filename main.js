const { app, BrowserWindow } = require('electron');
const net = require('net');

app.commandLine.appendSwitch('disable-web-security');
app.commandLine.appendSwitch('allow-file-access-from-files');

function isAngularDevServerRunning(port, callback) {
  const client = net.connect(port, 'localhost', () => {
    client.end();
    callback(true);
  });

  client.on('error', () => {
    callback(false);
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    backgroundColor: '#FFF',
  });

  const angularDevServerPort = 4200; // Ändere dies entsprechend deiner Angular-Konfiguration

  isAngularDevServerRunning(angularDevServerPort, (isDevMode) => {
    if (isDevMode) {
      win.loadURL(`http://localhost:${angularDevServerPort}`);
      win.webContents.openDevTools();
    } else {
      win.loadURL(`file://${__dirname}/dist/angular-eel/index.html`);
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
