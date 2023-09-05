import styled, {
	DefaultTheme,
} from 'styled-components';

export const Dot = styled.span<{ color: keyof DefaultTheme['textColor']}>`
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background-color: ${props => props.theme.textColor[props.color]};
`;
