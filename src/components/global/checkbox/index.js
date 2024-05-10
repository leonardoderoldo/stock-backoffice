
const CheckBox = ({ id = Math.random(), label = '', checked = false, onChange = () => {}, ...props }) => {
	return (
		<div className="icheck-primary d-inline">
			<input type="checkbox" id={id} checked={checked} {...props} onClick={() => onChange(!checked)} />
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

export default CheckBox
