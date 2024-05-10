import classNames from 'classnames'

import { colors } from '../../../configs'

const TextArea = ({
	type = 'text',
	id,
	name,
	disabled = false,
	rows = 3,
	error,
	value,
	onChange = () => {},
	...props
}) => {
	return (
		<>
			<textarea
				id={id}
				name={name}
				type={type}
				rows={rows}
				disabled={disabled}
				onChange={onChange}
				value={value}
				className={classNames('form-control', props.class, props.className)}
				style="height: 94px;"
				{...props}
			/>
			{error && !disabled ? (
				<div
					style={{
						fontSize: 14,
						color: colors.error,
						paddingHorizontal: 4,
						paddingTop: 4
					}}
				>
					{error}
				</div>
			) : null}
		</>
	)
}

export default TextArea
