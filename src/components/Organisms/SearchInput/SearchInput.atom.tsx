import styled, { css } from 'styled-components';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

export const Checkbox = styled.div<{ value: boolean }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2px 12px;
	line-height: 1.5;

	&:hover, &:focus {
		background-color: #DDDDDD4D;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		border: 1px solid ${props => props.theme.color.grey200};
		width: 16px;
		height: 16px;
		svg {
			display: none;
			width: 12px;
			height: auto;
		}
	}

	${props => props.value && css`
		div {
			background-color: ${props => props.theme.color.blue};
			svg {
				display: block;
			}
		}
	`}
`;

export const DropdownWrapper = styled(Flex) <{ isOpen: boolean }>`
	position: absolute;
	z-index: 50;
	width: calc(100% - 30px);
	top: calc(100% + 2px);
	left: 15px;
	flex-direction: column;
	background-color: white;
	border-radius: 4px;
	border: 1px solid ${props => props.theme.color.grey200};
	box-shadow: 0 0 4px 2px rgb(128, 128, 128, 0.3);
`;

export const Button = styled.button`
	cursor: pointer;
    display: inline-block;
  	border: 1px solid transparent;
	background-color: ${props => props.theme.color.blue};
	color: ${props => props.theme.color.white};
    font-weight: ${props => props.theme.fontWeight.bold};
	border-radius: 100px;
    padding: 0 12px;
    white-space: nowrap;
    text-align: center;

	&:focus {
		border: 1px solid red;
	}
`;
