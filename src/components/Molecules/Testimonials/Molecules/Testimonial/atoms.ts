import styled from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

export const SquareWrapper = styled(Wrapper)`
	position: relative;
	
  	&::before {
	  	content: "";
	  	display: block;
		padding-top: 100%;
	}
`;

export const SquareWrapperContent = styled(Flex)`
	position: absolute;
	inset: 0;
`;
