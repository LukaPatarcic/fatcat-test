import React from 'react';

// Assets
import pozarevacGimnazija from '../../../assets/images/about-us/gymnasium-pozarevac.png';
import palanackaGimnazija from '../../../assets/images/about-us/palanacka-gimnazija.png';

// Atoms
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import Button from '../../Atoms/Button';

// Molecules
import OurActionsCard from '../../Molecules/Cards/OurActionsCard';
import CardSection from '../../Molecules/Sections/CardSection';

const AboutUsOurActions: React.FC = () => {
	return (
		<CardSection
			title="We take care of our community"
			description="We believe in education and technology's power to shape the future. For this reason,
				we organized an IT equipment donation campaign to empower students and promote IT education."
			alignCenterMobile
			largerGapTablet
			backgroundColor="cream"
			cards={(
				<>

					<OurActionsCard
						title="High school in Pozarevac"
						description="At the moment, we are collecting technical equipment for a high school in Požarevac.
							It is necessary to collect: 11 desktop computers for cabinets, 7 laptops for teachers to conduct
							online classes, 5 printers, and one wall projector with canvas."
						markColor="mainGreen"
						markText="Active"
						button={(
							<Button
								as="a"
								text="Donate"
								w="fit-content"
								href="mailto:operations@fatcatcoders.com"
							/>
						)}
						imageAlt="Photo of gymnasium in Požarevac"
						image={pozarevacGimnazija}
					/>
					<OurActionsCard
						title="High school in Smederevska Palanka"
						description={(
							<>
								In September 2022, we successfully collected 38 computers and monitors for the fourth
								generation of students interested in computer science at Gymnasium Smederevska Palanka.
								We replaced outdated equipment and provided children with reliable, modern technology. See more at
								{' '}
								<Link
									target="_blank"
									rel="noopener noreferrer"
									to="https://www.youtube.com/watch?v=t7ig_fmMmKc&ab_channel=%D0%9F%D0%90%D0%9B%D0%90%D0%9D%D0%9A%D0%90%D0%94%D0%90%D0%9D%D0%90%D0%A1"
								>
									this link.
								</Link>
							</>
						)}
						markColor="primary"
						markText="Done"
						button={(
							<Button
								as="a"
								variant="ghost"
								text="Donate for other actions"
								href="mailto:operations@fatcatcoders.com"
								alignSelf="flex-start"
								paddingX="s0"
							/>
						)}
						image={palanackaGimnazija}
						imageAlt="Photo of gymnasium in Smederevska Palanka"
					/>
				</>
			)}
		/>
	);
};

export default AboutUsOurActions;
