import React from 'react';

// Assets
import serbia from '../../../assets/images/about-us/serbia-image.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';

// Molecules
import Section from '../../Molecules/Section';
import SimpleCard from '../../Molecules/Cards/SimpleCard';

const cards = [
	{
		title: 'Engineering talent',
		description: 'Belgrade is a hub for higly-skilled engineers, supplying our team with top-notch talent to drive our projects.',
	},
	{
		title: 'Proximity',
		description: 'Positioned centrally in Europe, Belgrade enables seamless collaboration with clients, ensuring smooth communication across time zones.',
	},
	{
		title: 'Cultural affinity',
		description: 'With a shared European mindset, our Serbian teams easily establish strong working relationships with diverse clients.',
	},
	{
		title: 'English language proficiency',
		description: 'Serbia ranked 17th out of 100 countries on the English Proficiency Index in 2019, scoring 61.30, which is considerably high.',
	},
];

const AboutUsOurRoots: React.FC = () => {
	return (
		<Section>
			<Flex
				direction="column"
				justifyContent="center"
				alignItems="center"
				position="relative"
				background={`url(${serbia}) center bottom / auto 100%  no-repeat`}
				h="300px"
				marginBottom="s32"
				scale
			>
				<Heading
					as="h2"
					marginBottom="s16"
					textAlign="center"
				>
					A little about
					our roots.
				</Heading>
				<Paragraph
					textAlign="center"
					maxW="70%"
					tablet={['fluid']}
				>
					As a company located in Belgrade, Serbia, FatCat Coders is surrounded by a wealth of talent and innovation. Here are some facts about our hometown that contribute to our success:
				</Paragraph>
			</Flex>
			<Grid
				gridTemplateColumns="repeat(2, minmax(0, 1fr));"
				justifyItems="center"
				rowGap="56px"
				gap="40px"
				largeTablet={[{
					gridTemplateColumns: 'repeat(1, minmax(0, 1fr));',
					gap: '32px',
				}]}
			>
				{cards.map(card => (
					<SimpleCard
						key={card.title}
						title={card.title}
						description={card.description}
						alignItemsLeft
						titleGrow={false}
					/>
				))}
			</Grid>
		</Section>
	);
};

export default AboutUsOurRoots;
