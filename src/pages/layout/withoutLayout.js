import { Outlet, useNavigate } from 'react-router-dom'

// import { EmployeeContext } from '../../contexts'

export default function WithoutLayout() {
	const navigate = useNavigate()

	const pathname = window.location.pathname
	const { isLogged } = { isLogged: false } //useContext(EmployeeContext)

	if (!!isLogged && pathname === '/') {
		navigate('/dashboard')
	}

	return (
		<div className="container-fluid px-0">
			<Outlet />
		</div>
	)
}
