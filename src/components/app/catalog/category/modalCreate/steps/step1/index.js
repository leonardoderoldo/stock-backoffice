import { Buttom, Col, Row } from '../../../../../../global'

export default function Step1({ formik = {} }) {
	return (
		<>
			<Row>
				<Col className="col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6 p-5">
					<Buttom
						block
						outline={formik.values.template !== 'DEFAULT'}
						style={{
							height: 210
						}}
						onClick={() => {
							formik.setFieldValue('template', 'DEFAULT').then(() => {
								formik.handleSubmit()
							})
						}}
					>
						<div className="pv-3 d-flex flex-column justify-content-center align-items-center">
							<i
								className="fal fa-burger-fries"
								style={{
									fontSize: '4rem'
								}}
							/>
							<h6 className="pt-3 font-weight-bold">Itens Principais</h6>
							<smal>Defina nome e descrição para categorias de marmitas, lanches, sobremesas, etc.</smal>
						</div>
					</Buttom>
				</Col>
				<Col className="col-6 col-md-6 col-sm-6 col-lg-6 col-xl-6 p-5">
					<Buttom
						block
						outline={formik.values.template !== 'PIZZA'}
						style={{
							height: 210
						}}
						onClick={() => {
							formik.setFieldValue('template', 'PIZZA').then(() => {
								formik.handleSubmit()
							})
						}}
					>
						<div className="d-flex flex-column justify-content-center align-items-center">
							<i
								className="fal fa-pizza-slice"
								style={{
									fontSize: '4rem'
								}}
							/>
							<h6 className="pt-3 font-weight-bold">Pizza</h6>
							<smal>Defina tamanhos, tipos de massa, bordes e sabores.</smal>
						</div>
					</Buttom>
				</Col>
			</Row>
			<Row>
				<Col>
					<p className="text-danger text-center">{formik.errors.template}</p>
				</Col>
			</Row>
		</>
	)
}
