import { css } from 'styled-components';

export const transitionStyle = css`
	transition: 0.2s all linear;
`;

export const SPACE = {
	s30: '30px',
	s48: '48px',
	s100: '100px',
	s148: '148px',
	s192: '192px',
	s296: '296px',
	s350: '350px',
};

export const MEDIA = {
	wideDesktop: '@media screen and (min-width: 1921px)',
	largeDesktop: '@media screen and (max-width: 1920px)',
	desktopBig: '@media screen and (max-width: 1680px)',
	standardDesktop: '@media screen and (max-width: 1400px)',
	desktop: '@media screen and (max-width: 1200px)',
	largeTablet: '@media screen and (max-width: 992px)',
	tablet: '@media screen and (max-width: 768px)',
	mobile: '@media screen and (max-width: 480px)',
	noHover: '@media (hover: none)',
};

export const SECTION_WIDTH = {
	normal: '1080px',
	wide: '1480px',
};

export const FONT_FAMILY = {
	main: 'Stolzl',
	secondary: '"Architects Daughter"',
	code: 'Consolas, Monaco, "Andale Mono", monospace',
};

// add size also to FONT_SIZE_BIG
export const FONT_SIZE = {
	s8: '0.5rem',
	s10: '0.625rem',
	s22: '1.325rem',
	s26: '1.625rem',
	s36: '2.25rem',
	s38: '2.375rem',
	s40: '2.5rem',
	s44: '2.75rem',
	s50: '3.125rem',
	s68: '4.25rem',
	s76: '4.75rem',
	s90: '5.625rem',
	s100: '6.25rem',
	s124: '7.75rem',
};

// font-size 12px-36px should add 8px to size
export const FONT_SIZE_BIG = {
	s8: '0.5rem',
	s10: '0.625rem',
	s14: '1.375rem',
	s16: '1.5rem',
	s18: '1.625rem',
	s20: '1.75rem',
	s24: '2rem',
	s26: '2.125rem',
	s28: '2.25rem',
	s30: '2.375rem',
	s32: '2.5rem',
	s36: '2.75rem',
	s38: '2.375rem',
	s40: '2.5rem',
	s44: '2.75rem',
	s50: '3.125rem',
	s68: '4.25rem',
	s76: '4.75rem',
	s90: '5.625rem',
	s100: '6.25rem',
	s124: '7.75rem',
};

export const LINE_HEIGHT = {
	p20: '1.25rem',
	p22: '1.375rem',
	p24: '1.5rem',
	p26: '1.625rem',
	p28: '1.75rem',
	p30: '1.875rem',
	p32: '2rem',
	p34: '2.125rem',
	p36: '2.25rem',
	p38: '2.375rem',
	p40: '2.5rem',
	p44: '2.75rem',
	p48: '3rem',
	p50: '3.125rem',
	p57: '3.5625rem',
	p60: '3.75rem',
	p80: '5rem',
	p102: '6.375rem',
	p124: '7.75rem',
	s140: '1.4',
	s130: '1.3',
};

export const SCREEN_RATIO = {
	mobile: 2.5,
	tablet: 1.8,
	largeTablet: 1.4,
};

export const SectionStyle = css`
	${props => css`
		padding: 0 ${props => props.theme.space.s64};

		${props.theme.media.largeTablet} {
			padding-left: ${props.theme.space.s44};
			padding-right: ${props.theme.space.s44};
		}

		${props.theme.media.mobile} {
			padding: 0 ${props.theme.space.s24};
		}
	`}
`;
