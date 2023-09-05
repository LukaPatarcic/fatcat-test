import React from 'react';

// Assets
import ourProcess1 from '../../../assets/images/careers/our-process/process-1.svg';
import ourProcess2 from '../../../assets/images/careers/our-process/process-2.svg';
import ourProcess3 from '../../../assets/images/careers/our-process/process-3.svg';
import ourProcess4 from '../../../assets/images/careers/our-process/process-4.svg';
import ourProcess5 from '../../../assets/images/careers/our-process/process-5.svg';
import info from '../../../assets/images/careers/info.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

// Molecules
import RecruitmentProcessCard from '../../Molecules/Cards/RecruitmentProcessCard/RecruitmentProcessCard';
import Section from '../../Molecules/Section';

const CareersRecruitmentProcess: React.FC = () => {
	return (
		<Section>
			<Flex
				direction="column"
				alignItems="center"
			>
				<Heading
					as="h2"
					textAlign="center"
					marginBottom="s80"
					largeTablet={[{
						marginBottom: 's48',
					}]}
					mobile={[{ textAlign: 'left' }]}
				>
					Our recruitment process - what to expect
				</Heading>
				<Flex
					direction="column"
					tablet={[{ gap: '32px' }]}
				>
					<RecruitmentProcessCard
						title="Prescreening questionnaire"
						description="You’ll receive a questionnaire that helps us learn more about your experience and salary expectations."
						image={ourProcess1}
					/>
					<RecruitmentProcessCard
						title="A role-related task"
						description="A role-related task that you will have to complete so that we can assess your skills and knowledge."
						image={ourProcess2}
						side="right"
					/>
					<RecruitmentProcessCard
						title="HR interview"
						description="In this call, we will answer all of your questions regarding the company and determine if we are a good match."
						image={ourProcess3}
					/>
					<RecruitmentProcessCard
						title="Tech interview"
						description="An interview to discuss your task solution and learn more about your technical and team experiences."
						image={ourProcess4}
						side="right"
					/>
					<RecruitmentProcessCard
						title="Interview with our Chief Cat"
						description="A friendly chat with the CEO to confirm that you are the right fit for the company culture."
						image={ourProcess5}
					/>
				</Flex>
				<Flex
					direction="column"
					justifyContent="senter"
					marginTop="s80"
					scale
					mobile={[{ alignItems: 'flex-start' }]}
				>
					<Image
						src={info}
						alt=""
						w="24px"
						marginBottom="s16"
						mobile={[{
							alignSelf: 'flex-start',
							w: '16px',
							marginBottom: 's8',
						}]}
					/>
					<Paragraph
						maxW="50%"
						alignSelf="center"
						textAlign="center"
						textColor="gray60"
						tablet={['fluid']}
						mobile={[{ textAlign: 'left' }]}
					>
						Some of the selection steps may differ or deviate, depending on the position you are applying for.
					</Paragraph>
				</Flex>
			</Flex>
		</Section>
	);
};

export default CareersRecruitmentProcess;
