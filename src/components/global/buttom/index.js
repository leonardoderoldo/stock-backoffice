import classNames from 'classnames'

const Buttom = ({
	submit = false,
	title = 'Buttom',
	color = 'primary',
	block = false,
	outline = false,
	groupSm = false,
	disabled = false,
	onClick = () => {},
	...props
}) => {
	return (
		<div
			className={classNames([
				{
					'btn-group btn-group-sm': groupSm
				}
			])}
		>
			<button
				title={title}
				type={submit ? 'submit' : 'button'}
				disabled={disabled}
				{...props}
				className={classNames([
					'btn',
					{
						'btn-block': block,
						'btn-primary': color === 'primary' && !outline,
						'btn-secondary': color === 'secundary' && !outline,
						'btn-ascendent': color === 'ascendent' && !outline,
						'btn-outline-primary': color === 'primary' && outline,
						'btn-outline-secondary': color === 'secundary' && outline,
						'btn-outline-ascendent': color === 'ascendent' && outline
					},
					props.class,
					props.className
				])}
				onClick={() => onClick()}
			>
				{props.children}
			</button>
		</div>
	)
}

export default Buttom
