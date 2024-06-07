import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import AsyncLocalStorage from '../../../utils/asyncLocalStorage'
import { Buttom, InputText } from '../../../components/global'
import { EmployeeContext } from '../../../contexts'

import validacao from './validacao'
import { AsyncStorageEnum } from '../../../domains'

const ActivatePerson = () => {
	const navigate = useNavigate()
	const { activate, login, getRedirectPage } = useContext(EmployeeContext)

	const [btnNextDisabled, setBtnNextDisabled] = useState(false)
	const goTo = () => {
		getRedirectPage().then(async (rResult) => {
			const page = rResult.page
			if (!rResult.isLoggued) {
				setTimeout(() => {
					goTo()
				}, 2000)
			} else {
				navigate(page?.name)
			}
		})
	}

	const formik = useFormik({
		initialValues: {},
		validationSchema: validacao,
		onSubmit: (values) => {
			activate(values).then(async () => {
				login(values.email, values.password)
					.then(async () => {
						await AsyncLocalStorage.setItem(
							AsyncStorageEnum.RESTAURANT_SIGNUP,
							btoa(JSON.stringify(values))
						)
						goTo()
					})
					.catch(() => {
						setBtnNextDisabled(false)
					})
			})
		}
	})

	useEffect(() => {
		AsyncLocalStorage.getItem(AsyncStorageEnum.RESTAURANT_SIGNUP).then((result) => {
			if (result) {
				formik.setValues(JSON.parse(atob(result)))
			}
		})
	}, [])

	return (
		<div>
			<p className="login-box-msg">VALIDAÇÃO DOS DADOS</p>
			<p className="text-center">
				<small>
					Digite o token enviado para o e-mail cadastrado, <br />
					para acesso ao App.
				</small>
			</p>

			<form onSubmit={formik.handleSubmit} className="mb-3">
				<div className="mb-3">
					<InputText
						id="token"
						name="token"
						icon={'fa-hashtag'}
						maxLength={6}
						placeholder="Digite o token"
						value={formik.values.token}
						error={formik.errors.token}
						onChange={(e) => formik.setFieldValue('token', e.target.value.toUpperCase())}
					/>
				</div>
				<div className="mb-3">
					<InputText
						id="password"
						name="password"
						type="password"
						icon={'fa-lock'}
						placeholder="Digite sua senha"
						value={formik.values.password}
						error={formik.errors.password}
						onChange={formik.handleChange('password')}
					/>
				</div>
				<div className="mb-3">
					<InputText
						id="confirmPassword"
						name="confirmPassword"
						type="password"
						icon={'fa-lock'}
						placeholder="Confirme sua senha"
						value={formik.values.confirmPassword}
						error={formik.errors.confirmPassword}
						onChange={formik.handleChange('confirmPassword')}
					/>
				</div>
				<div className="row">
					<div className="col-12">
						<Buttom submit disabled={btnNextDisabled}>
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

export default ActivatePerson
