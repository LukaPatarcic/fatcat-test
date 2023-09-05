import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';

// Assets
const identification = '../../../assets/images/hiring-partner/hiring-partner-identification.png';

const HiringPartnerIdentification: React.FC = () => {
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
						Are you facing
						{' '}
					</Text>
					such as long hiring processes, limited in-house resources, difficulty adapting to changing hiring trends, and above all, falling to secure the right tech talent?
				</>
			)}
		/>
	);
};

export default HiringPartnerIdentification;
