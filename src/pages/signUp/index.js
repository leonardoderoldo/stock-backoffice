import { Outlet } from 'react-router'

import { images } from '../../configs'

const SignUp = ({ percentage, width = 360 }) => {
	return (
		<div className="hold-transition register-page">
			<div
				className="register-box"
				style={{
					minWidth: !percentage ? `${width}px` : `${percentage}%`
				}}
			>
				<div className="login-logo">
					<img src={images.logo} alt="Escola na mão" className="" />
				</div>

				<div className="card">
					<div className="card-body register-card-body">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUp
