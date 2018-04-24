const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () { 
  var newWidth = 400;
  var newHeight = 200;
    
  mainWindow = new BrowserWindow({frame:false,
                                  width: newWidth,
                                  height: newHeight})

  mainWindow.loadURL(`file://${__dirname}/application/mainPage.html`)


  //mainWindow.webContents.openDevTools()   // Open the DevTools?

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})