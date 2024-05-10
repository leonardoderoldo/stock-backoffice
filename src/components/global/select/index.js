import Select from 'react-select'
import makeAnimated from 'react-select/animated'

import { colors, metrics } from '../../../configs'

const Celect = ({
	label = 'Selecione',
	emptyLabel = 'Nenhum item encontrado',
	errorText,
	disabled = false,
	multiple = false,
	onChange = () => {},
	options = [],
	...props
}) => {
	const animatedComponents = makeAnimated()

	const localOptions = options.map((e) => ({
		value: e.id,
		label: e.item
	}))

	Array.isArray()
	const currentValue = localOptions.filter((f) =>
		Array.isArray(props.value) ? props.value?.includes(f.value) : props.value === f.value
	)

	const colourStyles = {
		control: (styles) => ({ ...styles, backgroundColor: 'white' }),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				zIndex: 9999,
				backgroundColor: isDisabled
					? undefined
					: isSelected
					? colors.primaryAlpha50
					: isFocused
					? colors.primary
					: undefined,
				color: isDisabled
					? colors.neutral
					: isSelected
					? colors.neutral > 2
						? colors.neutral
						: colors.white
					: isFocused
					? colors.white
					: colors.neutralLight40,
				cursor: isDisabled ? 'not-allowed' : 'default',
				':active': {
					...styles[':active'],
					backgroundColor: !isDisabled
						? isSelected
							? data.color
							: colors.primaryAlpha60
						: undefined
				}
			}
		},
		multiValue: (styles) => {
			return {
				...styles,
				backgroundColor: colors.primary,
				borderRadius: metrics.borderRadiusSmall
			}
		},
		multiValueLabel: (styles) => ({
			...styles,
			color: colors.white
		}),
		multiValueRemove: (styles) => ({
			...styles,
			color: colors.white,
			':hover': {
				color: colors.white,
				backgroundColor: colors.error,
				borderRadius: metrics.borderRadiusSmall
			},
			':active': {
				zIndex: 9999999999,
				backgroundColor: colors.error
			}
		})
	}

	return (
		<div className={['form-group', props.class]}>
			<Select
				{...props}
				placeholder={label}
				noOptionsMessage={() => emptyLabel}
				isMulti={multiple}
				closeMenuOnSelect={!multiple}
				components={animatedComponents}
				value={currentValue}
				options={localOptions}
				styles={colourStyles}
				isDisabled={disabled}
				onChange={(e) => onChange(!multiple ? e.value : e.map((ei) => ei.value))}
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
		</div>
	)
}

export default Celect
