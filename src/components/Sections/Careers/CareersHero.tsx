import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/hero-images/careers-hero-2.png';

const CareersHero: React.FC = () => {
	return (
		<HeroSection
			title={(
				<>
					Navigate your
					{' '}
					<Text
						fontWeight="medium"
					>
						career path
					</Text>
					{' '}
					with us
				</>
			)}
			description="Enjoy a good work-life balance in a company where your voice matters."
			button
			buttonText="See open roles"
			image={(
				<StaticImage
					src={heroImage}
					layout="constrained"
					placeholder="blurred"
					objectFit="contain"
					quality={90}
					alt=""
				/>
			)}
			scrollTo="#jobs"
		/>
	);
};

export default CareersHero;
