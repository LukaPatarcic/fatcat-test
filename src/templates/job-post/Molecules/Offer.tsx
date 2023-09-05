import React from 'react';

// Assets

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

// Utils

interface OfferProps {
	icon: string;
    text: string;
}

const Offer: React.FC<OfferProps> = (props) => {
	const {
		icon,
		text,
	} = props;
	return (
		<Flex
			key={text}
			direction="column"
			alignItems="flex-start"
			gap="8px"
		>
			<Image
				src={icon}
				alt=""
				w="24px"
				alignSelf="flex-start"
			/>
			<Paragraph>
				{text}
			</Paragraph>
		</Flex>
	);
};

export default Offer;
