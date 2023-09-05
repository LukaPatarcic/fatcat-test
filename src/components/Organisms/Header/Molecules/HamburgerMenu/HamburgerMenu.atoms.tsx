import styled, { css } from 'styled-components';

const barItem = css<{ darkColor?: boolean }>`
	transform: rotate(0deg);
	transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
	width: 18px;
	height: 2px;
background-color: ${props => props.theme.color.black};
`;

export const HamburgerMenuBarTop = styled.div`
	margin-bottom: 4px;
   	${barItem};
`;
export const HamburgerMenuBarCenter = styled.div`
	margin-bottom: 4px;
   	${barItem};
`;
export const HamburgerMenuBarBottom = styled.div`
	${barItem};
`;

const barItemOpen = css`
	position: absolute;
	top: 21px;
	border-radius: 4px;
`;

export const HamburgerMenuWrapper = styled.div<{ isOpen: boolean }>`
	cursor: pointer;
	display: none;
	flex-direction: column;
	align-items: flex-end;
	position: relative;
	height: 44px;
	width: 22px;
	padding: 14px 0px;
	z-index: 110;

	${props => props.theme.media.largeTablet} {
		display: flex;
	}

	&:focus {
		outline: -webkit-focus-ring-color auto 5px;
	}
	${({ isOpen }) => isOpen && css`
		${HamburgerMenuBarBottom} {
			${barItemOpen};
			transform: rotate(-45deg);
			width: 22px;
			background-color: ${props => props.theme.color.black};
		}
		${HamburgerMenuBarCenter} {
			opacity: 0;
			width: 0;
			transition: unset;
		}
		${HamburgerMenuBarTop} {
			${barItemOpen};
			transform: rotate(45deg);
			width: 22px;
			background-color: ${props => props.theme.color.black};
		}
	`}
`;
