import { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'

import { Buttom, Modal } from '../../../../global'
import Pagination from '../../../pagination'
import { RestaurantContext } from '../../../../../contexts'

import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'

import validacao from './validacao'

const STEPS = [
	{
		order: 1,
		title: 'Step 01',
		component: (formik) => <Step1 formik={formik} />
	},
	{
		order: 1,
		title: 'Step 02',
		component: (formik) => <Step2 formik={formik} />
	},
	{
		order: 1,
		title: 'Step 03',
		component: (formik) => <Step3 formik={formik} />
	}
]

export default function ModalProductCreate({ show = false, categoryId, onChange = () => {}, onClose = () => {} }) {
	const [modalShow, setModalShow] = useState(show)
	const [currentStep, setCurrentStep] = useState(1)

	const { createProduct } = useContext(RestaurantContext)

	const close = () => {
		formik.resetForm()
		onClose()
	}

	const change = () => {
		onChange()
	}

	const formik = useFormik({
		validationSchema: validacao(currentStep),
		initialValues: {
			serving: 'NOT_APPLICABLE'
		},
		onSubmit: (values) => {
			if (currentStep < STEPS.length) {
				nextStep()
				return
			}
			if (!formik.isValid) return

			createProduct(categoryId, values).then(() => {
				change()
				close()
			})
		}
	})

	const nextStep = () => {
		if (!formik.isValid) return
		if (currentStep < STEPS.length) setCurrentStep(currentStep + 1)
	}

	const backStep = () => {
		if (currentStep > 1) setCurrentStep(currentStep - 1)
	}

	useEffect(() => {
		if (categoryId) {
			formik.setFieldValue('categoryId', categoryId)
		}
	}, [categoryId])

	useEffect(() => {
		if (show) {
			setCurrentStep(1)
			setModalShow(show)
		}
	}, [show])

	// Verify modal is show
	if (!show && !categoryId) return <></>

	return (
		<Modal title="Novo Produto" size="xl" show={modalShow} onClose={() => close()}>
			<form onSubmit={formik.handleSubmit}>
				<div className="modal-body pb-0 pt-0">{STEPS[currentStep - 1]?.component(formik)}</div>
				<div className="modal-footer justify-content-between">
					<div className="d-flex flex-row">
						<Buttom
							type="button"
							class="float-left btn-default"
							color=""
							onClick={() => {
								close()
							}}
						>
							Fechar
						</Buttom>
						{currentStep > 1 && (
							<Buttom onClick={() => backStep()} class="ml-2">
								Voltar
							</Buttom>
						)}
					</div>
					<Pagination stepsSize={STEPS.length} step={currentStep} />
					<div className="d-flex flex-row">
						{currentStep < STEPS.length && (
							<Buttom submit disabled={currentStep === STEPS.length} class="float-right">
								Próximo
							</Buttom>
						)}
						<Buttom submit disabled={!formik.isValid} class="ml-2">
							Salvar
						</Buttom>
					</div>
				</div>
			</form>
		</Modal>
	)
}
