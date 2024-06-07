import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'

import { Buttom, Col, InputText, Row, Select } from '../../../components/global'

import { metrics } from '../../../configs'
import { EmployeeContext, RestaurantContext } from '../../../contexts'
import { Banks } from '../../../domains'

import validacao from './validacao'

const AccountBankingRegister = () => {
	const navigate = useNavigate()

	const { registerAccountBanking } = useContext(RestaurantContext)
	const { getRedirectPage } = useContext(EmployeeContext)

	const [btnNextDisabled, setBtnNextDisabled] = useState(false)

	const formik = useFormik({
		validationSchema: validacao,
		initialValues: {},
		onSubmit: (values) => {
			registerAccountBanking(values).then(() => {
				getRedirectPage()
					.then((rResult) => {
						navigate(rResult.page.name)
					})
					.catch(() => {
						setBtnNextDisabled(false)
					})
			})
		}
	})

	return (
		<div>
			<p className="login-box-msg">INFORMAÇÕES BANCÁRIAS</p>
			<form onSubmit={formik.handleSubmit}>
				<Row>
					<Col class="col-md-12 mb-3">
						<Select
							label={'Banco'}
							placeholder="Selecione um banco"
							listEmptyText="Nenhuma banco encontrado"
							value={formik.values.bankCode}
							errorText={formik.errors.bankCode}
							style={{
								flex: 1,
								marginRight: metrics.marginSmall
							}}
							onChange={(selected) => {
								formik.setFieldValue('bankCode', selected)
							}}
							options={Banks}
						/>
					</Col>
				</Row>
				<Row>
					<Col class="col-md-5 mb-3">
						<InputText
							id="agency"
							name="agency"
							type="agency"
							maxlength="4"
							// icon={'fa-hashtag'}
							placeholder="Agencia"
							value={formik.values.agency}
							error={formik.errors.agency}
							onChange={formik.handleChange('agency')}
						/>
					</Col>
				</Row>
				<Row>
					<Col class="col-md-8 mb-3">
						<InputText
							id="accountNumber"
							name="accountNumber"
							type="accountNumber"
							maxlength="20"
							// icon={'fa-hashtag'}
							placeholder="Número da conta"
							value={formik.values.accountNumber}
							error={formik.errors.accountNumber}
							onChange={formik.handleChange('accountNumber')}
						/>
					</Col>
					<Col class="col-md-4 mb-3">
						<InputText
							id="verifyingDigit"
							name="verifyingDigit"
							type="verifyingDigit"
							maxlength="2"
							// icon={'fa-hashtag'}
							placeholder="Verificador"
							value={formik.values.verifyingDigit}
							error={formik.errors.verifyingDigit}
							onChange={formik.handleChange('verifyingDigit')}
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

export default AccountBankingRegister
