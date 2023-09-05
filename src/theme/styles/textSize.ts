import { css } from 'styled-components';

export const TEXT_SIZE = {
	h1: css`
	  	font-family: ${props => props.theme.fontFamily.main};
		font-size: ${props => props.theme.fontSize.s54};
	  	font-weight: ${props => props.theme.fontWeight.normal};
	`,
	h1Mobile: css`
		font-size: ${props => props.theme.fontSize.s40};
	`,
	h2: css`
	  	font-family: ${props => props.theme.fontFamily.main};
		font-size: ${props => props.theme.fontSize.s38};
	  	font-weight: ${props => props.theme.fontWeight.medium};
	`,
	h2Mobile: css`
		font-size: ${props => props.theme.fontSize.s32};
	`,
	h3: css`
	  	font-family: ${props => props.theme.fontFamily.main};
		font-size: ${props => props.theme.fontSize.s24};
	  	font-weight: ${props => props.theme.fontWeight.medium};
	`,
	h3Mobile: css`
		font-size: ${props => props.theme.fontSize.s20};
	`,
	h4: css`
	  	font-family: ${props => props.theme.fontFamily.main};
		font-size: ${props => props.theme.fontSize.s20};
	  	font-weight: ${props => props.theme.fontWeight.medium};
	`,
	h4Mobile: css`
		font-size: ${props => props.theme.fontSize.s18};
	`,
	h5: css`
	  	font-family: ${props => props.theme.fontFamily.main};
		font-size: ${props => props.theme.fontSize.s18};
	  	font-weight: ${props => props.theme.fontWeight.medium};
	`,
	h5Mobile: css`
		font-size: ${props => props.theme.fontSize.s16};
	`,
	h6: css`
	    font-family: ${props => props.theme.fontFamily.main};
	    font-size: ${props => props.theme.fontSize.s18};
	    font-weight: ${props => props.theme.fontWeight.medium};
	`,
	h6Mobile: css`
        font-size: ${props => props.theme.fontSize.s16};
	`,
	paragraph: css`
	  	font-family: ${props => props.theme.fontFamily.main};
		font-size: ${props => props.theme.fontSize.s18};
	  	font-weight: ${props => props.theme.fontWeight.normal};
		line-height: 1.5;
	`,
	paragraphMobile: css`
		font-size: ${props => props.theme.fontSize.s16};
	  	font-weight: ${props => props.theme.fontWeight.normal};
	`,
	button: css`
	  	font-family: ${props => props.theme.fontFamily.main};
	  	font-weight: ${props => props.theme.fontWeight.normal};
	`,
	buttonMobile: css`
	`,

	// BLOG:
	h1Blog: css`
        font-family: ${props => props.theme.fontFamily.main};
        font-size: ${props => props.theme.fontSize.s38};
        font-weight: ${props => props.theme.fontWeight.normal};
	`,
	h1BlogMobile: css``,

	// Used in Addons section on Employer of Record page
	paragraphAddons: css`
	  	font-family: ${props => props.theme.fontFamily.main};
		font-size: ${props => props.theme.fontSize.s16};
	  	font-weight: ${props => props.theme.fontWeight.normal};
	`,
};
