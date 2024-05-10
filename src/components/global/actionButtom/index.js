import Buttom from '../buttom'

const ActionButtom = ({ title = 'Ações', actions = [] }) => {
	return (
		<div className="btn-group btn-group-sm">
			<Buttom title={title} groupSm>
				{title}
			</Buttom>
			<button
				type="button"
				className="btn btn-primary dropdown-toggle dropdown-icon"
				data-toggle="dropdown"
			>
				<span className="sr-only">Toggle Dropdown</span>
			</button>
			<div className="dropdown-menu" role="menu">
				{actions.map((e, i) => (
					<div key={`btn_a_${i}`}>
						<button
							title={e.title || ''}
							className="btn btn-light btn-sm"
							disabled={e?.disabled || false}
							onClick={() => e.callback && e.callback()}
						>
							<span className="text-muted">{e.title}</span>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default ActionButtom
