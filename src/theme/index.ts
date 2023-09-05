import { FatCatTheme } from 'fatcat-ui-library/theme/theme';

import {
	// ANIMATIONS,
	BUTTON_VARIANT,
	BUTTON_COLOR,
	COLOR,
	FONT_FAMILY,
	// FONT_SIZE,
	HOVER_STYLE,
	LINE_HEIGHT,
	LINK_VARIANT,
	SECTION_WIDTH,
	SPACE,
	// SectionStyle,
	TEXT_COLOR,
	TEXT_SIZE,
	TEXT_VARIANT,
	MEDIA,
	INPUT_VARIANT,
	ULLIST_VARIANT,
	OLLIST_VARIANT,
	LINK_COLOR,
	FONT_SIZE,
	BUTTON_SIZE,
	ANIMATIONS,
	CODE_BLOCK,
	TABLE_VARIANT,
	SCREEN_RATIO,
} from './styles';

import { SideSpace } from './types';

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		animation: FatCatTheme['animation'] & typeof ANIMATIONS;
		backgroundColor: FatCatTheme['backgroundColor'] & typeof COLOR;
		buttonColor: typeof BUTTON_COLOR;
		buttonSize: FatCatTheme['buttonSize'] & typeof BUTTON_SIZE;
		buttonVariant: FatCatTheme['buttonVariant'] & typeof BUTTON_VARIANT;
		color: FatCatTheme['color'] & typeof COLOR;
		fontFamily: typeof FONT_FAMILY;
		fontSize: FatCatTheme['fontSize'] & typeof FONT_SIZE;
		fontWeight: FatCatTheme['fontWeight'];
		hover: FatCatTheme['hover'] & typeof HOVER_STYLE;
		inputVariant: FatCatTheme['inputVariant'] & typeof INPUT_VARIANT;
		lineHeight: FatCatTheme['lineHeight'] & typeof LINE_HEIGHT;
		linkColor: FatCatTheme['linkColor'] & typeof LINK_COLOR;
		linkVariant: FatCatTheme['linkVariant'] & typeof LINK_VARIANT;
		media: FatCatTheme['media'] & typeof MEDIA;
		mediaMobile: FatCatTheme['mediaMobile'];
		ollistVariant: FatCatTheme['ollistVariant'] & typeof OLLIST_VARIANT;
		responsive: FatCatTheme['responsive'];
		screenRatio: FatCatTheme['screenRatio'] & typeof SCREEN_RATIO;
		sectionLayout: CSSProp;
		sectionWidth: FatCatTheme['sectionWidth'] & typeof SECTION_WIDTH;
		sideSpace: FatCatTheme['sideSpace'] | SideSpace;
		space: FatCatTheme['space'] & typeof SPACE;
		tableVariant: FatCatTheme['tableVariant'] & typeof TABLE_VARIANT;
		textColor: FatCatTheme['textColor'] & typeof TEXT_COLOR;
		textSize: FatCatTheme['textSize'] & typeof TEXT_SIZE;
		textVariant: FatCatTheme['textVariant'] & typeof TEXT_VARIANT;
		ullistVariant: FatCatTheme['ullistVariant'] & typeof ULLIST_VARIANT;
		useMobileFirst: FatCatTheme['useMobileFirst'];
		codeBlock: typeof CODE_BLOCK;
	}
}

export const newTheme = {
	animation: ANIMATIONS,
	color: COLOR,
	buttonColor: BUTTON_COLOR,
	buttonSize: BUTTON_SIZE,
	buttonVariant: BUTTON_VARIANT,
	backgroundColor: COLOR,
	tableVariant: TABLE_VARIANT,
	textColor: TEXT_COLOR,
	space: SPACE,
	screenRatio: SCREEN_RATIO,
	sectionWidth: SECTION_WIDTH,
	textSize: TEXT_SIZE,
	textVariant: TEXT_VARIANT,
	linkColor: LINK_COLOR,
	linkVariant: LINK_VARIANT,
	media: MEDIA,
	fontFamily: FONT_FAMILY,
	fontSize: FONT_SIZE,
	lineHeight: LINE_HEIGHT,
	ollistVariant: OLLIST_VARIANT,
	ullistVariant: ULLIST_VARIANT,
	codeBlock: CODE_BLOCK,
	inputVariant: INPUT_VARIANT,
};

export * from './styles';
export * from './types';
