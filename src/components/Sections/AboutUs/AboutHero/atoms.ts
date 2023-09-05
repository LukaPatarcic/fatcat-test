import styled from 'styled-components';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

export const StaticImageWrapper = styled(Wrapper)`
	width: fit-content;
	max-width: ${props => props.theme.sectionWidth.normal};
	
	${props => props.theme.media.tablet} {
		width: 70%;
	}
	
	${props => props.theme.media.mobile} {
		width: 100%;
	}
`;
