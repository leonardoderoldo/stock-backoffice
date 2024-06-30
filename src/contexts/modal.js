import { createContext, useState } from 'react'

import { ModalCategoryCreate, ModalProductCreate } from '../components/app'

const ModalContext = createContext({
	openCatalogCreate: () => {},
	openCategoryCreate: () => {}
})

export const ModalProvider = ({ children }) => {
	//####################################################################################
	//################ STATE #############################################################
	//####################################################################################
	//####################################################################################

	const [currentCatalogId, setCurrentCatalogId] = useState()
	const [currentCategoryId, setCurrentCategoryId] = useState()

	//####################################################################################
	//################ ACTIONS ###########################################################
	//####################################################################################
	//####################################################################################
	const [showCatalogCreate, setShowCatalogCreate] = useState(false)
	const [showCategoryCreate, setShowCategoryCreate] = useState(false)

	const openCatalogCreate = (catalogId) => {
		setCurrentCatalogId(catalogId)
		setShowCatalogCreate(true)
	}

	const openCategoryCreate = (categoryId) => {
		setCurrentCategoryId(categoryId)
		setShowCategoryCreate(true)
	}

	return (
		<>
			<ModalContext.Provider
				value={{
					openCatalogCreate,
					openCategoryCreate
				}}
			>
				<ModalCategoryCreate
					catalogId={currentCatalogId}
					show={showCatalogCreate}
					onClose={() => setShowCatalogCreate(false)}
				/>
				<ModalProductCreate
					categoryId={currentCategoryId}
					show={showCategoryCreate}
					onClose={() => setShowCategoryCreate(false)}
				/>
				{children}
			</ModalContext.Provider>
		</>
	)
}

export default ModalContext
