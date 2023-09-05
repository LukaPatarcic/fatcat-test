import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/hero-images/app-dev-hero.png';

const AppDevHero = () => {
	return (
		<HeroSection
			title={(
				<>
					From Ideas to
					{' '}
					<Text
						fontWeight="medium"
					>
						High-Performing Apps
					</Text>
				</>
			)}
			description="We build high-performing web, mobile or desktop applications based on modern technologies that will turn your idea into a successful product."
			button
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

export default AppDevHero;
