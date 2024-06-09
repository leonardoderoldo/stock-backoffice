import { useEffect } from 'react'
import classNames from 'classnames'

const ContentDefault = ({ title = '', breads = '', full = false, colapsedMenu = false, ...props }) => {
	useEffect(() => {
		if (colapsedMenu) {
			setTimeout(() => {
				window.toogleMenu()
			}, 100)
		}
	}, [])

	return (
		<div
			className={classNames([
				'content-wrapper',
				{
					kanban: full
				}
			])}
		>
			<section className="content-header">
				<div className="container-fluid">
					<div className="row mb-2">
						<div className="col-sm-6 pl-3">
							<h1>{title}</h1>
						</div>
						<div className="col-sm-6">
							<ol className="breadcrumb float-sm-right">{breads}</ol>
						</div>
					</div>
				</div>
			</section>
			<section className="content pl-4 pr-4 pb-3">{props.children}</section>
		</div>
	)
}

export default ContentDefault
