/* stylelint-disable */
import { css } from 'styled-components';

export default css`
	html {
		scroll-behavior: smooth;
		font-size: 100%;
	}

	html, body, * {
		line-height: ${props => props.theme.lineHeight.s140};
		font-family: ${props => props.theme.fontFamily.main};
		.navigation-highlight {
			color:  ${props => props.theme.color.primary}; 
		}
	}
	
	/* Change the white to any color ;) */
	input:-webkit-autofill,
	input:-webkit-autofill:hover, 
	input:-webkit-autofill:focus, 
	input:-webkit-autofill:active  {
	    -webkit-box-shadow: 0 0 0 40px white inset !important;
		box-shadow: 0 0 0 40px white inset !important;
	}

	strong {
		font-weight: bold;
		user-select: text;
	}

    // We need to exclude dots from react slick slider and calendly-popup as they have their own focus implemented.
	:focus:not(.slick-dots li button):not(.calendly-popup-close) {
		position: relative;
		&:before {
			content: ' ';
			position: absolute;
			left: -4px;
			right: -4px;
			top: -4px;
			bottom: -4px;
			border-radius: 4px;
			border: 1px solid ${props => props.theme.color.black};
			outline: none;
			transition: none;
			box-sizing: border-box;
			pointer-events: none;
		}
	}

    // We need to exclude dots from react slick slider and calendly-popup as they have their own focus implemented.
	:focus-visible:not(.slick-dots li button):not(.calendly-popup-close) {
		position: relative;
		outline: unset;
		&:before {
			content: ' ';
			position: absolute;
			left: -4px;
			right: -4px;
			top: -4px;
			bottom: -4px;
			border-radius: 4px;
			border: 1px solid ${props => props.theme.color.black};
			outline: none;
			transition: none;
			box-sizing: border-box;
			pointer-events: none;
		}
	}

	:focus:not(:focus-visible) {
		:not(.calendly-popup-close){
			position: revert;
		}
		// We need to exclude dots from react slick slider as they have their own focus implemented.
		&:not(.slick-dots li button):before {
			content: unset;
		}
	}

	#gatsby-focus-wrapper::before {
		content: unset;
	}
`;
