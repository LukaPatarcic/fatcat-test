import React from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

type SimpleCardProps = {
	title: string;
	image: string;
	imageAlt: string;
}

const Card: React.FC<SimpleCardProps> = (props) => {
	const {
		title,
		image,
		imageAlt,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
			alignItems="center"
			gap="24px"
		>
			<Flex justifyContent="center">
				<Image
					alt={imageAlt}
					h="50px"
					w="auto"
					src={image}
				/>
			</Flex>
			<Heading
				as="h5"
				fontWeight="normal"
				textAlign="center"
			>
				{title}
			</Heading>
		</Flex>
	);
};

export default Card;
