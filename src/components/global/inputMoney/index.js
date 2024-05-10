import classNames from 'classnames'
import { NumericFormat } from 'react-number-format'
import { colors } from '../../../configs'

const InputMoney = ({
	id,
	name,
	prefix = '',
	disabled = false,
	iconType = 'fas',
	icon,
	error,
	value,
	decimalScale = 2,
	onChange = () => {},
	...res
}) => {
	const rand = Math.floor(Math.random())

	return (
		<>
			<div className="input-group d-flex flex-nowrap">
				{!!icon && (
					<div className="input-group-prepend" data-target={`#${rand}`}>
						<div className="input-group-text">
							<span className={classNames([iconType, icon])} />
						</div>
					</div>
				)}
				<NumericFormat
					id={id}
					name={name}
					displayType={'input'}
					thousandSeparator={'.'}
					decimalSeparator=","
					allowedDecimalSeparators={[',']}
					prefix={prefix}
					value={value}
					fixedDecimalScale
					decimalScale={decimalScale}
					disabled={disabled}
					{...res}
					onValueChange={(val) => onChange(val.formattedValue)}
					className={classNames('form-control', res.class, res.className)}
				/>
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

export default InputMoney
