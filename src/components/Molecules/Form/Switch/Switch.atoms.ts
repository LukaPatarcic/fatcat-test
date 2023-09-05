import styled, { css, DefaultTheme } from 'styled-components';
import { lighten } from 'polished';

export interface SwitchInnerWrapperProps {
	checked: boolean;
	disabled: boolean;
	backgroundColor?: keyof DefaultTheme['color'];
	useSameBackgroundColor?: boolean;
}

export const SwitchButton = styled.span`
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: white;
	transition: transform 0.2s ease-in-out;
	will-change: transform;
`;

export const SwitchInnerWrapper = styled.span<SwitchInnerWrapperProps>`
	cursor: pointer;
	display: flex;
	border: 2px solid transparent;
	background-color: ${props => (props.backgroundColor ? props.theme.color[props.backgroundColor] : props.theme.color.primary)};
	width: 36px;
	height: 20px;
	border-radius: 36px;
	${({ checked }) => checked && css`
		${SwitchButton} {
			transform: translateX(100%);
		}
	`}
	${({ checked, useSameBackgroundColor }) => (!useSameBackgroundColor && !checked) && css`
		background-color: grey;
	`}
	${({ disabled }) => disabled && css`
		cursor: not-allowed;
		opacity: 0.5;
	`}
`;

export const SwitchInput = styled.input`
	position: absolute;
	visibility: hidden;
	width: 0;
	height: 0;
`;

export const SwitchWrapper = styled.label`
	display: flex;
	height: fit-content;
	align-items: center;
	gap: 8px;
`;

export const SwitchText = styled.span<{ selected: boolean, textColor: keyof DefaultTheme['textColor']}>`
	color: ${({ selected, textColor, theme }) => (selected ? theme.textColor[textColor] : lighten(0.2, theme.textColor[textColor]))};
	transition: color 0.2s ease-in-out;
`;
