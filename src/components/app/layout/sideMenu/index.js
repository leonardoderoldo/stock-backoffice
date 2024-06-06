import classNames from 'classnames'
import { useContext } from 'react'

import { images } from '../../../../configs'
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
									<li
										key={`li_${i}`}
										className={classNames([
											'nav-item',
											{
												'menu-is-opening': e.opened,
												'menu-open': e.opened
											}
										])}
									>
										<a
											onClick={() => openMenu(e)}
											href={
												!!e.subItems && e.subItems?.length > 0 ? 'javascript:void(0)' : e.link
											}
											className={classNames([
												'nav-link',
												{
													active: e.active
												}
											])}
										>
											<i className={classNames(['nav-icon', e.icon])} />
											<p>
												{e.name}
												{!!e.widget && (
													<span className={`right badge badge-${e.widget?.badge}`}>
														{e.widget?.text}
													</span>
												)}
											</p>
											{!!e.subItems && e.subItems?.length > 0 && (
												<i className="right fas fa-angle-left" />
											)}
										</a>
										{!!e.subItems && e.subItems?.length > 0 && (
											<ul className="nav nav-treeview">
												{e.subItems?.map((se, si) => {
													return (
														<li key={`se_${si}`} className="nav-item">
															<a
																href={`${e.link}${se.link}`}
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
									</li>
								)
							})}
						</ul>
					</nav>
				</div>
			)}
		</aside>
	)
}

export default SideMenu
