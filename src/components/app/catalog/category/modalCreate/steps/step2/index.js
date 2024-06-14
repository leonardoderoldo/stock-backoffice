import { Col, InputText, Row } from '../../../../../../global'

export default function Step2({ formik = {} }) {
	return (
		<>
			<Row>
				<Col class="pt-5 pb-5">
					<Row>
						<Col class="col-md-12 col-sm-12 mb-3">
							<InputText
								id="name"
								name="name"
								placeholder="Nome da categoria"
								value={formik.values.name}
								error={formik.errors.name}
								onChange={formik.handleChange('name')}
							/>
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}
