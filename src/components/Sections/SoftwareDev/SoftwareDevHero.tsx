import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/software-dev/software-dev-hero.png';
const heroImageMobile = '../../../assets/images/software-dev/software-dev-hero-mobile.png';

const SoftwareDevHero = () => {
	return (
		<HeroSection
			title={(
				<>
					<Text
						fontWeight="medium"
					>
						Software solutions
					</Text>
					{' '}
					for all business needs
				</>
			)}
			description="We offer a wide range of software development services that enable you to build high performing apps or fast and efficient websites that convert."
			button
			largerImageWidth
			image={(
				<>
					<Flex
						hide="mobile"
						w="fit-content"
					>
						<StaticImage
							src={heroImage}
							layout="constrained"
							placeholder="blurred"
							objectFit="contain"
							alt=""
						/>
					</Flex>
					<Flex
						show="mobile"
						w="fit-content"
					>
						<StaticImage
							src={heroImageMobile}
							layout="constrained"
							placeholder="blurred"
							objectFit="contain"
							alt=""
						/>
					</Flex>
				</>
			)}
		/>
	);
};

export default SoftwareDevHero;
