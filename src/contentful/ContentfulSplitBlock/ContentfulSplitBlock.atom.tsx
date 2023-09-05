import styled from 'styled-components';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

export const BlockWrapper = styled(Flex) <{ reversed: boolean }>`
	& > *:first-child {
		margin-top: 0;
	}
	& > *:last-child {
		margin-bottom: 0;
	}
	& > br:last-child {
		display: none;
	}

	img {
		width: fit-content;
		align-self: ${({ reversed }) => reversed ? 'flex-start' : 'flex-end'};

		${props => props.theme.media.largeTablet} {
			align-self: center;
		}

		${props => props.theme.media.mobile} {
			width: 100%;
		}
	}
`;
