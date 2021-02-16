let {BrowserWindow} = require('electron');
export.makeWin = function() {
  let win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  return win;
}
