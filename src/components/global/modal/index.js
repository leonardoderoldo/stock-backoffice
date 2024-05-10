import Modal from 'react-bootstrap/Modal'
import { useEffect, useState } from 'react'

const CModal = ({
	title = '',
	show = false,
	size = 'lg', //sm, md, lg, xl
	scrollable = true,
	backdrop = true,
	onClose = () => {},
	...props
}) => {
	const [showw, setShow] = useState(show)

	const close = () => {
		onClose()
		setShow(false)
	}

	useEffect(() => {
		setShow(show)
	}, [show])

	return (
		<Modal
			className="modal fade"
			show={showw}
			size={size}
			centered
			animation
			backdrop={backdrop}
			scrollable={scrollable}
			onHide={close}
			{...props}
		>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			{props.children}
		</Modal>
	)
}

export default CModal
