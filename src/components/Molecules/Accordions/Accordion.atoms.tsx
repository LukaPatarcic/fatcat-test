import styled, { DefaultTheme } from 'styled-components';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Icon } from 'fatcat-ui-library/components/Atoms/Icon';

export const AccordionTitle = styled(Heading)<{ isOpen: boolean, hoverColor: keyof DefaultTheme['color'] }>`
	background-color: ${props => (props.isOpen ? `${props.theme.color[props.hoverColor]}` : 'transparent')};
	border-radius: 8px;
	position: relative;
	&:hover,
	&:hover * {
		cursor: pointer;
	}
	&:hover {
		background-color: ${props => props.theme.color.cream};
		border-radius: 8px;
	}
	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 12px;
		${props => props.theme.media.mobile} {
			padding: 8px;
		}
	}
`;

export const Plus = styled(Icon)`
	position: relative;
	width: 24px;
	height: 24px;
	margin-left: 4px;
	color: ${props => props.theme.color.gray60};
`;

export const AccordionWrapper = styled(Wrapper)`
	position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 50%;
		transform: translateX(-50%);
		height: 1px;
		width: calc(100% - 8px);
		background-color: ${props => props.theme.color.gray20};
	}
`;

export const AccordionContent = styled(Wrapper) <{ isOpen: boolean }>`
	height: ${props => (props.isOpen ? 'auto' : 0)};
	overflow: hidden;
`;
