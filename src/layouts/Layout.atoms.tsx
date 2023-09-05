import { createGlobalStyle } from 'styled-components';

export const HTMLStyle = createGlobalStyle`
	body.scroll-disabled {
		${props => props.theme.media.largeTablet} {
           overflow: hidden;
		}
	}
`;
