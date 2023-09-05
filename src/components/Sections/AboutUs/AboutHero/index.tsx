import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Assets
import arrow from '../../../../assets/images/about-us/about-arrow.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { StaticImageWrapper } from './atoms';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section/index';

// Static Assets
const aboutHero = '../../../../assets/images/about-us/about-hero.png';
const aboutHeroSmaller = '../../../../assets/images/about-us/about-hero-smaller.png';

const AboutHero: React.FC = () => {
	return (
		<Flex
			backgroundColor="cream"
			position="relative"
			alignItems="center"
			overflow="visible"
		>
			<Flex
				alignItems="center"
				direction="column"
				largeTablet={[
					{
						gap: '40px',
						paddingBottom: 's24',
					},
				]}
			>
				<Section
					padding={['t168']}
					largeTablet={[{ paddingTop: 's120' }]}
					mobile={[{ paddingTop: 's48' }]}
				>
					<Flex
						w="70%"
						direction="column"
						alignSelf="center"
						largeTablet={[
							'fluid',
						]}
					>
						<Heading
							as="h1"
							margin={['b32']}
						>
							FatCat is all about
							{' '}
							<Text
								fontWeight="medium"
							>
								growing together.
							</Text>
						</Heading>
						<Image
							alt=""
							src={arrow}
							position="absolute"
							top="35%"
							right="30%"
							w="200px"
							desktopBig={[{ right: '250px' }]}
							standardDesktop={[
								{
									right: '150px',
								},
							]}
							hide="desktop"
						/>
					</Flex>
				</Section>
				<Flex
					direction="column"
					alignItems="center"
				>
					<StaticImageWrapper
						hide="largeTablet"
						transform="translateY(80px)"
					>
						<StaticImage
							src={aboutHero}
							alt="Many cat avatars on one place"
							placeholder="blurred"
						/>
					</StaticImageWrapper>
					<StaticImageWrapper
						show="largeTablet"
					>
						<StaticImage
							src={aboutHeroSmaller}
							alt="Many cat avatars on one place"
							placeholder="blurred"
						/>
					</StaticImageWrapper>
				</Flex>
			</Flex>
		</Flex>

	);
};

export default AboutHero;
