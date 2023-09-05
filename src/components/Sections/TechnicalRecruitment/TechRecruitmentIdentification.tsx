import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';

// Static Assets
const identification = '../../../assets/images/tech-recruitment/tech-recruitment-identification.png';

const TechRecruitmentIdentification: React.FC = () => {
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
					Are you struggling to
					<Text
						textColor="purple"
					>
						{' '}
						find the right tech talent
						{' '}
					</Text>
					and navigate the complex hiring process? Tired of time-consuming interviews that bring no results?
				</>
			)}
		/>
	);
};

export default TechRecruitmentIdentification;
