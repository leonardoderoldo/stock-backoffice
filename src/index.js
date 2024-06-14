import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.js'
import reportWebVitals from './reportWebVitals.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/admin-lte/dist/css/adminlte.min.css'

import './assets/css/custom.css'
5
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
