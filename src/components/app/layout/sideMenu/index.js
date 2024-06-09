import classNames from 'classnames'
import { useContext } from 'react'

import { colors, images, metrics } from '../../../../configs'
import { RootContext } from '../../../../contexts'

const SideMenu = ({ disableMenu = false }) => {
	const { menuItems, openMenu } = useContext(RootContext)

	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<div className="brand-link">
				<img src={images.logo} alt="" className="brand-image" />
				<span className="brand-text font-weight-light">STOCK DELIVERY</span>
			</div>
			{!disableMenu && (
				<div className="sidebar">
					{/* SERACH */}
					<div className="form-inline mt-3 pb-3 mb-3 d-flex">
						<div className="input-group" data-widget="sidebar-search">
							<input
								className="form-control form-control-sidebar"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<div className="input-group-append">
								<button className="btn btn-sidebar">
									<i className="fas fa-search fa-fw" />
								</button>
							</div>
						</div>
					</div>
					{/* MENU */}
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column  nav-child-indent"
							data-widget="treeview"
							role="menu"
							data-accordion="false"
						>
							{menuItems.map((e, i) => {
								return (
									<>
										{e.header && <ItemHeader key={`k_${i}`} item={e} />}
										{!e.header && (
											<MenuItem key={`k_${i}`} item={e} openMenu={(r) => openMenu(r)} />
										)}
									</>
								)
							})}
						</ul>
					</nav>
				</div>
			)}
		</aside>
	)
}

const ItemHeader = ({ item = { name: '' } }) => {
	return (
		<>
			<li
				className="nav-header"
				style={{ flex: 1, position: 'relative', justifyContent: 'center', alignItems: 'center' }}
			>
				<div
					style={{
						zIndex: -9999,
						position: 'absolute',
						width: '100%',
						marginTop: 12,
						borderWidth: 0,
						borderColor: colors.whiteAlpha80,
						borderTopWidth: 1,
						borderBlockStyle: 'solid'
					}}
				></div>
				<span style={{ backgroundColor: colors.primary, width: 'auto', paddingRight: metrics.paddingSmall }}>
					{item.name}
				</span>
			</li>
		</>
	)
}

const MenuItem = ({
	item = { name: '', opened: false, subItems: [], active: false, link: '', icon: '', widget: '' },
	openMenu = () => {}
}) => {
	return (
		<>
			<li
				className={classNames([
					'nav-item',
					{
						'menu-is-opening': item.opened,
						'menu-open': item.opened
					}
				])}
			>
				<a
					onClick={() => openMenu(item)}
					href={!!item.subItems && item.subItems?.length > 0 ? 'javascript:void(0)' : item.link}
					className={classNames([
						'nav-link',
						{
							active: item.active
						}
					])}
				>
					<i className={classNames(['nav-icon', item.icon])} />
					<p>
						{item.name}
						{!!item.widget && (
							<span className={`right mr-3 badge badge-${item.widget?.badge}`}>{item.widget?.text}</span>
						)}
					</p>
					{!!item.subItems && item.subItems?.length > 0 && <i className="right fas fa-angle-left" />}
				</a>

				<SubMenus parentLink={item.link} subItems={item.subItems} />
			</li>
		</>
	)
}

const SubMenus = ({ parentLink = {}, subItems = [] }) => {
	return (
		<>
			{!!subItems && subItems?.length > 0 && (
				<ul className="nav nav-treeview">
					{subItems?.map((se, si) => {
						return (
							<li key={`se_${si}`} className="nav-item">
								<a
									href={`${parentLink}${se.link}`}
									className={classNames([
										'nav-link',
										{
											active: se.active
										}
									])}
								>
									<i className={classNames(['nav-icon', se.icon])} />
									<p>{se.name}</p>
								</a>
							</li>
						)
					})}
				</ul>
			)}
		</>
	)
}

export default SideMenu
