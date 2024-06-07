import jwtDecode from 'jwt-decode'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { EmployeeServices, WorkflowServices } from '../services'

import AsyncLocalStorage from '../utils/asyncLocalStorage'

import { moment } from '../configs'
import { AsyncStorageEnum, JobEnum, TelasEnum } from '../domains'
import { removeFormatDocument } from '../utils'
import { cifra } from '../utils/crypt'

const EmployeeContext = createContext({
	isLogged: null,
	employee: {},
	authorities: [],
	nextSteps: [],
	login: () => {},
	logout: () => {},
	signUp: () => {},
	activate: () => {},
	getConfirmationData: () => {},
	getTokenPassword: () => {},
	passwordChange: () => {},
	checkGrants: () => {},
	uploadImage: () => {},
	findByDocument: () => {},
	getRedirectPage: () => {},
	employeeCreatePass: () => {}
})

export const EmployeeProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState()
	const [authorities, setAuthorities] = useState()
	const [employee, setEmployee] = useState()
	const [nextSteps, setNextSteps] = useState([])

	const setIsLoading = () => {}

	const checkGrants = (neededGrants = []) => {
		let hasGrant = false
		const jobFunction = JobEnum[employee?.jobFunction]
		if (employee?.relation === 'OWNER' || jobFunction === JobEnum.STORE_MANAGEMENT) {
			hasGrant = true
		} else {
			hasGrant = neededGrants.includes(jobFunction)
		}
		return hasGrant
	}

	const getNextSteps = () => {
		return new Promise((resolve, reject) => {
			checkIsLogged()
				.then((isLogguedLocal) => {
					if (isLogguedLocal) {
						WorkflowServices.getSteps()
							.then(async (result) => {
								if (result == null) result = []
								AsyncLocalStorage.setItem(AsyncStorageEnum.NEXT_STEPS, JSON.stringify(result))
								setNextSteps(result)
								resolve({
									data: result,
									isLoggued: isLogguedLocal
								})
							})
							.catch((err) => {
								reject(err, false)
							})
					} else {
						setNextSteps([])
						resolve({ data: [], isLoggued: false })
					}
				})
				.catch((err) => {
					reject(err, false)
				})
		})
	}

	const checkIsLogged = () => {
		return new Promise((resolve, reject) => {
			let isLocalLogged = false
			AsyncLocalStorage.getMultiple([AsyncStorageEnum.EXPIRES_AT, AsyncStorageEnum.REFRESH_EXPIRES_AT])
				.then((result) => {
					const refreshExpires = result[1]
					if (refreshExpires) {
						const refreshExpiresMoment = moment(refreshExpires)
						const isBeforeNow = moment(new Date()).isBefore(refreshExpiresMoment)
						isLocalLogged = isBeforeNow
					}
					setIsLogged(isLocalLogged)
					resolve(isLocalLogged)
				})
				.catch((err) => {
					reject(err)
				})
		})
	}

	const login = (email, password, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			logout().then(async () => {
				const passForm = cifra(password)
				AsyncLocalStorage.getItem(AsyncStorageEnum.MESSAGE_CODE)
					.then((token) => {
						EmployeeServices.login({
							username: email,
							password: passForm,
							gcmToken: token
						})
							.then(async (result) => {
								var decoded = jwtDecode(result.authorization)
								setAuthorities(decoded.authorities)
								AsyncLocalStorage.setItem(
									AsyncStorageEnum.AUTHORITIES,
									JSON.stringify(decoded.authorities)
								)
								AsyncLocalStorage.setItem(AsyncStorageEnum.ACCESS_TOKEN, result.authorization)
								AsyncLocalStorage.setItem(AsyncStorageEnum.REFRESH_TOKEN, result.refreshAuthorization)
								AsyncLocalStorage.setItem(AsyncStorageEnum.EXPIRES_AT, result.expiresAt)
								AsyncLocalStorage.setItem(AsyncStorageEnum.REFRESH_EXPIRES_AT, result.refreshAt)
								AsyncLocalStorage.setItem(AsyncStorageEnum.USER, JSON.stringify(result.employee))
								if (result.school) {
									window.school = result.school
									AsyncLocalStorage.setItem(AsyncStorageEnum.SCHOOL, JSON.stringify(result.school))
								}
								checkIsLogged()
									.then((isLogguedLocal) => {
										getEmployee().then(() => {
											setIsLoading(false)
											resolve(result, isLogguedLocal)
										})
									})
									.catch((err) => {
										setIsLoading(false)
										throw err
									})
							})
							.catch((err) => {
								setIsLoading(false)
								reject(err)
								if (!!err && !!err.message) {
									toast.error(err.message)
								} else {
									toast.error('Ocorreu um erro, tente novamente mais tarde.')
								}
								setIsLoading(false)
							})
					})
					.catch((err) => {
						setIsLoading(false)
						reject(err)
					})
			})
		})
	}

	const findByDocument = (document, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			EmployeeServices.findByDocument(removeFormatDocument(document))
				.then(async (result) => {
					resolve(result)
					setIsLoading(false)
				})
				.catch((err) => {
					reject(err)
					if (!!err && !!err.message) {
						toast.error(err.message, 8000)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
					setIsLoading(false)
				})
		})
	}

	const signUp = (values, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			EmployeeServices.create({
				firstName: values.firstName,
				lastName: values.lastName,
				cpf: removeFormatDocument(values.cpf),
				email: values.email,
				birthDate: moment(values.birthDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
				relation: values.relation
			})
				.then(async (result) => {
					toast.success('Cadastro feito com sucesso!', 10000)
					AsyncLocalStorage.setItem(AsyncStorageEnum.EMPLOYEE_ID, result.externalId)
					resolve(result)
					setIsLoading(false)
				})
				.catch((err) => {
					reject(err)
					if (!!err && !!err.message) {
						toast.error(err.message, 8000)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
					setIsLoading(false)
				})
		})
	}

	const activate = (values = {}, showLoading = true) => {
		return new Promise((resolve, reject) => {
			if (showLoading) setIsLoading(true)
			const pass = cifra(values.password)
			EmployeeServices.activate({
				email: values.email,
				code: values.token,
				password: pass
			})
				.then((result) => {
					resolve(result)
					toast.success('Cadastro ativado com sucesso!', 10000)
					setIsLoading(false)
				})
				.catch((err) => {
					reject(err)
					if (!!err && !!err.message) {
						toast.error(err.message)
					} else {
						toast.error('Ocorreu um erro, tente novamente mais tarde.')
					}
					setIsLoading(false)
				})
		})
	}

	// const uploadImage = (base64, type, showLoading = true) => {
	// 	return new Promise(async (resolve, reject) => {
	// 		if (!!showLoading) setIsLoading(true)
	// 		EmployeeServices.uploadImage({
	// 			base64: base64,
	// 			contentType: type
	// 		})
	// 			.then(async (result) => {
	// 				AsyncLocalStorage.getItem(AsyncStorageEnum.USER).then(
	// 					async (userStorage) => {
	// 						let localUser = JSON.parse(userStorage)
	// 						localUser = {
	// 							...localUser,
	// 							imageUrl: `${
	// 								result.imageUrl
	// 							}?${new Date().getTime()}`
	// 						}
	// 						AsyncLocalStorage.setItem(
	// 							AsyncStorageEnum.USER,
	// 							JSON.stringify(localUser)
	// 						)
	// 					}
	// 				)

	// 				getEmployee().then(() => {
	// 					setIsLoading(false)
	// 					toast.success(
	// 						'Imagem atualizada com sucesso!',
	// 						10000
	// 					)
	// 					resolve(result)
	// 				})
	// 			})
	// 			.catch((err) => {
	// 				setIsLoading(false)
	// 				reject(err)
	// 				if (!!err && !!err.message) {
	// 					toast.error(err.message, 8000)
	// 				} else {
	// 					toast.error(
	// 						'Ocorreu um erro, tente novamente mais tarde.'
	// 					)
	// 				}
	// 			})
	// 	})
	// }

	const getRedirectPage = () => {
		return new Promise((resolve) => {
			getNextSteps().then(async (result) => {
				if (result.isLoggued) {
					const steps = result.data
					var page = TelasEnum.HOME
					if (steps.length > 0) {
						const filter = Object.entries(TelasEnum).filter((f) => {
							return steps.includes(f[1].task?.name)
						})
						if (filter.length > 0) {
							page = TelasEnum[filter[0][0]]
						}
					} else {
						page = TelasEnum.DASHBOARD
					}
				} else {
					AsyncLocalStorage.getItem(AsyncStorageEnum.DISPLAYED_INTRO).then((displayedIntro) => {
						if ((displayedIntro == null || displayedIntro == 'true') && !result.isLoggued) {
							page = TelasEnum.INTRUDUTION
						} else {
							page = TelasEnum.SIGNIN
						}
					})
				}
				if (!page) page = TelasEnum.SIGNIN
				resolve({ page: page, isLoggued: result.isLoggued })
			})
		})
	}

	// const getConfirmationData = (document) => {
	// 	return new Promise(async (resolve, reject) => {
	// 		setIsLoading(true)
	// 		EmployeeServices.getConfirmationData(document)
	// 			.then((result) => {
	// 				resolve(result)
	// setIsLoading(false)
	// 			})
	// 			.catch((err) => {
	// 				reject(err)
	// 				if (!!err && !!err.message) {
	// 					toast.error(err.message, 8000)
	// 				} else {
	// 					toast.error(
	// 						'CPF não encontrado, verifique os dados digitados e tente novamente'
	// 					)
	// 				}
	// setIsLoading(false)
	// 			})
	// 	})
	// }

	// const getTokenPassword = (data) => {
	// 	return new Promise(async (resolve, reject) => {
	// 		setIsLoading(true)
	// 		EmployeeServices.sendTokenPassword({
	// 			externalId: data.externalId,
	// 			confirmationData: data.confirmationData
	// 		})
	// 			.then((result) => {
	// 				resolve(result)
	// 				toast.success(
	// 					`Foi enviado um TOKEN para o email ${data.confirmationData}, com instruções para alterar sua senha.`,
	// 					10000
	// 				)
	// setIsLoading(false)
	// 			})
	// 			.catch((err) => {
	// 				reject(err)
	// 				if (!!err && !!err.message) {
	// 					toast.error(err.message, 8000)
	// 				}
	// setIsLoading(false)
	// 			})
	// 	})
	// }

	// const passwordChange = (data) => {
	// 	return new Promise(async (resolve, reject) => {
	// 		setIsLoading(true)
	// 		const passForm = cifra(data.password)
	// 		EmployeeServices.passwordChange({
	// 			externalId: data.externalId,
	// 			code: data.code,
	// 			password: passForm
	// 		})
	// 			.then((result) => {
	// 				resolve(result)
	// 				toast.success(`Senha alterada com sucesso!`, 10000)
	// setIsLoading(false)
	// 			})
	// 			.catch((err) => {
	// 				reject(err)
	// 				if (!!err && !!err.message) {
	// 					toast.error(err.message, 8000)
	// 				}
	// setIsLoading(false)
	// 			})
	// 	})
	// }

	const getEmployee = () => {
		return new Promise((resolve) => {
			AsyncLocalStorage.getItem(AsyncStorageEnum.USER).then((result) => {
				const data = JSON.parse(result)
				setEmployee(data)
				resolve(data)
			})
		})
	}

	const loadAuthorities = () => {
		return new Promise((resolve) => {
			AsyncLocalStorage.getItem(AsyncStorageEnum.AUTHORITIES).then((result) => {
				const data = JSON.parse(result)
				setAuthorities(data)
				resolve(data)
			})
		})
	}

	// const employeeCreatePass = (cpf) => {
	// 	setCpf(cpf)
	// 	setShowModalEmployeeCreatePass(true)
	// }

	const logout = async () => {
		await AsyncLocalStorage.removeMultiple([
			AsyncStorageEnum.USER,
			AsyncStorageEnum.LEMBRAR_DADOS_ACESSO,
			AsyncStorageEnum.FB_ACCESS_TOKEN,
			AsyncStorageEnum.ACCESS_TOKEN,
			AsyncStorageEnum.REFRESH_TOKEN,
			AsyncStorageEnum.EXPIRES_AT,
			AsyncStorageEnum.REFRESH_EXPIRES_AT,
			AsyncStorageEnum.AUTHORITIES,
			AsyncStorageEnum.EMPLOYEE_ID,
			AsyncStorageEnum.NEXT_STEPS,
			AsyncStorageEnum.SCHOOL,
			AsyncStorageEnum.SCHOOL_ID,
			AsyncStorageEnum.SCHOOL_STUDENTS,
			AsyncStorageEnum.CLIENT_UUID,
			AsyncStorageEnum.REGISTER,
			AsyncStorageEnum.PUBLIC_KEY,
			AsyncStorageEnum.PRIVATE_KEY,
			AsyncStorageEnum.SERVER_PUBLIC_KEY,
			AsyncStorageEnum.SIGN_UP_FORM
		]).then(() => {
			checkIsLogged().then(() => {})
		})
	}

	useEffect(() => {
		getEmployee()
		getNextSteps()
		loadAuthorities()
	}, [])

	return (
		<EmployeeContext.Provider
			value={{
				isLogged,
				login,
				logout,
				signUp,
				employee,
				authorities,
				activate,
				nextSteps,
				checkGrants,
				// uploadImage,
				// getConfirmationData,
				// getTokenPassword,
				// passwordChange,
				findByDocument,
				getRedirectPage
				// employeeCreatePass
			}}
		>
			{children}
		</EmployeeContext.Provider>
	)
}

export default EmployeeContext
