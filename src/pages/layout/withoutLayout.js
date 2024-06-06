import { Outlet, useNavigate } from 'react-router-dom'

import { EmployeeContext } from '../../contexts'
import { useContext } from 'react'

export default function WithoutLayout() {
	const navigate = useNavigate()

	const pathname = window.location.pathname
	const { isLogged } = useContext(EmployeeContext)

	if (!!isLogged && pathname === '/') {
		navigate('/dashboard')
	}

	return (
		<div className="container-fluid px-0">
			<Outlet />
		</div>
	)
}
