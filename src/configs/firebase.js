// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const VAPID =
	'BJ-sttFXIa_4mUWxIViCI5_NhKmQnbC5rEc7iMgTG2auqXo6405A_TDsATBat2i5CLfeQsmyG4f2nZM-NJ_Q71A'
const firebaseConfig = {
	apiKey: 'AIzaSyDMt6NVuRNiNoPMHyzYUwHbg-a0EUX3WZ0',
	authDomain: 'escolanamao-bdf91.firebaseapp.com',
	databaseURL: 'https://escolanamao-bdf91-default-rtdb.firebaseio.com',
	projectId: 'escolanamao-bdf91',
	storageBucket: 'escolanamao-bdf91.appspot.com',
	messagingSenderId: '116274185566',
	appId: '1:116274185566:web:a781f00fb2abc1e9abfbcf',
	measurementId: 'G-PFGWVSPRL2'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const messaging = getMessaging(app)

export const requestPermission = () => {
	return new Promise((resolve, reject) => {
		if (Notification !== 'undefined') {
			Notification.requestPermission().then((permission) => {
				console.log('Notification.permission', permission)
				if (permission === 'granted') {
					return getToken(messaging, { vapidKey: VAPID })
						.then((currentToken) => {
							if (currentToken) {
								resolve(currentToken)
							} else {
								reject('Failed to generate the app registration token.')
							}
						})
						.catch((err) => {
							reject('An error occurred when requesting to receive the token.', err)
						})
				} else if (permission === 'default') {
					//...
				} else {
					alert('É necessário autorizar as notificações para continuar.')
					reject('User Permission Denied.')
				}
			})
		} else {
			alert('This browser does not support desktop notification')
			resolve()
		}
	})
}

export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			resolve(payload)
		})
	})

export default app
