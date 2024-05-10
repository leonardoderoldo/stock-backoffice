import { forwardRef } from 'react'
import classNames from 'classnames'
import ReactDatePicker from 'react-datepicker'

import br from 'date-fns/locale/pt-BR'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import 'react-datepicker/dist/react-datepicker.css'

import { colors } from '../../../configs'
import Buttom from '../buttom'

const ExampleCustomInput = forwardRef(({ value, onClick, ...props }, ref) => {
	return (
		<div className="input-group d-flex flex-row flex-nowrap">
			<input
				className={'form-control'}
				ref={ref}
				value={value}
				placeholder={props.placeholderText}
				{...props}
			/>
			<div className="input-group-append border border-grey rounded-end">
				<Buttom
					className="input-group-text rounded-0 rounded-end"
					onClick={() => onClick()}
					style={{
						border: 0
					}}
				>
					<span className={classNames(['fal', 'fa-calendar-days'])} />
				</Buttom>
			</div>
		</div>
	)
})
ExampleCustomInput.displayName = 'MyComponent'

const DataPicker = ({
	startDate,
	minDate,
	placeholder,
	errorText,
	showTimeSelect = false,
	dateFormat = 'dd/MM/yyyy',
	onChange = () => {},
	...props
}) => {
	const rand = Math.floor(Math.random())

	return (
		<>
			<ReactDatePicker
				{...props}
				locale={br}
				minDate={minDate}
				dateFormat={dateFormat}
				selected={startDate}
				showTimeSelect={showTimeSelect}
				className={classNames('form-control', props.class, props.className)}
				onChange={(date) => onChange(date)}
				data-target={`#${rand}`}
				placeholderText={placeholder}
				style={{
					borderLeft: 0
				}}
				customInput={<ExampleCustomInput {...props} />}
			/>
			{errorText ? (
				<div
					style={{
						fontSize: 14,
						color: colors.error,
						paddingHorizontal: 4,
						paddingTop: 4
					}}
				>
					{errorText}
				</div>
			) : null}
		</>
	)
}

export default DataPicker
