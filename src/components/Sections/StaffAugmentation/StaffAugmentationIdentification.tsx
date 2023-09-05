import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';

// Static Assets
const identification = '../../../assets/images/staff-augmentation/staff-augmentation-identification.png';

const StaffAugmentationIdentification: React.FC = () => {
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
					talent shortages, tight deadlines, fluctuating workloads, or budget constraints?
				</>
			)}
			description="Discover how staff augmentation can solve these challenges."
		/>
	);
};

export default StaffAugmentationIdentification;
