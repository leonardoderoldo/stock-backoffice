import api, { isSuccess } from './ApiService'

const base_path = '/partner/restaurant'

//#######################################################################
//#######################################################################
//#### FINDS ############################################################
//#######################################################################
//#######################################################################

//#######################################################################
//#######################################################################
//#### CREATES ##########################################################
//#######################################################################
//#######################################################################

export const create = (dto) => {
	return api
		.post(`${base_path}/signup`, JSON.stringify(dto))
		.then((response) => {
			if (isSuccess(response, 201)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}

//#######################################################################
//#######################################################################
//#### UPDATES ##########################################################
//#######################################################################
//#######################################################################

export const registerAddress = (dto) => {
	return api
		.put(`${base_path}/registries/address`, JSON.stringify(dto))
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

export const registerAccountBanking = (dto) => {
	return api
		.put(`${base_path}/registries/account-banking`, JSON.stringify(dto))
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

export const acceptTerms = (termVersion) => {
	return api
		.put(`${base_path}/terms/${termVersion}`)
		.then((response) => {
			if (isSuccess(response)) {
				return response.data
			}
			return Promise.reject(response.data)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
}
