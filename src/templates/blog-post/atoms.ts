import styled from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

export const RenderWrapper = styled(Flex)`
	flex-direction: column;

	& *:first-child {
		margin-top: 0;
	}
	& *:last-child {
		margin-bottom: 0;
	}
	& > br:last-child {
		display: none;
	}
`;
