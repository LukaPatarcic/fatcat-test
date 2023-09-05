export const COLOR = {
	primary: '#5C62F9',
	mainGreen: '#35C89F',
	mainYellow: '#FFCC00',
	mainRed: '#F97F88',
	red: '#F97F88',
	white: '#FFFFFF',
	black: '#01082D',
	gray80: '#343957',
	gray60: '#676B81',
	gray40: '#999CAB',
	gray20: '#CCCED5',
	gray10: '#E6E6EA',
	gray5: '#F2F3F5',
	cream: '#F9F6F3',
	linkColor: '#5C62F9',
	tertiaryYellow: '#FFEDA6',
	transparent: 'transparent',
	disabled: '#E0E2EC',
	disabledDark: '#A0A3AF',
	yellow: '#FFD940',
	lightPurple: '#F7F7FF',
};

export const LINK_COLOR = {
	primary: {
		default: COLOR.primary,
		hover: COLOR.black,
	},
	nav: {
		default: COLOR.black,
		hover: COLOR.primary,
	},
	footer: {
		default: COLOR.black,
		hover: COLOR.black,
	},
};

export const BUTTON_COLOR = {
	primary: {
		default: COLOR.black,
		text: COLOR.white,
		hover: COLOR.primary,
		hoverText: COLOR.white,
	},
	primaryLight: {
		default: COLOR.black,
		text: COLOR.white,
		hover: COLOR.white,
		hoverText: COLOR.black,
	},
	primaryPurple: {
		default: COLOR.primary,
		text: COLOR.white,
		hover: COLOR.black,
		hoverText: COLOR.white,
	},
	secondary: {
		default: COLOR.black,
		text: COLOR.black,
		hover: COLOR.primary,
		hoverText: COLOR.white,
	},
	// white: {
	// 	default: COLOR.white,
	// 	text: COLOR.blue,
	// 	hover: darken(0.05, COLOR.white),
	// 	hoverText: COLOR.blue,
	// },
	disabled: {
		default: COLOR.disabled,
		text: COLOR.disabledDark,
		hover: COLOR.disabled,
		hoverText: COLOR.disabledDark,
	},
	ghost: {
		default: COLOR.transparent,
		text: COLOR.primary,
		hover: COLOR.transparent,
		hoverText: COLOR.black,
	},
	ghostBlack: {
		default: COLOR.transparent,
		text: COLOR.black,
		hover: COLOR.transparent,
		hoverText: COLOR.primary,
	},
	// white: {
	// 	default: COLOR.white,
	// 	text: COLOR.primary,
	// 	hover: darken(0.1, COLOR.white),
	// 	hoverText: COLOR.white,
	// },
	// underline: {
	// 	default: COLOR.primary,
	// 	text: COLOR.primary,
	// },
};

export const TEXT_COLOR = {
	primary: COLOR.black,
	gray40: COLOR.gray40,
	gray60: COLOR.gray60,
	gray80: COLOR.gray80,
	gray: COLOR.gray80,
	black: COLOR.black,
	white: COLOR.white,
	purple: COLOR.primary,
	// secondary: COLOR.darkerGrey,
	// black: COLOR.blackLighter,
	// yellow: COLOR.yellow,
	// white: COLOR.white,
	// warning: COLOR.warning,
};

//* Right now background import all colors from COLOR definition on top */
export const BACKGROUND_COLOR = {
	cream: COLOR.cream,
	red: COLOR.mainRed,
	green: COLOR.mainGreen,
	yellow: COLOR.mainYellow,
	purple: COLOR.primary,
};
