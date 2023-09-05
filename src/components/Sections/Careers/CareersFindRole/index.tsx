import React from 'react';

// Assets
import arrow from '../../../../assets/images/careers/form/arrow.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

// Molecules
import Section from '../../../Molecules/Section';
import PersonCard from './Molecules/PersonCard';

// Organism
import JobForm from '../../../Organisms/Forms/JobForm';

const CareersFindRole: React.FC = () => {
	return (
		<Section
			position="relative"
			backgroundColor="tertiaryYellow"
		>
			<Flex
				direction="column"
				gap="80px"
				largeTablet={[
					{
						gap: '48px',
					},
				]}
			>
				<Flex
					direction="column"
					alignItems="center"
				>
					<Heading
						as="h2"
						marginBottom="s16"
						textAlign="center"
						mobile={[{ textAlign: 'left' }]}
					>
						Didn’t find the role that suits you?
					</Heading>
					<Paragraph
						textAlign="center"
						maxW="70%"
						largeTablet={['fluid']}
						mobile={[{ textAlign: 'left' }]}
					>
						Fill in the form below and we&apos;ll contact you if there is an opening in the future that you may be the best fit for
					</Paragraph>
				</Flex>
				<Flex
					alignItems="center"
					gap="140px"
					desktop={[{
						gap: '48px',
					}]}
					largeTablet={['column']}
				>
					<Flex
						backgroundColor="tertiaryYellow"
						borderRadius="0 8px 8px 0"
						largeTablet={[{
							borderRadius: '0px',
							justifyContent: 'center',
						}]}
					>
						<JobForm
							careers
							jobId={64423}
							jobName="Talent pool"
						/>
					</Flex>
					<PersonCard />
				</Flex>
			</Flex>
			<Image
				hide="standardDesktop"
				position="absolute"
				alt=""
				src={arrow}
				w="320px"
				top="50%"
				right="0"
				transform="translate(0, 50%) rotate(-10deg);"
				largeDesktop={[{
					w: '150px',
				}]}
			/>
		</Section>
	);
};

export default CareersFindRole;
