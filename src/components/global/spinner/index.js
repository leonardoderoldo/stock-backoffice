import { Player } from '@lottiefiles/react-lottie-player'

import loader from '../../../assets/lottie/load.json'
import { colors } from '../../../configs'

const Spinner = ({ show = false }) => {
	if (!show) return
	return (
		<div
			className="d-flex"
			style={{
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 9999999,
				position: 'absolute',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.primaryAlpha60
			}}
		>
			<Player autoplay loop src={loader} style={{ height: '300px', width: '300px' }} />
		</div>
	)
}

export default Spinner
