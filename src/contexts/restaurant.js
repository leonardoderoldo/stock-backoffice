import { createContext, useContext } from 'react'
import { toast } from 'react-hot-toast'

import RootContext from './root'

import { moment } from '../configs'
import { removeFormatDocument, removeFormatPhone } from '../utils'
import AsyncLocalStorage from '../utils/asyncLocalStorage'
import { AsyncStorageEnum } from '../domains'
import { RestaurantServices } from '../services'

const RestaurantContext = createContext({
	signUp: () => {}
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

	return (
		<RestaurantContext.Provider
			value={{
				signUp
			}}
		>
			{children}
		</RestaurantContext.Provider>
	)
}

export default RestaurantContext
