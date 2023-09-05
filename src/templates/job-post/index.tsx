import React from 'react';
import { graphql } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';
import { useTheme } from 'styled-components';

// Assets
import flexibleHours from '../../assets/images/job/we-offer/flexible-hours.svg';
import insurance from '../../assets/images/job/we-offer/insurance.svg';
import macbook from '../../assets/images/job/we-offer/macbook.svg';
import maternity from '../../assets/images/job/we-offer/maternity.svg';
import eduDay from '../../assets/images/job/we-offer/pet-friendly.svg';
import remoteWork from '../../assets/images/job/we-offer/remote-work.svg';
import vacationDays from '../../assets/images/job/we-offer/vacation-days.svg';
import offerWorkday from '../../assets/images/job/we-offer/workday.svg';
import ellipseRight from '../../assets/images/job/elipse-right.svg';
import ellipseLeft from '../../assets/images/job/elipse-left.svg';
import ArrowLeft from '../../assets/images/svg-inline/job-arrow-left.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

// Molecules
import Offer from './Molecules/Offer';
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import Section from '../../components/Molecules/Section';
import SideMenu from './Molecules/SideMenu';

// Organisms
import JobForm from '../../components/Organisms/Forms/JobForm';
import { RenderWrapper } from './atoms';

// Contentful
import RichTextJob from '../../contentful/RichText/RichTextJob';

// Types
import { TContentfulJobPost } from '../../utils/types';

const offerData = [
	{
		icon: offerWorkday,
		text: '6-hour net workday',
	},
	{
		icon: flexibleHours,
		text: 'Flexible working hours',
	},
	{
		icon: remoteWork,
		text: 'Remote work',
	},
	{
		icon: macbook,
		text: 'Macbook',
	},
	{
		icon: vacationDays,
		text: '20 vacation days',
	},
	{
		icon: eduDay,
		text: 'Edu-day off',
	},
	{
		icon: insurance,
		text: 'Private health insurance',
	},
	{
		icon: maternity,
		text: 'Maternity coverage',
	},
];

interface JobPostProps {
	data: {
		jobPost: TContentfulJobPost;
	};
}

const Index: React.FC<JobPostProps> = (props) => {
	const {
		data: {
			jobPost,
		},
	} = props;
	const theme = useTheme();

	return (
		<main>
			<article>
				<Section>
					<Flex
						gap="80px"
					>
						<Flex
							direction="column"
							position="sticky"
							top="100px"
							hide="desktop"
							flexShrink="0"
							w="302px"
							paddingY="s32"
							paddingX="s24"
							backgroundColor="cream"
							gap="32px"
							h="fit-content"
							alignItems="flex-start"
							borderRadius="8px"
						>
							<Image
								src={ellipseLeft}
								alt=""
								maxW="40%"
								position="absolute"
								bottom="0"
								left="0"
								zIndex="-1"
							/>
							<Image
								src={ellipseRight}
								alt=""
								maxW="30%"
								position="absolute"
								top="0"
								right="0"
								zIndex="-1"
							/>
							<SideMenu jobPost={jobPost} />
						</Flex>
						<Flex
							direction="column"
						>
							<Link
								show="desktop"
								to="/careers#jobs"
								as={GatsbyLink}
								onClick={() => {
									const url = '/careers#jobs';
									window.location.href = url;
								}}
								marginBottom="s24"
							>
								<Flex
									gap="8px"
									alignItems="center"
								>
									<ArrowLeft />
									<Text>
										All roles
									</Text>
								</Flex>
							</Link>
							<Heading
								as="h1"
								textSize="h1Blog"
								margin={['b32']}
								fontWeight="medium"
							>
								{jobPost.title}
							</Heading>
							<Flex
								direction="column"
								show="desktop"
								w="300px"
								paddingBottom="s32"
								gap="32px"
								h="fit-content"
								borderRadius="8px"
							>
								<SideMenu jobPost={jobPost} basic />
							</Flex>
							<RenderWrapper>
								{RichTextJob(jobPost.jobContent)}
							</RenderWrapper>
							<Heading
								as="h2"
								margin={['b24', 't24']}
								padding={['b24']}
								borderBottom={`1px solid ${theme.color.gray20}`}
							>
								We offer
							</Heading>
							<Grid
								gridTemplateColumns="repeat(2, minmax(0, 1fr))"
								rowGap="32px"
							>
								{offerData.map(offer => (
									<Offer
										key={offer.text}
										icon={offer.icon}
										text={offer.text}
									/>
								))}
							</Grid>
						</Flex>
					</Flex>
				</Section>
			</article>
			<Section backgroundColor="tertiaryYellow">
				<Flex
					id="job-form"
					direction="column"
					alignItems="center"
				>
					<Heading
						as="h2"
						marginBottom="s16"
						textAlign="center"
					>
						Seems like a job made for you?
					</Heading>
					<Paragraph
						marginBottom="s56"
						textAlign="center"
					>
						Fill in the form and apply today. We’ll reach out shortly.
					</Paragraph>
					<Flex
						backgroundColor="tertiaryYellow"
						justifyContent="center"
						borderRadius="8px"
					>
						<JobForm
							jobName={jobPost.title}
							jobId={jobPost.jobId}
						/>
					</Flex>
				</Flex>
			</Section>
		</main>
	);
};

export default Index;

export const Head: React.FC<JobPostProps> = (props) => {
	const { data: { jobPost } } = props;
	return <HeadMeta meta={jobPost.meta || {}} />;
};

export const pageQuery = graphql`
    query JobPostQuery($slug: String!) {
        jobPost: contentfulJob(slug: {eq: $slug}) {
            ...SingleJobPostFields
        }
    }
`;
