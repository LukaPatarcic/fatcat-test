import React from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

interface OurProcessCardProps {
	title: string;
	description: string;
	image: string;
}

const OurProcessCard: React.FC<OurProcessCardProps> = (props) => {
	const {
		title,
		image,
		description,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
		>
			<Image
				src={image}
				alt=""
				h="120px"
				w="auto"
				marginBottom="s16"
				alignSelf="flex-start"
				largeTablet={[{
					alignSelf: 'center',
					h: '80px',
				}]}
				mobile={[{ alignSelf: 'flex-start' }]}
			/>
			<Flex
				largeTablet={[{ justifyContent: 'center' }]}
				mobile={[{ justifyContent: 'flex-start' }]}
			>
				<Heading
					as="h3"
					marginBottom="s24"
				>
					{title}
				</Heading>
			</Flex>
			<Paragraph
				largeTablet={[{ textAlign: 'center' }]}
				mobile={[{ textAlign: 'left' }]}
			>
				{description}
			</Paragraph>
		</Flex>
	);
};

export default OurProcessCard;
