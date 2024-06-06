import classNames from 'classnames'

const Col = ({ ...props }) => {
	return <div {...props} style={{ ...props.style }} className={classNames(['col', props.class, props.className])} />
}

export default Col
