import classNames from 'classnames'
import InputMask from 'react-input-mask'
import { colors } from '../../../configs'

const cInputMask = ({
	mask,
	value,
	error,
	disabled = false,
	iconType = 'fas',
	icon,
	preIcon,
	onChange = () => {},
	...res
}) => {
	const rand = Math.floor(Math.random())
	return (
		<>
			<div className="input-group date" data-target-input="nearest">
				{!!preIcon && (
					<div className="input-group-prepend">
						<span className="input-group-text">
							<span className={classNames([iconType, preIcon])} />
						</span>
					</div>
				)}
				<InputMask
					mask={mask}
					class="form-control"
					value={value}
					disabled={disabled}
					onChange={onChange}
					data-target={`#${rand}`}
					{...res}
				/>
				{!!icon && (
					<div className="input-group-append" data-target={`#${rand}`}>
						<div className="input-group-text">
							<span className={classNames([iconType, icon])} />
						</div>
					</div>
				)}
			</div>
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

export default cInputMask
