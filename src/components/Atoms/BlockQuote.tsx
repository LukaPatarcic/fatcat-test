import styled from 'styled-components';

export const BlockQuote = styled.blockquote`
	padding: ${props => props.theme.space.s24};
	background-color: ${props => props.theme.backgroundColor.lightPurple};
	border-left: 2px solid ${props => props.theme.color.primary};
`;
