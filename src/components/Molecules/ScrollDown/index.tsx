import React from 'react';

// Assets
import scrollDown from '../../../assets/images/scroll-down.svg';

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Flex, TFlex } from 'fatcat-ui-library/components/Atoms/Flex';

type ScrollDownProps = TFlex;

const ScrollDown: React.FC<ScrollDownProps> = (props) => {
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			{...props}
		>
			<Image
				alt="Image of a computer mouse with text: 'Scroll down'"
				src={scrollDown}
				maxW="90px"
				tablet={[{ maxW: '75px' }]}
			/>
		</Flex>
	);
};

export default ScrollDown;
