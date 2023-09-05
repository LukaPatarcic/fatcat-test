import styled from 'styled-components';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

export const YellowBackground = styled(Wrapper)`
	position: absolute;
	background-color: ${props => props.theme.backgroundColor.tertiaryYellow};
	z-index: -1;
	width: 40%;
	height: 965px;
	bottom: ${props => props.theme.space.s192};
	
	${props => props.theme.media.standardDesktop} {
		bottom: ${props => props.theme.space.s148};
	}
	
	${props => props.theme.media.desktop} {
		bottom: ${props => props.theme.space.s120};
	}
	
	${props => props.theme.media.largeTablet} {
		bottom: ${props => props.theme.space.s100};
		width: 100%;
		height: 1538px;
	}
	
	${props => props.theme.media.tablet} {
		bottom: ${props => props.theme.space.s80};
		height: 1550px;
	}
	
	${props => props.theme.media.mobile} {
		bottom: ${props => props.theme.space.s48};
		height: 1535px;
	}
`;
