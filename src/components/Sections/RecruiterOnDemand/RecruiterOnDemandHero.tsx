import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/recruiter-on-demand/rod-hero.png';

const RecruiterOnDemandHero: React.FC = () => {
	return (
		<HeroSection
			backgroundColor="mainYellow"
			title={(
				<>
					Expand your
					recruitment team,
					<Text
						fontWeight="medium"
					>
						{' '}
						fast.
					</Text>
				</>
			)}
			description="We offer fully-equipped recruiters for short or long-term engagement with full access to all our networks and tools."
			button
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
		/>
	);
};

export default RecruiterOnDemandHero;
