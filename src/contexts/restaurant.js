import { createContext, useContext } from 'react'
import { toast } from 'react-hot-toast'

import RootContext from './root'

import { moment } from '../configs'
import { removeFormatCEP, removeFormatDocument, removeFormatPhone } from '../utils'
import AsyncLocalStorage from '../utils/asyncLocalStorage'
import { AsyncStorageEnum } from '../domains'
import { CatalogServices, RestaurantServices } from '../services'

const RestaurantContext = createContext({
	signUp: () => {},
	acceptTerms: () => {},
	registerAddress: () => {},
	registerAccountBanking: () => {},
	getCatalog: () => {}
})

export const RestaurantProvider = ({ children }) => {
	const { setIsLoading } = useContext(RootContext)

	//####################################################################################
	//################ FUNCTION ##########################################################
	//####################################################################################
	//####################################################################################

	const signUp = (values, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			const phone = removeFormatPhone(values.celPhone)
			RestaurantServices.create({
				businessName: values.businessName || '',
				companyName: values.companyName || '',
				cnpj: removeFormatDocument(values.cnpj),
				phone: {
					ddd: phone.substring(0, 2),
					number: phone.substring(3),
					type: 'MOBILE'
				},
				employee: {
					firstName: values.firstName,
					lastName: values.lastName,
					cpf: removeFormatDocument(values.cpf),
					email: values.email,
					birthDate: moment(values.birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
					jobFunction: 'OWNER'
				}
			})
				.then(async (result) => {
					toast.success('Restaurante cadastrado com sucesso!', 10000)
					AsyncLocalStorage.setItem(AsyncStorageEnum.RESTAURANT_ID, result.externalId)
					setIsLoading(false)
					resolve(result)
				})
				.catch((err) => {
					setIsLoading(false)
					if (err?.message) {
						toast.error(err.message, 8000)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
					reject(err)
				})
		})
	}

	const registerAddress = (values = {}, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			const dto = { ...values, cep: removeFormatCEP(values.cep) }
			RestaurantServices.registerAddress(dto)
				.then((result) => {
					setIsLoading(false)
					resolve(result)
					toast.success('Endereço salvo com sucesso!', 10000)
				})
				.catch((err) => {
					setIsLoading(false)
					reject(err)
					if (!!err && !!err.message) {
						toast.error(err.message, 8000)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
				})
		})
	}

	const registerAccountBanking = (values = {}, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			RestaurantServices.registerAccountBanking({
				bankCode: values.bankCode,
				agency: values.agency,
				accountNumber: values.accountNumber,
				verifyingDigit: values.verifyingDigit
			})
				.then((result) => {
					setIsLoading(false)
					resolve(result)
					toast.success('Conta salva com sucesso!', 10000)
				})
				.catch((err) => {
					setIsLoading(false)
					reject(err)
					if (!!err && !!err.message) {
						toast.error(err.message, 8000)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
				})
		})
	}

	const acceptTerms = (termVersion, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			RestaurantServices.acceptTerms(termVersion)
				.then((result) => {
					setIsLoading(false)
					toast.success('Termos aceito com sucesso!', 10000)
					resolve(result)
				})
				.catch((err) => {
					setIsLoading(false)
					reject(err)
					if (!!err && !!err.message) {
						toast.error(err.message)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
				})
		})
	}

	const getCatalog = (showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			CatalogServices.get()
				.then((result) => {
					setIsLoading(false)
					resolve(result)
				})
				.catch((err) => {
					setIsLoading(false)
					reject(err)
					if (!!err && !!err.message) {
						toast.error(err.message)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
				})
		})
	}

	return (
		<RestaurantContext.Provider
			value={{
				signUp,
				acceptTerms,
				registerAddress,
				registerAccountBanking,
				getCatalog
			}}
		>
			{children}
		</RestaurantContext.Provider>
	)
}

export default RestaurantContext
