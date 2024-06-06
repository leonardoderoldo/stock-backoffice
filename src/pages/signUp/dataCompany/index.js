import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Buttom, InputMask, InputText } from '../../../components/global'
import validacao from './validacao'

import { Col, Row } from '../../../components/global'
import AsyncLocalStorage from '../../../utils/asyncLocalStorage'
import { AsyncStorageEnum } from '../../../domains'

const DataCompany = () => {
	const navigate = useNavigate()

	const [btnNextDisabled] = useState(false)

	const formik = useFormik({
		validationSchema: validacao,
		initialValues: {},
		onSubmit: (values) => {
			AsyncLocalStorage.setItem(AsyncStorageEnum.RESTAURANT_SIGNUP, btoa(JSON.stringify(values))).then(() => {
				navigate('/sign-up/person')
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
			<p className="login-box-msg">INFORMAÇÕES DO RESTAURANTE</p>
			<form onSubmit={formik.handleSubmit} className="mb-3">
				<Row>
					<Col class="col-md-12 col-12 mb-3">
						<InputText
							id="businessName"
							name="businessName"
							icon={'fa-signature'}
							placeholder="Razão Social"
							value={formik.values.businessName}
							error={formik.errors.businessName}
							onChange={formik.handleChange('businessName')}
						/>
					</Col>

					<Col class="col-md-12 col-12 mb-3">
						<InputText
							id="companyName"
							name="companyName"
							type="companyName"
							icon={'fa-school'}
							placeholder="Nome do restaurante"
							value={formik.values.companyName}
							error={formik.errors.companyName}
							onChange={formik.handleChange('companyName')}
						/>
					</Col>
					<Col class="col-md-12 col-12 mb-3">
						<InputMask
							id="cnpj"
							name="cnpj"
							placeholder="CNPJ"
							icon={'fa-id-card'}
							mask="99.999.999/9999-99"
							value={formik.values.cnpj}
							error={formik.errors.cnpj}
							onChange={formik.handleChange('cnpj')}
						/>
					</Col>
				</Row>
				<Row>
					<Col class="col-md-12 col-12 mb-3">
						<InputMask
							id="celPhone"
							name="celPhone"
							placeholder="Celular"
							icon={'fa-mobile-retro'}
							mask="(99) 99999-9999"
							value={formik.values.celPhone}
							error={formik.errors.celPhone}
							onChange={formik.handleChange('celPhone')}
						/>
					</Col>
				</Row>
				<div className="row">
					<div className="col-12">
						<Buttom submit disabled={btnNextDisabled} class="float-right">
							Continuar
						</Buttom>
					</div>
				</div>
			</form>
		</div>
	)
}

export default DataCompany
