import { css, DefaultTheme } from 'styled-components';

const buttonBase = css<{size: keyof DefaultTheme['buttonSize']}>`
	${props => props.theme.textVariant.button};
	${props => props.size && props.theme.buttonSize[props.size]};
	height: fit-content;
	border-radius: 8px;
`;

export const BUTTON_VARIANT = {
	primary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		border: 1px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.buttonColor[props.buttonColor].default};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
			color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
			${props => props.theme.media.mobile} {
				background: ${props => props.theme.buttonColor[props.buttonColor].default};
				border-color: ${props => props.theme.buttonColor[props.buttonColor].default};
				color: ${props => props.theme.buttonColor[props.buttonColor].text};
			}
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	secondary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.color.transparent};
		border: 1px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		${buttonBase};
		&:hover {
			color: ${props => props.theme.color.white};
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.text};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	ghost: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		border: 1px solid ${props => props.theme.color.transparent};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		${buttonBase};
		&:hover {
			background: ${props => props.theme.buttonColor[props.buttonColor].hover};
			border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
		  	color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
		}
		&:disabled {
			cursor: not-allowed;
			//background: ${props => props.theme.buttonColor.disabled.default};
			//border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
		}
	`,
	underline: css<{ buttonColor: keyof DefaultTheme['buttonColor'] }>`
		border: 1px solid ${props => props.theme.color.transparent};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.color.transparent};
		position: relative;
		padding: 0;
		${props => props.theme.textVariant.button};

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 1px;
			background-color: ${props => props.theme.buttonColor[props.buttonColor].default};
		}
		&:hover {
			&::before {
				width: 100%;
			}
		}
		&:disabled {
			cursor: not-allowed;
			background: ${props => props.theme.buttonColor.disabled.default};
			border-color: ${props => props.theme.buttonColor.disabled.default};
			color: ${props => props.theme.buttonColor.disabled.text};
			&::before {
				width: 100%;
				background-color: ${props => props.theme.buttonColor.disabled.text};
			}
		}
	`,
	noStyle: css``,
};

export const BUTTON_SIZE = {
	large: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s48};
	  	font-size: ${props => props.theme.fontSize.s18};
	  	line-height: ${props => props.theme.lineHeight.s130};
	`,
	medium: css`
		padding: ${props => props.theme.space.s16} ${props => props.theme.space.s32};
        font-size: ${props => props.theme.fontSize.s18};
        line-height: ${props => props.theme.lineHeight.s130};
	`,
	small: css`
		padding: ${props => props.theme.space.s10} ${props => props.theme.space.s20};
        font-size: ${props => props.theme.fontSize.s16};
        line-height: ${props => props.theme.lineHeight.s130};
	`,
	nav: css`
		padding: ${props => props.theme.space.s4} ${props => props.theme.space.s16};
		font-size: ${props => props.theme.fontSize.s18};
		line-height: ${props => props.theme.lineHeight.s130};
	`,
};
