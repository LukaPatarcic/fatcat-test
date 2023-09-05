import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/tech-recruitment/tech-recruitment-hero.png';

const TechnicalRecruitmentHero: React.FC = () => {
	return (
		<HeroSection
			backgroundColor="mainYellow"
			title={(
				<>
					Hire qualified
					<Text
						fontWeight="medium"
					>
						{' '}
						IT professionals
					</Text>
				</>
			)}
			description="Our Technical Recruitment service is designed to connect you with the right professionals quickly and efficiently, allowing you to focus on your core business."
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

export default TechnicalRecruitmentHero;
