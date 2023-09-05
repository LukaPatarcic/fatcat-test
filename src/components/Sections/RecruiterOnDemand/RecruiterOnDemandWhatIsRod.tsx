import React from 'react';

// Assets
import fullLifeCycle from '../../../assets/images/recruiter-on-demand/full-life-cycle.svg';
import jobAds from '../../../assets/images/recruiter-on-demand/job-ads-icon.svg';
import onboarding from '../../../assets/images/recruiter-on-demand/onboarding-icon.svg';
import sourcing from '../../../assets/images/recruiter-on-demand/sourcing-icon.svg';
import yellowArrow90 from '../../../assets/images/icons/yellow-arrow-90deg.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';
import Button from '../../Atoms/Button';

// Molecules
import SimpleCard from '../../Molecules/Cards/SimpleCard';
import Section from '../../Molecules/Section';
import CircledText from '../../Molecules/CircledText';

const RecruiterOnDemandWhatIsRod: React.FC = () => {
	return (
		<Section>
			<Flex
				alignItems="center"
				direction="column"
			>
				<Flex
					direction="column"
					alignItems="center"
					marginBottom="s20"
					maxW="70%"
					tablet={[
						'fluid',
						{
							marginBottom: 's36',
						},
					]}
				>
					<Heading
						as="h2"
						textAlign="center"
						marginBottom="s16"
						mobile={[{ textAlign: 'left' }]}
					>
						What is Recruiter on Demand
					</Heading>
					<Paragraph
						marginBottom="s16"
						textAlign="center"
						mobile={[{
							textAlign: 'left',
							marginBottom: 's8',
						}]}
					>
						A Recruiter on Demand is an instant extension of your recruiting team. You get a full-time
						recruiter precisely when needed and for as long as required to help you fill vacancies based on your priorities.
					</Paragraph>
					<Flex
						justifyContent="center"
					>
						<CircledText
							w="164px"
							text="Our Recruiter can help with:"
							arrow={(
								<Image
									alt=""
									w="40px"
									src={yellowArrow90}
									tablet={[{ w: '25px' }]}
								/>
							)}
						/>
					</Flex>
				</Flex>
				<Grid
					gap="40px"
					rowGap="80px"
					gridTemplateColumns="repeat(4, minmax(0, 1fr))"
					justifyContent="center"
					w="sauto"
					largeTablet={[
						{
							gap: '24px',
							gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
						},
					]}
					tablet={[
						{
							gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
							maxW: '60%',
						},
					]}
					mobile={[{
						maxW: '80%',
						alignSelf: 'flex-start',
					}]}
				>
					<SimpleCard
						title="Full life-cycle recruitment process"
						image={fullLifeCycle}
					/>
					<SimpleCard
						title="JobAds and LinkedIn promotions"
						image={jobAds}
					/>
					<SimpleCard
						title="Sourcing and interviewing candidates"
						image={sourcing}
					/>
					<SimpleCard
						title="Onboarding of your newly hired recruiter"
						image={onboarding}
					/>
				</Grid>
				<Button
					text="Get your recruiter"
					to="#lets-work-together"
					variant="primary"
					marginTop="s80"
					mobile={[{ margin: ['t32'] }]}
				/>
			</Flex>
		</Section>
	);
};
export default RecruiterOnDemandWhatIsRod;
