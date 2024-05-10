import { useEffect, useRef, useState } from 'react'
import { colors, metrics } from '../../../configs'

const ImageRender = ({
	src = '',
	alt = '',
	objectFit = 'cover',
	size,
	width = 70,
	height = 70,
	style = {},
	...props
}) => {
	const refImg = useRef()
	const [showIcon, setShowIcon] = useState(true)

	if (size) {
		width = size
		height = size
	}

	useEffect(() => {
		if (refImg?.current?.src !== '') {
			setShowIcon(false)
		}
	}, [refImg?.current])

	return (
		<div
			title={alt}
			className="border d-flex"
			style={{
				width: width,
				height: height,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.primaryAlpha60,
				borderRadius: metrics.borderRadiusMedium,
				...style
			}}
		>
			{(!src || !!showIcon || showIcon == null) && (
				<div>
					<i className="fas fa-image" style={{ color: colors.white }} />
				</div>
			)}
			{!!src && (
				<img
					ref={refImg}
					src={src}
					alt={alt}
					style={{
						width: width,
						height: height,
						objectFit: objectFit,
						top: showIcon ? 10000000 : 0,
						position: showIcon ? 'absolute' : 'relative',
						borderRadius: metrics.borderRadiusMedium,
						...style
					}}
					className={['m-0', props.class, props.className, props.imgClassName]}
				/>
			)}
		</div>
	)
}

export default ImageRender
