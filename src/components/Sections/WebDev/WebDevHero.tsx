import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/hero-images/web-dev-hero.png';

const WebDevHero = () => {
	return (
		<HeroSection
			title={(
				<>
					<Text
						fontWeight="medium"
					>
						Create
					</Text>
					{' '}
					fast, modern, and easy-to-manage websites.
				</>
			)}
			button
			image={(
				<StaticImage
					src={heroImage}
					layout="constrained"
					objectFit="contain"
					placeholder="blurred"
					alt=""
				/>
			)}
		/>
	);
};

export default WebDevHero;
