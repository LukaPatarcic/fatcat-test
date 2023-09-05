import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import HeroSection from '../../Molecules/Sections/HeroSection';

// Static Assets
const heroImage = '../../../assets/images/employer-of-record/employer-of-record-hero.png';

const EmployerOfRecordHero: React.FC = () => {
	return (
		<HeroSection
			backgroundColor="mainYellow"
			title={(
				<>
					Simplify
					<Text
						fontWeight="medium"
					>
						{' '}
						expansion
						{' '}
					</Text>
					to Serbia with our HR and payroll service
				</>
			)}
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

export default EmployerOfRecordHero;
