import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

// Assets

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

// Types
import { TContentfulImage } from '../../../../../utils/types';

// TODO: Add h5 style for things that are not headings but look like h5
// TODO: change image alt?

interface TeamMemberCardProps {
    name: string;
    description: string;
    image: TContentfulImage;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = (props) => {
	const {
		name,
		description,
		image,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
			alignItems="center"
		>
			<Flex
				maxW="200px"
				marginBottom="s16"
				padding="s8"
			>
				<GatsbyImage
					alt={`Photo of ${name}: ${description}`}
					image={image.gatsbyImageData}
				/>
			</Flex>
			<Heading
				as="h3"
				textAlign="center"
				textSize="h3Mobile"
				marginBottom="s4"
			>
				{name}
			</Heading>
			<Paragraph
				textAlign="center"
				textSize="paragraphMobile"
			>
				{description}
			</Paragraph>
		</Flex>
	);
};

export default TeamMemberCard;
