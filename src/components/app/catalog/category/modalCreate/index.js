import { useEffect, useState } from 'react'
import { useFormik } from 'formik'

import { Modal } from '../../../../global'

import validacao from './validacao'

const ModalCategoryCreate = ({ show = false, onClose = () => {} }) => {
	const [modalShow, setModalShow] = useState(show)

	const close = () => {
		formik.resetForm()
		onClose()
	}

	const formik = useFormik({
		validationSchema: validacao,
		initialValues: {},
		onSubmit: (values) => {
			console.log('values', values)
			// if (!values.meals || values.meals.length < 1) {
			// 	toast.warning('É necessário criar ao menos uma refeição')
			// 	return
			// }
			// if (!values.meals.filter((f) => f.items.length > 0).length < 0) {
			// 	toast.warning('As refeições devem ter ao menos um item')
			// 	return
			// }
			// createMenu(values).then(() => {
			// 	close()
			// })
		}
	})

	useEffect(() => {
		setModalShow(show)
	}, [show])

	if (!show) return <></>

	return (
		<Modal title="Nova categoria" size="xl" show={modalShow} onClose={() => close()}>
			<form onSubmit={formik.handleSubmit}>
				<div className="modal-body pb-0">Content...</div>
			</form>
		</Modal>
	)
}

export default ModalCategoryCreate
