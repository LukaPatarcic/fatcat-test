import React from 'react';

// Assets
import triangle from '../../../../../assets/images/careers/cat-talk/triangle.svg';
import triangleMobile from '../../../../../assets/images/careers/cat-talk/triangle-mobile.svg';

// Atoms
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Flex, TFlex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

interface SpeechBubbleProps extends TFlex {
	text: string;
	pos: 'left' | 'right';
}

const SpeechBubble: React.FC<SpeechBubbleProps> = (props) => {
	const {
		text,
		pos,
		...rest
	} = props;

	return (
		<Flex
			padding="s40"
			backgroundColor="cream"
			borderRadius={pos === 'left' ? '16px 16px 16px 0' : '16px 0 16px 16px'}
			tablet={[
				{
					padding: 's20',
				},
			]}
			position="relative"
			margin={[pos === 'left' ? 'b24' : 't24']}
			{...rest}
		>
			<Paragraph
				fontSize="s24"
				tablet={[
					{
						fontSize: 's16',
					},
				]}
			>
				{text}
			</Paragraph>
			<Image
				alt=""
				w="50px"
				position="absolute"
				src={triangle}
				bottom={pos === 'left' ? '0' : undefined}
				top={pos === 'right' ? '0' : undefined}
				left={pos === 'left' ? '0' : undefined}
				right={pos === 'right' ? '0' : undefined}
				transform={pos === 'left' ? 'translateY(100%)' : 'translateY(-100%) scale(-1, -1)'}
				hide="tablet"
			/>
			<Image
				alt=""
				w="50px"
				position="absolute"
				src={triangleMobile}
				bottom={pos === 'left' ? '0' : undefined}
				top={pos === 'right' ? '0' : undefined}
				left={pos === 'left' ? '0' : undefined}
				right={pos === 'right' ? '0' : undefined}
				transform={pos === 'left' ? 'translateY(100%)' : 'translateY(-100%) scale(-1, -1)'}
				show="tablet"
			/>
		</Flex>
	);
};

export default SpeechBubble;
