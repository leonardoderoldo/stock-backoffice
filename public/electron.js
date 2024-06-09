const { app, ipcMain, BrowserWindow, screen } = require('electron')
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
		// titleBarStyle: 'hidden',
		titleBarOverlay: true,
		width: width,
		height: height,
		title: 'Stock',
		// backgroundColor: '#312450',
		icon: path.join(__dirname, './escola_na_mao'),
		webPreferences: {
			nodeIntegration: true
		}
	})

	ipcMain.handle('dark-mode:toggle', () => {
		if (nativeTheme.shouldUseDarkColors) {
			nativeTheme.themeSource = 'light'
		} else {
			nativeTheme.themeSource = 'dark'
		}
		return nativeTheme.shouldUseDarkColors
	})

	ipcMain.handle('dark-mode:system', () => {
		nativeTheme.themeSource = 'system'
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
