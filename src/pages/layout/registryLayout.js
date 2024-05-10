import { useContext, useEffect } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { EmployeeContext } from '../../contexts'

const RegistrytLayout = () => {
	const navigate = useNavigate()
	const { isLogged } = useContext(EmployeeContext)

	useEffect(() => {
		if (isLogged !== null && isLogged !== undefined && !isLogged) {
			navigate('/')
		}
	}, [isLogged])

	return (
		<div className="container-fluid px-0">
			<Outlet />
		</div>
	)
}

export default RegistrytLayout
