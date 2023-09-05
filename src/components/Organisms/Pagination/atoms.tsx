import styled, { css } from 'styled-components';

// Atoms
import { Button as ButtonBase, TButton } from 'fatcat-ui-library/components/Atoms/Button';

export const Button = styled(ButtonBase)<{ selected?: boolean, rotated?: boolean } & TButton>`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	color: ${props => props.selected ? props.theme.color.primary : props.theme.color.black};
	font-weight: ${props => props.theme.fontWeight.medium};
	font-size: ${props => props.theme.fontSize.s20};
	line-height: ${props => props.theme.lineHeight.p30};
	text-align: center;
	min-width: 32px;
	border-radius: 4px;
	border: 1px solid transparent;
	${props => props.rotated && css`transform: scale(-1);`}

	&:hover {
		color: ${props => props.theme.color.primary};
		border: 1px solid ${props => props.theme.color.lightGrey};
	}

	&:disabled {
		pointer-events: none;
		color: ${props => props.theme.color.gray40};
		svg {
			fill: ${props => props.theme.color.gray40};
		}
	}
`;
