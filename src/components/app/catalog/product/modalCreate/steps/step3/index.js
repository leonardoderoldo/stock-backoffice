import { Col, InputMoney, Row } from '../../../../../../global'

export default function Step3({ formik = {} }) {
	return (
		<>
			<Row className="p-4 pt-4 pb-4">
				<Col className="col-xl-6">
					<Row>
						<Col className="col-xl-6">
							<InputMoney
								id="price"
								name="price"
								prefix="R$ "
								// iconType={'fal'}
								// icon={'fa-percent'}
								placeholder="Valor do produto"
								value={formik.values.price}
								error={formik.errors.price}
								onChange={formik.handleChange('price')}
							/>
						</Col>
					</Row>
					<Row className="pt-5">
						<Col>
							<h5>Desconto direto no item</h5>
						</Col>
					</Row>
					<Row>
						<Col className="col-xl-6">
							Preço com desconto
							<InputMoney
								id="discount_price"
								name="discount_price"
								prefix="R$ "
								placeholder="Preço com desconto"
								value={formik.values.discount_price}
								error={formik.errors.discount_price}
								onChange={formik.handleChange('discount_price')}
							/>
						</Col>
						<Col className="col-xl-6">
							Desconto em %
							<InputMoney
								id="discount_percentage"
								name="discount_percentage"
								iconType={'fal'}
								icon={'fa-percent'}
								placeholder="Desconto em %"
								value={formik.values.discount_percentage}
								error={formik.errors.discount_percentage}
								onChange={formik.handleChange('discount_percentage')}
							/>
						</Col>
					</Row>
				</Col>
				<Col className="col-xl-6">
					<Row className="">
						<Col>
							<h3>Estoque</h3>
						</Col>
					</Row>
					<Row className="">
						<Col>
							<input type="checkbox" name="my-checkbox" checked data-bootstrap-switch />
						</Col>
					</Row>
					<Row>
						<Col className="col-xl-6">
							Preço com desconto
							<InputMoney
								id="discount_price"
								name="discount_price"
								prefix="R$ "
								placeholder="Preço com desconto"
								value={formik.values.discount_price}
								error={formik.errors.discount_price}
								onChange={formik.handleChange('discount_price')}
							/>
						</Col>
						<Col className="col-xl-6">
							Desconto em %
							<InputMoney
								id="discount_percentage"
								name="discount_percentage"
								iconType={'fal'}
								icon={'fa-percent'}
								placeholder="Desconto em %"
								value={formik.values.discount_percentage}
								error={formik.errors.discount_percentage}
								onChange={formik.handleChange('discount_percentage')}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}
