import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/hero-images/hiring-partner-hero.png';

const HiringPartnerHero: React.FC = () => {
	return (
		<HeroSection
			backgroundColor="mainYellow"
			title={(
				<>
					<Text
						fontWeight="medium"
					>
						Hiring
						{' '}
					</Text>
					is hard.
					<br />
					We make it
					<Text
						fontWeight="medium"
					>
						{' '}
						easy.
					</Text>
				</>
			)}
			description="Our technical background helps us understand the hiring challenges faced by tech companies and provide a range of services for overcoming them."
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

export default HiringPartnerHero;
