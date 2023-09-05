import styled, { css } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

const toggleOpenCSS = css`
	visibility: visible;
	pointer-events: initial;
	opacity: 1;
`;

export const DropdownItemsContainer = styled(Flex)<{ isOpen: boolean }>`
	position: absolute;
	width: 100vw;
	bottom: 0;
	transform: translate(0, 100%);
	visibility: hidden;
	pointer-events: none;
	opacity: 0;
	padding-top: 24px;
	transition: opacity 0.2s ease-in-out;
	justify-content: center;
	
	${props => props.isOpen && toggleOpenCSS}
`;

export const DropdownWrapper = styled.div`
	position: relative;

	& > div > span + svg {
		transition: 0.2s ease-in-out;
	}

	&:focus-within {
		${DropdownItemsContainer} {
			${toggleOpenCSS}
		}
	}
`;

export const VerticalLine = styled(Wrapper)`
	width: 1px;
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 1px;
	align-self: stretch;
	padding-top: ${props => props.theme.space.s16};
	padding-bottom: ${props => props.theme.space.s16};
	background-color: ${props => props.theme.color.gray10};
`;
