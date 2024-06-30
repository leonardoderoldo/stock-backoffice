import { colors } from '../../../../../../../configs'
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
							<h6 className="pt-3 font-weight-bold">Preparados</h6>
							<smal>Itens produzidos pela sua loja, como marmitas, bolos e lanches.</smal>
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
								className="fal fa-barcode-read"
								style={{
									fontSize: '4rem'
								}}
							/>
							<h6 className="pt-3 font-weight-bold">Industrializado</h6>
							<smal>Itens prontos, como refrigerantes, chicletes e outros.</smal>
							<smal style={{ fontSize: '.7rem', color: colors.ascendent }}>
								Adicione itens industrializados ao cardápio e participe de campanhas de marketing.
							</smal>
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
