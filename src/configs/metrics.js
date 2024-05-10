const { width, height } = window

const metrics = {
	isPocket: height < 668 ? true : false, //< 668
	width: width,
	height: height,
	borderRadiusSmall: 4,
	borderRadiusMedium: 8,
	borderRadiusLarge: 10,
	borderRadiusExtraLarge: 16,
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	baseRadius: 3,
	paddingExtraSmall: 4,
	paddingSmall: 8,
	paddingMedium: 16,
	paddingLarge: 24,
	paddingExtraLarge: 32,
	marginSmall: 8,
	marginMedium: 16,
	marginLarge: 24,
	marginExtraLarge: 32,
	marginBottomSmall: 8,
	marginBottomExtraSmall: 4,
	marginBottomMedium: 16,
	marginBottomLarge: 24,
	marginBottomExtraLarge: 32,
	marginTopSmall: 8,
	marginTopMedium: 16,
	marginTopLarge: 24,
	marginTopExtraLarge: 32
}

export default metrics
