import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';

// Static Assets
const identification = '../../../assets/images/recruiter-on-demand/rod-identification.png';

const RecruiterOnDemandIdentification: React.FC = () => {
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
					Do you have numerous open positions but not enough staff to handle everything, and you seek a temporary
					<Text
						textColor="purple"
					>
						{' '}
						recruitment team expansion
					</Text>
					, without hiring a full-time recruiter?
				</>
			)}
		/>
	);
};
export default RecruiterOnDemandIdentification;
