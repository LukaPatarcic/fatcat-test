import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';

// Static Assets
const identification = '../../../assets/images/employer-of-record/employer-of-record-identification.png';

const EmployerOfRecordIdentification: React.FC = () => {
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
					Want to legally
					<Text
						textColor="purple"
					>
						{' '}
						hire employees in Serbia
					</Text>
					, but don’t have an entity? Let us help.
				</>
			)}
			description="We handle onboarding, payroll, benefits and all compliances, making sure your employees are satisfied and supported."
		/>
	);
};

export default EmployerOfRecordIdentification;
