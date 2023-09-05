import React from 'react';

// Assets
import katarina from '../../../../../assets/images/careers/form/katarina.png';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import Button from '../../../../Atoms/Button';

const PersonCard: React.FC = () => {
	return (
		<Flex
			direction="column"
			maxW="300px"
		>
			<Heading
				as="h3"
				textAlign="center"
				marginBottom="s40"
				largeTablet={[{ marginBottom: 's16' }]}
			>
				Got questions? Feel free to contact:
			</Heading>
			<Image
				alt="Photo of Katarina: contact her"
				src={katarina}
				maxW="250px"
				marginBottom="s32"
				padding="s8"
				largeTablet={[{ marginBottom: 's16' }]}
			/>
			<Heading
				as="h3"
				textAlign="center"
				marginBottom="s40"
				largeTablet={[{ marginBottom: 's16' }]}
			>
				Katarina Stojković
			</Heading>
			<Button
				as="a"
				target="_blank"
				rel="noopener noreferrer"
				href="https://www.linkedin.com/in/katarina-stojkovic8"
				variant="secondary"
				text="Join my network"
			/>
		</Flex>
	);
};

export default PersonCard;
