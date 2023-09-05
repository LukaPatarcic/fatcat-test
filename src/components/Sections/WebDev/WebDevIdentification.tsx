import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';

// Static Assets
const identification = '../../../assets/images/web-dev/web-dev-identification.png';

const WebDevIdentification: React.FC = () => {
	return (
		<IdentificationSection
			image={(
				<StaticImage
					alt=""
					src={identification}
					layout="constrained"
					placeholder="blurred"
				/>
			)}
			title={(
				<>
					<Text
						textColor="purple"
					>
						Are you experiencing
						{' '}
					</Text>
					poor website performance, low speed, SEO challenges, or a burden on your content team?
				</>
			)}
			description="Our tailored web development solutions can help you solve these problems, empowering you to thrive in the digital space."
		/>

	);
};

export default WebDevIdentification;
