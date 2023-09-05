import React from 'react';

// Assets
import worldMap from '../../../assets/images/hiring-worldwide.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import Section from '../Section';

interface CountriesSectionProps {
	clearTopPadding?: boolean;
	clearBottomPadding?: boolean;
}

const CountriesSection: React.FC<CountriesSectionProps> = (props) => {
	const {
		clearTopPadding,
		clearBottomPadding,
	} = props;

	return (
		<Section
			clearTopPadding={clearTopPadding}
			clearBottomPadding={clearBottomPadding}
		>
			<Flex
				direction="column"
				alignItems="center"
			>
				<Heading
					as="h2"
					marginBottom="s16"
					textAlign="center"
					mobile={[{ textAlign: 'left' }]}
				>
					Easy hiring from anywhere in the world.
				</Heading>
				<Paragraph
					marginBottom="s80"
					textAlign="center"
					maxW="70%"
					mobile={[
						'fluid',
						{
							marginBottom: 's48',
							textAlign: 'left',
						},
					]}
				>
					We&apos;re committed to finding the best candidates for our clients, no matter where they are located.
				</Paragraph>
				<Wrapper>
					<Image alt="Pins that showcase that our clients are located worldwide" src={worldMap} />
				</Wrapper>
			</Flex>
		</Section>

	);
};

CountriesSection.defaultProps = {
	clearTopPadding: false,
	clearBottomPadding: false,
};

export default CountriesSection;
