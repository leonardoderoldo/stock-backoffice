import { createContext, useState } from 'react'

import { ModalCategoryCreate } from '../components/app'

const ModalContext = createContext({
	openMenuCreate: () => {}
})

export const ModalProvider = ({ children }) => {
	//####################################################################################
	//################ ACTIONS ###########################################################
	//####################################################################################
	//####################################################################################
	const [showMenuCreate, setShowMenuCreate] = useState(false)

	const openMenuCreate = () => {
		setShowMenuCreate(true)
	}

	return (
		<>
			<ModalContext.Provider
				value={{
					openMenuCreate
				}}
			>
				<ModalCategoryCreate show={showMenuCreate} onClose={() => setShowMenuCreate(false)} />
				{children}
			</ModalContext.Provider>
		</>
	)
}

export default ModalContext
