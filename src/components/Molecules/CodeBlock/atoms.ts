import styled from 'styled-components';

export const CopyButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
	
	&:hover {
		color: ${props => props.theme.color.primary};
	}

	&::after {
		position: absolute;
		content: 'copied!';
		border-radius: 2px;
		padding: 2px 4px;
		font-size: 12px;
		color: ${props => props.theme.color.black};
		opacity: 0;
		border: 1px solid ${props => props.theme.color.black};
		pointer-events: none;
		background: ${props => props.theme.color.white};
		transition: opacity 1s ease-in-out;
		transform: translateY(-100%);
	}
	&:active::after {
		opacity: 1;
		transition: none;
	}
`;
