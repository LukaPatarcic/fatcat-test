import styled from 'styled-components';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

export const AccordionTitle = styled(Heading)<{ isOpen: boolean}>`
	&:hover,
	&:hover * {
		cursor: pointer;
    }
	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 20px;
		${props => props.theme.media.mobile} {
			padding: 16px 20px;
		}
	}
`;

export const AccordionWrapper = styled(Wrapper)<{isLast?: boolean}>`
	position: relative;
	&::after {
		content: '';
		display: ${props => props.isLast ? 'none' : 'initial'};
		position: absolute;
		bottom: -1px;
		left: 50%;
		transform: translateX(-50%);
		height: 1px;
		width: calc(100% - 32px);
		background-color: ${props => props.theme.color.gray20};
	}
`;

export const AccordionContent = styled(Wrapper) <{ isOpen: boolean }>`
	height: ${props => (props.isOpen ? 'auto' : 0)};
	max-width: 800px;
	overflow: hidden;
`;
