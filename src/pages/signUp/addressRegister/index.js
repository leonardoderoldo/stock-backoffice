import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router'

import { Buttom, Col, InputMask, InputText, Row, Select } from '../../../components/global'

import { toast } from 'react-hot-toast'
import { metrics } from '../../../configs'
import { EmployeeContext, RestaurantContext } from '../../../contexts'
import { GeneralServices } from '../../../services'
import validacao from './validacao'

const AddressRegister = () => {
	const navigate = useNavigate()

	const { registerAddress } = useContext(RestaurantContext)
	const { getRedirectPage } = useContext(EmployeeContext)

	const [btnNextDisabled, setBtnNextDisabled] = useState(false)
	const [enderecoDisabilitado, setEnderecoDisabilitado] = useState(true)

	const formik = useFormik({
		validationSchema: validacao,
		initialValues: {},
		onSubmit: (values) => {
			registerAddress({
				name: 'principal',
				street: values.street,
				number: values.number,
				cep: values.postalCode,
				neiborhood: values.neighborhood,
				state: values.state,
				city: values.city
			}).then(() => {
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
			<p className="login-box-msg">Informações do endereço</p>
			<form onSubmit={formik.handleSubmit}>
				<Row>
					<Col class="col-md-12 mb-3">
						<InputMask
							id="postalCode"
							name="postalCode"
							placeholder="CEP"
							icon={'fa-location-crosshairs'}
							mask="99999-999"
							value={formik.values.postalCode}
							error={formik.errors.postalCode}
							onChange={async (e) => {
								const value = e.target.value
								const cep = value ? value.split('-').join('').split('_').join('') : ''
								formik.setFieldValue('postalCode', cep)
								setEnderecoDisabilitado(true)
								if (cep.length >= 8) {
									try {
										let response = await GeneralServices.buscaCEP(cep)
										formik.setFieldValue('street', response.logradouro)
										formik.setFieldValue('neighborhood', response.bairro)
										formik.setFieldValue('state', response.uf)
										formik.setFieldValue('city', response.localidade)
									} catch (err) {
										toast.error(err)
										setEnderecoDisabilitado(false)
										formik.setFieldValue('street', null)
										formik.setFieldValue('neighborhood', null)
										formik.setFieldValue('state', null)
										formik.setFieldValue('city', null)
									}
								}
							}}
						/>
					</Col>
					<Col class="col-md-12 mb-3">
						<InputText
							id="street"
							name="street"
							type="street"
							disabled={enderecoDisabilitado}
							icon={'fa-map-location'}
							placeholder="Endereço"
							value={formik.values.street}
							error={formik.errors.street}
							onChange={formik.handleChange('street')}
						/>
					</Col>
					<Col class="col-md-8 mb-3">
						<InputText
							id="number"
							name="number"
							type="number"
							icon={'fa-hashtag'}
							placeholder="Número"
							value={formik.values.number}
							error={formik.errors.number}
							onChange={formik.handleChange('number')}
						/>
					</Col>
				</Row>
				<Row>
					<Col class="col-md-12 mb-3">
						<InputText
							id="neighborhood"
							name="neighborhood"
							type="neighborhood"
							icon={'fa-building'}
							disabled={enderecoDisabilitado}
							placeholder="Bairro"
							value={formik.values.neighborhood}
							error={formik.errors.neighborhood}
							onChange={formik.handleChange('neighborhood')}
						/>
					</Col>
					<Col class="col-md-12 mb-3">
						<Select
							label={'Estado'}
							placeholder="Selecione um estado"
							listEmptyText="Nenhuma estado encontrado"
							disabled={enderecoDisabilitado}
							value={formik.values.state}
							errorText={formik.errors.state}
							style={{
								flex: 1,
								marginRight: metrics.marginSmall
							}}
							onChange={(selected) => {
								formik.setFieldValue('state', selected)
							}}
							options={[
								{ item: 'São Paulo', id: 'SP' },
								{ item: 'Acre', id: 'AC' },
								{ item: 'Alagoas', id: 'AL' },
								{ item: 'Amapá', id: 'AP' },
								{ item: 'Amazonas', id: 'AM' },
								{ item: 'Bahia', id: 'BA' },
								{ item: 'Ceará', id: 'CE' },
								{ item: 'Distrito Federal', id: 'DF' },
								{ item: 'Espírito Santo', id: 'ES' },
								{ item: 'Goiás', id: 'GO' },
								{ item: 'Maranhão', id: 'MA' },
								{ item: 'Mato Grosso', id: 'MT' },
								{ item: 'Mato Grosso do Sul', id: 'MS' },
								{ item: 'Minas Gerais', id: 'MG' },
								{ item: 'Pará', id: 'PA' },
								{ item: 'Paraíba', id: 'PB' },
								{ item: 'Paraná', id: 'PR' },
								{ item: 'Pernambuco', id: 'PE' },
								{ item: 'Piauí', id: 'PI' },
								{ item: 'Rio de Janeiro', id: 'RJ' },
								{ item: 'Rio Grande do Norte', id: 'RN' },
								{ item: 'Rio Grande do Sul', id: 'RS' },
								{ item: 'Rondônia', id: 'RO' },
								{ item: 'Roraima', id: 'RR' },
								{ item: 'Santa Catarina', id: 'SC' },
								{ item: 'Sergipe', id: 'SE' },
								{ item: 'Tocantins', id: 'TO' }
							]}
						/>
					</Col>
					<Col class="col-md-12 mb-3">
						<InputText
							id="complement"
							name="complement"
							type="complement"
							placeholder="Complemento"
							value={formik.values.complement}
							error={formik.errors.complement}
							onChange={formik.handleChange('complement')}
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

export default AddressRegister
