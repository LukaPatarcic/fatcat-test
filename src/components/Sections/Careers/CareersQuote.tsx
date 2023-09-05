import React from 'react';

// Assets
import zoran from '../../../assets/images/careers/zoran.png';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';

const CareersQuote: React.FC = () => {
	return (
		<Section>
			<Flex
				direction="column"
				minH="100vh"
				alignItems="center"
				justifyContent="center"
			>
				<Heading
					as="h2"
					maxW="62%"
					textAlign="center"
					marginBottom="s24"
					largeTablet={[{ maxW: '100%' }]}
				>
					Lorem ipsum dolor sit amet,
					<Text textColor="purple"> consectetur adipiscing elit, </Text>
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor dolorem.
				</Heading>
				<Image
					src={zoran}
					alt=""
					w="56px"
					marginBottom="s24"
				/>
				<Paragraph
					marginBottom="s8"
					textColor="gray60"
				>
					Zoran Lazić
				</Paragraph>
				<Paragraph
					textColor="gray60"
				>
					CEO @ FatCat Coders
				</Paragraph>
			</Flex>
		</Section>
	);
};

export default CareersQuote;
