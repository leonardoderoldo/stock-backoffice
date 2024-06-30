import classNames from 'classnames'

const CheckBox = ({ id = Math.random(), label = '', checked = false, onChange = () => {}, ...props }) => {
	return (
		<div {...props} className={classNames(['icheck-primary d-inline', props.class, props.className])}>
			<input type="checkbox" id={id} checked={checked} {...props} onClick={() => onChange(!checked)} />
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

export default CheckBox
