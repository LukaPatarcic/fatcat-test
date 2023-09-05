import React from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

interface OurApproachCardProps {
	title: string;
	shortTitle: string;
	description: string ;
	eyebrowImage: string;
	id: string;
}

const OurApproachCard: React.FC<OurApproachCardProps> = (props) => {
	const {
		title,
		eyebrowImage,
		description,
		shortTitle,
		id,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
			alignItems="left"
			id={id}
		>
			<Flex
				largeTablet={[{
					marginBottom: 's8',
					alignItems: 'center',
					gap: '16px',
				}]}
			>
				<Image
					alt=""
					maxW="57px"
					marginBottom="s16"
					src={eyebrowImage}
					alignSelf="flex-start"
					largeTablet={[{
						maxW: '24px',
						marginBottom: 's0',
					}]}
				/>
				<Paragraph
					show="largeTablet"
					fontSize="s18"
					fontWeight="medium"
					textColor="purple"
					mobile={[
						{
							fontWeight: 'medium',
						},
					]}
				>
					{shortTitle}
				</Paragraph>
			</Flex>
			<Flex
				flexGrow="0"
				w="fit-content"
			>
				<Heading
					as="h3"
					marginBottom="s24"
					textAlign="left"
				>
					{title}
				</Heading>
			</Flex>
			<Flex
				gap="16px"
				direction="column"
				textAlign="left"
			>
				<Paragraph>
					{description}
				</Paragraph>
			</Flex>
		</Flex>
	);
};

export default OurApproachCard;
