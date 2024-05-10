import { createContext, useEffect, useState } from 'react'

import { Spinner } from '../components/global'
import { MENU_ITEMS } from '../configs/layout'

const RootContext = createContext({
	menuItems: [],
	currentMenu: null,
	openMenu: () => {},
	setIsLoading: () => {}
})

export const RootProvider = ({ children }) => {
	const pathname = window.location.pathname

	const [menuItems, setMenuItems] = useState(MENU_ITEMS)
	const [currentMenu, setCurrentMenu] = useState()
	const [showSpinner, setShowSpinner] = useState()

	const setIsLoading = (toogle) => {
		setShowSpinner(toogle)
	}

	const loadMenu = (item = null) => {
		const newMenuItems = MENU_ITEMS.map((i) => {
			const isSelected = pathname === i.link
			i.active = isSelected
			i.opened = i === item && !!i.opened === false ? true : false
			if (!!i.subItems && i.subItems.length > 0) {
				i.subItems = i.subItems.map((s) => {
					const link = i.link + s.link
					const smIsSelected = link === pathname
					// s.active = !item ? false : smIsSelected
					s.active = smIsSelected
					return s
				})
				const hasSubSelected = !!i.subItems.filter((f) => !!f.active)[0]
				if (!i.opened && !item) i.opened = hasSubSelected
			}
			if (isSelected) setCurrentMenu(i)
			return i
		})
		setMenuItems(newMenuItems)
	}

	const openMenu = (item) => {
		loadMenu(item)
	}

	useEffect(() => {
		loadMenu()
	}, [])

	return (
		<RootContext.Provider
			value={{
				menuItems,
				currentMenu,
				openMenu,
				setIsLoading
			}}
		>
			{children}
			<Spinner show={showSpinner} />
		</RootContext.Provider>
	)
}

export default RootContext
