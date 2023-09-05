import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/hero-images/home-hero.png';

const HomeHero = () => {
	return (
		<HeroSection
			isHome
			title={(
				<>
					<Text
						fontWeight="medium"
					>
						Software and staffing solutions
					</Text>
					{' '}
					that drive success
				</>
			)}
			image={(
				<StaticImage
					src={heroImage}
					layout="constrained"
					placeholder="blurred"
					objectFit="contain"
					alt=""
				/>
			)}
		/>
	);
};

export default HomeHero;
