import { useCallback, useContext } from 'react'
import { useDropzone } from 'react-dropzone'

import { metrics } from '../../../../../../../configs'
import { RestaurantContext } from '../../../../../../../contexts'
import { ProductServingEnum } from '../../../../../../../domains'
import { toBase64 } from '../../../../../../../utils'
import { Buttom, CheckBox, Col, ImageRender, InputText, Row, Select, TextArea } from '../../../../../../global'

export default function Step2({ formik = {} }) {
	const { catalog } = useContext(RestaurantContext)

	const onDrop = useCallback(async (acceptedFiles) => {
		acceptedFiles.forEach((file) => {
			toBase64(file).then((result) => {
				const spltImg = result.split(',')
				const preview = URL.createObjectURL(file)
				formik.setFieldValue('imageUrl', preview)
				formik.setFieldValue('image', {
					base64: spltImg[1],
					contentType: file.type
				})
			})
		})
	}, [])
	const { open } = useDropzone({ onDrop })

	return (
		<>
			<Row class="pt-4 pb-4">
				<Col class="col-md-5 d-flex justify-content-center">
					<ImageRender
						src={formik.values?.imageUrl}
						class="img-fluid"
						width={400}
						height={256}
						childrenClass={'pb-4 d-flex justify-content-center align-items-end'}
					>
						<Buttom onClick={() => open()}>
							<i className="fal fa-camera pr-1" /> Selecione uma foto
						</Buttom>
					</ImageRender>
				</Col>
				<Col class="col-md-7">
					<Row>
						<Col class="col-md-12 col-sm-12 mb-3">
							<Select
								label={'Categoria'}
								placeholder="Selecione uma categoria"
								listEmptyText="Nenhuma categoria encontrada"
								value={formik.values.categoryId}
								errorText={formik.errors.categoryId}
								style={{
									flex: 1,
									marginRight: metrics.marginSmall
								}}
								onChange={(selected) => {
									formik.setFieldValue('categoryId', selected)
								}}
								options={catalog?.categories?.map((e) => ({
									id: e.externalId,
									item: e.name
								}))}
							/>
						</Col>
					</Row>
					<Row>
						<Col class="col-md-12 col-sm-12 mb-3">
							<InputText
								id="name"
								name="name"
								minLength="3"
								maxLength="30"
								placeholder="Nome do item"
								value={formik.values.name}
								error={formik.errors.name}
								onChange={formik.handleChange('name')}
							/>
						</Col>
					</Row>
					<Row>
						<Col class="col-md-12 col-sm-12 mb-3">
							<TextArea
								id="description"
								name="description"
								multiline={true}
								numberOfLines={10}
								placeholder="Digite o conteúdo do comunicado"
								value={formik.values.description}
								error={formik.errors.description}
								style={{ minHeight: 130 }}
								onChange={formik.handleChange('description')}
							/>
						</Col>
					</Row>
					<Row>
						<Col class="col-md-12 col-sm-12 mb-3 pt-3 d-flex justify-content-between">
							{Object.entries(ProductServingEnum).map((e, i) => {
								const data = e[1]

								return (
									<Serving
										key={`__${i}`}
										title={data.name}
										checked={formik.values.serving === data.enum}
										onClick={() => formik.setFieldValue('serving', data.enum)}
									/>
								)
							})}
						</Col>
					</Row>
				</Col>
			</Row>
		</>
	)
}

function Serving({ title = '', checked = false, onClick = () => {} }) {
	return (
		<>
			<Buttom
				outline={!checked}
				className="border border-info rounded-lg"
				style={{ height: 120, width: 100 }}
				onClick={() => onClick()}
			>
				<div className="d-flex flex-column justify-content-end align-items-center">
					<>
						<CheckBox
							// label={'Enviar para todos'}
							checked={checked}
							className={'ml-2 mb-4'}
							// onChange={(val) => formik.setFieldValue('forAll', val)}
						/>
					</>
					<small>{title}</small>
				</div>
			</Buttom>
		</>
	)
}
