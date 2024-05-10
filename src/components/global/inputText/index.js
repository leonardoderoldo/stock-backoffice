import classNames from 'classnames'
import { colors } from '../../../configs'

const InputText = ({
	type = 'text',
	id,
	name,
	disabled = false,
	icon,
	error,
	value,
	onChange = () => {},
	...res
}) => {
	const rand = Math.floor(Math.random())
	return (
		<>
			<div className="input-group">
				<input
					id={id}
					name={name}
					type={type}
					disabled={disabled}
					onChange={onChange}
					value={value}
					{...res}
					className={classNames('form-control', res.class, res.className)}
					data-target={`#${rand}`}
				/>

				{!!icon && (
					<div
						className="input-group-append"
						data-target={`#${rand}`}
						data-toggle="datetimepicker"
					>
						<div className="input-group-text">
							<span className={classNames(['fas', icon])} />
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

export default InputText
