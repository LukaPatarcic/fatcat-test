import styled from 'styled-components';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

export const ShareMenuWrapper = styled(Flex)`
	svg {
        width: 24px;
        color: ${props => props.theme.textColor.black};
		transform: scale(1);
		transition: all .2s ease-in-out;
	}

    button:hover {
        svg {
            color: ${props => props.theme.textColor.purple};
			transform: scale(1.05)
        }
    }
`;
