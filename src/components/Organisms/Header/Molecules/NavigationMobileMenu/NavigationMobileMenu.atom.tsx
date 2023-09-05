import styled, { css } from 'styled-components';

type TNavigationMenuWrapper = {
	open: boolean;
}

export const NavigationMenuWrapper = styled.nav<TNavigationMenuWrapper>`
	position: fixed;
	visibility: hidden;
    transition: transform 0.3s ease-in-out;
	background-color: ${props => props.theme.color.white};
	top: 0;
	right: 0;
	height: 100dvh;
	overflow-y: scroll;
	padding: 70px 0 0;
	box-shadow: 10px 0 40px rgba(0, 0, 0, 0.1);

    ${props => props.open && css`
		visibility: visible;
    `}

	${props => props.theme.media.largeTablet} {
		width: 350px;
		transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
	}

	${props => props.theme.media.mobile} {
		width: 100%;
		box-shadow: none;
		transform: ${props => props.open ? 'translateY(0)' : 'translateY(-100%)'};
	}
`;
