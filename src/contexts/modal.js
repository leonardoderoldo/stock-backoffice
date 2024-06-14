import { createContext, useState } from 'react'

import { ModalCategoryCreate } from '../components/app'

const ModalContext = createContext({
	openMenuCreate: () => {}
})

export const ModalProvider = ({ children }) => {
	//####################################################################################
	//################ STATE #############################################################
	//####################################################################################
	//####################################################################################

	const [currentCatalogId, setCurrentCatalogId] = useState()

	//####################################################################################
	//################ ACTIONS ###########################################################
	//####################################################################################
	//####################################################################################
	const [showMenuCreate, setShowMenuCreate] = useState(false)

	const openMenuCreate = (catalogId) => {
		setCurrentCatalogId(catalogId)
		setShowMenuCreate(true)
	}

	return (
		<>
			<ModalContext.Provider
				value={{
					openMenuCreate
				}}
			>
				<ModalCategoryCreate
					catalogId={currentCatalogId}
					show={showMenuCreate}
					onClose={() => setShowMenuCreate(false)}
				/>
				{children}
			</ModalContext.Provider>
		</>
	)
}

export default ModalContext
