import api, { isSuccess } from './ApiService'

import { AsyncStorageEnum } from '../domains'

const base_path = '/employees'

export const findByDocument = async (cpf) => {
	return api
		.get(`${base_path}?cpf=${cpf}`)
		.then(async (response) => {
			if (isSuccess(response)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const login = async (dto) => {
	return api
		.post(`${base_path}/auth/login`, JSON.stringify(dto))
		.then(async (response) => {
			if (isSuccess(response, 200)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const refresh = () => {
	return api
		.get(`${base_path}/auth/refresh`)
		.then(async (response) => {
			if (isSuccess(response, 200)) {
				const data = response.data
				localStorage.setItem(
					AsyncStorageEnum.ACCESS_TOKEN,
					data.authorization
				)
				localStorage.setItem(
					AsyncStorageEnum.REFRESH_TOKEN,
					data.refreshAuthorization
				)
				localStorage.setItem(
					AsyncStorageEnum.EXPIRES_AT,
					data.expiresAt
				)
				localStorage.setItem(
					AsyncStorageEnum.REFRESH_EXPIRES_AT,
					data.refreshAt
				)
				return data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const getConfirmationData = (document) => {
	return api
		.get(`${base_path}/password/confirmation-data?cpf=${document}`)
		.then(async (response) => {
			if (isSuccess(response, 200)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const create = async (dto) => {
	return api
		.post(`${base_path}/signup`, JSON.stringify(dto))
		.then(async (response) => {
			if (isSuccess(response, 201)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const activate = async (dto) => {
	return api
		.put(`${base_path}/activate`, JSON.stringify(dto))
		.then((response) => {
			if (isSuccess(response, 200)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const uploadImage = async (dto) => {
	return api
		.put(`${base_path}/image`, JSON.stringify(dto))
		.then((response) => {
			if (isSuccess(response, 200)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const deleteImage = async () => {
	return api
		.delete(`${base_path}/image`)
		.then((response) => {
			if (isSuccess(response, 200)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const sendTokenPassword = (dto) => {
	return api
		.post(`${base_path}/password/confirmation-code`, JSON.stringify(dto))
		.then(async (response) => {
			if (isSuccess(response, 200)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

export const passwordChange = (dto) => {
	return api
		.put(`${base_path}/password/change`, JSON.stringify(dto))
		.then(async (response) => {
			if (isSuccess(response, 200)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}
