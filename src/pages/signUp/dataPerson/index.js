import { useFormik } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Buttom, InputMask, InputText } from '../../../components/global'
import { RestaurantContext } from '../../../contexts'

import { AsyncStorageEnum } from '../../../domains'
import AsyncLocalStorage from '../../../utils/asyncLocalStorage'
import validacao from './validacao'

const DataPerson = () => {
	const navigate = useNavigate()
	const { signUp } = useContext(RestaurantContext)

	const [btnNextDisabled, setBtnNextDisabled] = useState(false)

	const formik = useFormik({
		validationSchema: validacao,
		initialValues: {},
		onSubmit: (values) => {
			AsyncLocalStorage.setItem(AsyncStorageEnum.RESTAURANT_SIGNUP, btoa(JSON.stringify(values))).then(() => {
				signUp(values)
					.then(async () => {
						navigate('/sign-up/activate')
					})
					.catch(() => {
						setBtnNextDisabled(false)
					})
			})
		}
	})

	const onBack = () => {
		navigate('/sign-up')
	}

	useEffect(() => {
		AsyncLocalStorage.getItem(AsyncStorageEnum.RESTAURANT_SIGNUP).then((result) => {
			if (result) {
				formik.setValues(JSON.parse(atob(result)))
			}
		})
	}, [])

	return (
		<div>
			<p className="login-box-msg">INFORMAÇÕES PESSOAIS</p>

			<form onSubmit={formik.handleSubmit} className="mb-3">
				<div className="mb-3">
					<InputText
						id="firstName"
						name="firstName"
						icon={'fa-user'}
						placeholder="Primeiro nome"
						value={formik.values.firstName}
						error={formik.errors.firstName}
						onChange={formik.handleChange('firstName')}
					/>
				</div>
				<div className="mb-3">
					<InputText
						id="lastName"
						name="lastName"
						icon={'fa-user'}
						placeholder="Sobrenome"
						value={formik.values.lastName}
						error={formik.errors.lastName}
						onChange={formik.handleChange('lastName')}
					/>
				</div>
				<div className="mb-3">
					<InputText
						id="email"
						name="email"
						icon={'fa-envelope'}
						placeholder="E-mail"
						value={formik.values.email}
						error={formik.errors.email}
						onChange={formik.handleChange('email')}
					/>
				</div>
				<div className="mb-3">
					<InputMask
						id="birthDate"
						name="birthDate"
						icon={'fa-calendar'}
						mask="99/99/9999"
						placeholder="Data de nascimento"
						value={formik.values.birthDate}
						error={formik.errors.birthDate}
						onChange={formik.handleChange('birthDate')}
					/>
				</div>
				<div className="mb-3">
					<InputMask
						id="cpf"
						name="cpf"
						icon={'fa-id-card'}
						mask="999.999.999-99"
						placeholder="CPF"
						value={formik.values.cpf}
						error={formik.errors.cpf}
						onChange={formik.handleChange('cpf')}
					/>
				</div>

				<div className="row">
					<div className="col-6">
						<Buttom onClick={() => onBack()} class="float-left">
							Voltar
						</Buttom>
					</div>
					<div className="col-6">
						<Buttom submit disabled={btnNextDisabled} class="float-right">
							Continuar
						</Buttom>
					</div>
				</div>
			</form>

			<a href="/" className="text-center">
				Já tenho cadastro! Fazer login
			</a>
		</div>
	)
}

export default DataPerson
