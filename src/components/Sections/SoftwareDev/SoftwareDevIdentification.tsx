import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';

// Static Assets
const identification = '../../../assets/images/software-dev/identification.png';

const SoftwareDevIdentification: React.FC = () => {
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
					If you struggle to communicate your vision, define requirements for your project, or find a
					{' '}
					<Text
						textColor="purple"
					>
						reliable tech partner
					</Text>
					, we are here to help.
				</>
			)}
			description={"We're committed to bringing your idea to life and creating a product that will help your business thrive."}
		/>
	);
};

export default SoftwareDevIdentification;
