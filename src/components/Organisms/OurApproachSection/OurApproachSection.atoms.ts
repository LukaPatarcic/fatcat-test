import styled from 'styled-components';

// Atoms
import { Link, TLink } from 'fatcat-ui-library/components/Atoms/Link';

export const NavLink = styled(Link)<TLink & {
	lineImg: string;
	active: boolean;
}>`
	position: relative;
    font-family: ${props => props.theme.fontFamily.main};
    font-size: ${props => props.theme.fontSize.s18};
    font-weight: ${props => props.theme.fontWeight.medium};
	color: ${props => props.active ? props.theme.textColor.purple : props.theme.textColor.primary};
	
	&:hover {
		color: ${props => props.theme.textColor.purple};
	}
	
	&:focus {
		color: ${props => props.active ? props.theme.textColor.purple : props.theme.textColor.primary};
	}
	
	&::after {
		position: absolute;
		content: '';
		bottom: 0;
		left: 0;
		right: 0;
		background: url(${props => props.lineImg});
		height: 6px;
		transform: translateY(100%);
		transition: width .15s ease-in-out;
		width: ${props => props.active ? '100%' : '0'};
	}
`;
