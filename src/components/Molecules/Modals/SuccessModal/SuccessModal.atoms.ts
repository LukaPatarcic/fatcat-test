import styled, { css } from 'styled-components';

// Utils
import transitionAnimation from '../../../../utils/transitionAnimation';

export const CloseButton = styled.button`
	cursor: pointer;
	transition: all 0.3s ease;
	justify-content: center;
	padding: 24px;
	svg {
		height: 8px;
		width: 8px;
	}
`;

export const ModalWrapper = styled.dialog<{
	isOpen: boolean;
	transitioning: boolean;
}>`
	border: none;
	overflow: auto;
	background-color: transparent;
	padding: 0;
	max-width: 500px;
	max-height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	${props => props.theme.media.mobile} {
		margin: auto 20px;
	}
	
	visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
	pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
	
	${props => transitionAnimation(
		props.isOpen,
		props.transitioning,
		css`${props.theme.animation.slideInDesktop} 0.5s forwards`,
		css`${props.theme.animation.slideOutDesktop} 0.5s forwards`
	)}

	&::backdrop {
		background-color: rgba(20, 38, 41, 0.1);
		backdrop-filter: blur(0.5px);
		pointer-events: none;
		
        ${props => transitionAnimation(
		/* eslint-disable indent */
			props.isOpen,
			props.transitioning,
			css`${props.theme.animation.fadeIn} 0.5s forwards`,
			css`${props.theme.animation.fadeOut} 0.5s forwards`
		)}
	}
`;
