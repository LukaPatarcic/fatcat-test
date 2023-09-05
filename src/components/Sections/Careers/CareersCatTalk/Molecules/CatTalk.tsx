import React from 'react';

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

// Molecules
import SpeechBubble from './SpeechBubble';

interface CatTalkProps {
	catImage?: string;
	text: string;
	pos: 'left' | 'right';
}

export const CatTalk: React.FC<CatTalkProps> = (props) => {
	const {
		catImage,
		text,
		pos,
	} = props;

	return (
		<Flex
			alignItems="flex-start"
			minH="350px"
			direction={pos === 'left' ? 'row' : 'row-reverse'}
			largeTablet={[
				{
					minH: '400px',
				},
			]}
			tablet={[
				pos === 'left' ? 'columnReverse' : 'column',
				{
					minH: '250px',
				},
			]}
		>
			<Image
				alignSelf={pos === 'left' ? 'flex-end' : 'flex-start'}
				src={catImage}
				w="150px"
				tablet={[
					{
						w: '100px',
						alignSelf: pos === 'left' ? 'flex-start' : 'flex-end',
					},
				]}
				alt=""
			/>
			<SpeechBubble
				pos={pos}
				text={text}
				alignSelf={pos === 'left' ? 'flex-start' : 'flex-end'}
			/>
			<Flex w="150px" flexShrink="0" />
		</Flex>
	);
};

CatTalk.defaultProps = {
	catImage: undefined,
};
