import classNames from 'classnames'

const Row = ({ ...props }) => {
	return (
		<>
			<div {...props} className={classNames(['row', props.className, props.class])}>
				{props.children}
			</div>
		</>
	)
}

export default Row
