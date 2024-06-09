import classNames from 'classnames'

const Card = ({ header, tools, footer, ...props }) => {
	return (
		<>
			<div className={classNames(['card', props.className])}>
				{(header || tools) && (
					<div className="card-header">
						{header && <div className="card-title mb-0">{header}</div>}
						{tools && <div className="card-tools mb-2 ">{tools}</div>}
					</div>
				)}
				<div className="card-body table-responsive p-0">{props.children}</div>
				{footer && <div className="card-footer">{footer}</div>}
			</div>
		</>
	)
}

export default Card
