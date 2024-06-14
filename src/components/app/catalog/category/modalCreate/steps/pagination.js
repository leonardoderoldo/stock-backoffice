import classNames from 'classnames'

const Pagination = ({ step = 0, stepsSize = 0 }) => {
	return (
		<div className="d-flex flex-row">
			{Array.from(Array(stepsSize).keys()).map((e) => (
				<div
					key={`__${e}`}
					className={classNames([
						'border-info border rounded d-flex justify-content-center align-items-center',
						{
							'bg-info': step >= e + 1,
							'ml-2': step > 0
						}
					])}
					style={{ height: 35, width: 35 }}
				>
					{e}
				</div>
			))}
		</div>
	)
}

export default Pagination
