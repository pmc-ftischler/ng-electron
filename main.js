const {app, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');

require('dotenv').config();

let appWindow = null;

app.on('ready', function () {
  appWindow = new BrowserWindow({width: 1000, height: 600});

  if (process.env.PACKAGE === 'true') {
    appWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'dist', 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    appWindow.loadURL(process.env.HOST);
    appWindow.webContents.openDevTools();
  }

  appWindow.webContents.openDevTools();

  appWindow.on('closed', function () {
    appWindow = null;
  });
});

app.on('activate', () => {
  if (appWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
