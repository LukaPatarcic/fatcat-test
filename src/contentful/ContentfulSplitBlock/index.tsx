import React from 'react';

// Types
import { TContentfulSplitBlock } from '../../utils/types';

import SplitBlockRichText from '../RichText/SplitBlockRichText';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { BlockWrapper } from './ContentfulSplitBlock.atom';

const ContentfulSplitBlock: React.FC<TContentfulSplitBlock> = (props) => {
	const {
		size,
		firstBlock,
		secondBlock,
		reversed,
	} = props;

	const parsedSize = size.split(' ');

	return (
		<Flex
			gap="80px"
			direction={reversed ? 'row-reverse' : undefined}
			largeTablet={['column', { gap: '56px' }]}
			mobile={[{ gap: '40px' }]}
		>
			<BlockWrapper
				reversed={reversed}
				w={parsedSize[0]}
				direction="column"
				justifyContent="center"
				largeTablet={[{ w: '100%' }]}
			>
				{SplitBlockRichText(firstBlock)}
			</BlockWrapper>
			<BlockWrapper
				reversed={reversed}
				direction="column"
				w={parsedSize[parsedSize.length - 1]}
				justifyContent="center"
				largeTablet={[{ w: '100%' }]}
			>
				{SplitBlockRichText(secondBlock)}
			</BlockWrapper>
		</Flex>
	);
};
export default ContentfulSplitBlock;
