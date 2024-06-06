import { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Content, Footer, Header, SideMenu } from '../../components/app'

import { EmployeeContext } from '../../contexts'

const SecureDefaultLayout = () => {
	const navigate = useNavigate()
	const { isLogged, nextSteps, getRedirectPage } = useContext(EmployeeContext)

	const [disableMenu, setDisableMenu] = useState(false)

	useEffect(() => {
		if (nextSteps && nextSteps.length > 0) {
			setDisableMenu(nextSteps.length > 0)
			getRedirectPage().then((result) => {
				const page = result.page
				navigate(page?.name)
			})
		}
	}, [nextSteps])

	useEffect(() => {
		if (isLogged !== null && isLogged !== undefined && !isLogged) {
			navigate('/')
		}
	}, [isLogged])

	return (
		<>
			<Header disableMenu={disableMenu} />
			<SideMenu disableMenu={disableMenu} />
			<Content />
			<Footer />
		</>
	)
}

export default SecureDefaultLayout
