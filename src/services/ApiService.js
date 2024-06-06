import { create } from 'apisauce'

import AsyncLocalStorage from '../utils/asyncLocalStorage'

import { serverUri } from '../configs'
import { AsyncStorageEnum } from '../domains'

import { EmployeeServices } from '../services'

import { moment } from '../configs'

const REFRESH_PATH = '/employees/auth/refresh'
const SAFE_PATH = [
	'/auth/token',
	'/employees/signup',
	'/employees/activate',
	'/employees/auth/login',
	'/employees/password/change',
	'/employees/password/confirmation-code',
	'/employees/password/confirmation-data',
	'/partner/restaurant/signup',
	REFRESH_PATH
]

const api = create({
	baseURL: serverUri,
	headers: {
		'Content-Type': 'application/json'
	}
})

api.addResponseTransform((res) => async () => {
	if (!res.ok) throw res
})

api.addAsyncRequestTransform(async (request) => {
	const safePath = SAFE_PATH.indexOf(request.url.split('?')[0]) >= 0
	const isRefreshPath = REFRESH_PATH === request.url
	const expiresIn = await AsyncLocalStorage.getItem(AsyncStorageEnum.EXPIRES_AT)

	var now = moment(new Date()).format()
	let expiresMoment = moment(expiresIn).format()
	var isAfter = moment(now).isAfter(expiresMoment)

	if (isAfter && !safePath && !isRefreshPath) {
		alert('TESTE')
		await EmployeeServices.refresh().catch((err) => {
			console.log('refresh_erro', err)
		})
	}

	if (!safePath || isRefreshPath) {
		await AsyncLocalStorage.getItem(
			isRefreshPath ? AsyncStorageEnum.REFRESH_TOKEN : AsyncStorageEnum.ACCESS_TOKEN
		).then((access_token) => {
			if (access_token) {
				request.headers['Authorization'] = `Bearer ${access_token}`
			} else {
				console.error('Erro ao acessar o token.', request.url)
			}
		})
	}
})

export const isSuccess = (response, code = 200) => {
	if (response && response.status > 199 && response.status < 300) {
		if (code && response.status === code) {
			return response.status === code
		}
		return true
	}
	return false
}

export const handleException = async (err) => {
	if (err.status) {
		throw Error({
			status: err.status,
			message: '',
			errorCode: err.data.internalCode
		})
	}
	throw err
}

export default api
