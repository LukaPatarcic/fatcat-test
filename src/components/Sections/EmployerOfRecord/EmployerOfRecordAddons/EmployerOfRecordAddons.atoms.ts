import styled from 'styled-components';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

export const AccordionWrapper = styled(Flex)`
	position: relative;
	flex-direction: column;
	display: none;
	padding-bottom: 20px;
	
	${props => props.theme.media.largeTablet} {
		display: flex;
	}
	
	::after {
		content: '';
		position: absolute;
		background-color: ${props => props.theme.backgroundColor.cream};
		z-index: -1;
		
		top: 62px;
		bottom: 0;

        ${props => props.theme.media.largeTablet} {
            left: -32px;
            right: -32px;
        }

        ${props => props.theme.media.mobile} {
            left: -20px;
            right: -20px;
        }
	}
	
`;
