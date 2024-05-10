const { app, BrowserWindow, screen } = require('electron')
const path = require('path')

let mainWindow

function isDev() {
	return process.mainModule.filename.indexOf('app.asar') === -1
}

function createWindow() {
	// Create a window that fills the screen's available work area.
	const primaryDisplay = screen.getPrimaryDisplay()
	const { width, height } = primaryDisplay.workAreaSize

	mainWindow = new BrowserWindow({
		width: width,
		height: height,
		webPreferences: {
			nodeIntegration: true
		}
	})

	const startURL = isDev ? 'http://localhost:3333' : `file://${path.join(__dirname, '../build/index.html')}`

	mainWindow.loadURL(startURL)

	mainWindow.on('closed', () => (mainWindow = null))
	// Open the DevTools.
	if (isDev) {
		mainWindow.webContents.openDevTools({ mode: 'detach' })
	}
}

app.on('ready', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})
