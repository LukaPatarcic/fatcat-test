import React from 'react';

// Assets
import applicationDevelopment from '../../../assets/images/icons/application-development.svg';
import websiteDevelopment from '../../../assets/images/icons/website-development.svg';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import CardSection from '../../Molecules/Sections/CardSection';
import CreamCard from '../../Molecules/Cards/CreamCard';

const SoftwareDevOurSolutions = () => {
	return (
		<CardSection
			alignCenterMobile
			eyebrow="Software Development Solutions"
			title={(
				<>
					Solutions tailored to make your idea a reality: From napkin sketch to fully&#8209;fledged
					product.
				</>
			)}
			cards={(
				<>
					<CreamCard
						title="Application development"
						description={(
							<>
								We build high-performing
								<Text fontWeight="medium"> web, mobile or desktop applications </Text>
								based on modern technologies that will turn your idea into a successful product.
							</>
						)}
						image={applicationDevelopment}
						url="/software-development/application-development"
					/>
					<CreamCard
						title="Website development"
						description={(
							<>
								We cover a broad range of solutions, from
								<Text fontWeight="medium"> CMS </Text>
								to
								<Text fontWeight="medium">  e-commerce</Text>
								, ensuring you get a fast, easy-to-maintain, and secure website that converts.
							</>
						)}
						image={websiteDevelopment}
						url="/software-development/website-development"
					/>
				</>
			)}
		/>
	);
};

export default SoftwareDevOurSolutions;
