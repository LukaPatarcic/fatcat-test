import React from 'react';

// Assets
import react from '../../../../assets/images/software-dev/tech-logos/react.svg';
import gatsby from '../../../../assets/images/software-dev/tech-logos/gatsby.svg';
import next from '../../../../assets/images/software-dev/tech-logos/next.png';
import mysql from '../../../../assets/images/software-dev/tech-logos/mysql.svg';
import postgres from '../../../../assets/images/software-dev/tech-logos/postgres.svg';
import mongo from '../../../../assets/images/software-dev/tech-logos/mongo.svg';
import contentful from '../../../../assets/images/software-dev/tech-logos/contentful.svg';
import strapi from '../../../../assets/images/software-dev/tech-logos/strapi.png';
import aws from '../../../../assets/images/software-dev/tech-logos/aws.svg';
import azure from '../../../../assets/images/software-dev/tech-logos/azure.svg';
import gcp from '../../../../assets/images/software-dev/tech-logos/gcp.svg';
import node from '../../../../assets/images/software-dev/tech-logos/node.svg';
import digitalOcean from '../../../../assets/images/software-dev/tech-logos/digital-ocean.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';

// Molecules
import Section from '../../../Molecules/Section';
import Card from './Molecules/Card';

const tech = [
	{
		image: react,
		alt: 'React logo',
		title: 'React',
	},
	{
		image: react,
		alt: 'React Native logo',
		title: 'React Native',

	},
	{
		image: gatsby,
		alt: 'Gatsby logo',
		title: 'Gatsby',
	},
	{
		image: next,
		alt: 'Next JS logo',
		title: 'Next.js',
	},
	{
		image: mysql,
		alt: 'MySQL logo',
		title: 'MySQL',
	},
	{
		image: postgres,
		alt: 'Postgres logo',
		title: 'Postgres',
	},
	{
		image: mongo,
		alt: 'MongoDB logo',
		title: 'Mongo',
	},
	{
		image: contentful,
		alt: 'Contentful logo',
		title: 'Contentful',
	},
	{
		image: strapi,
		alt: 'Strapi logo',
		title: 'Strapi',
	},
	{
		image: aws,
		alt: 'AWS logo',
		title: 'AWS (Services)',
	},
	{
		image: azure,
		alt: 'Azure logo',
		title: 'Azure (Services)',
	},
	{
		image: digitalOcean,
		alt: 'Digital Ocean logo',
		title: 'Digital Ocean (Services)',
	},
	{
		image: gcp,
		alt: 'Google Services logo',
		title: 'GCP (Services)',
	},
	{
		image: node,
		alt: 'Node JS logo',
		title: 'Node.js',
	},
];

const TechnologyStack: React.FC = () => {
	return (
		<Section clearBottomPadding>
			<Flex
				direction="column"
				gap="80px"
				alignItems="center"
				tablet={[
					{
						gap: '48px',
					},
				]}
			>
				<Flex
					direction="column"
					gap="16px"
					alignItems="center"
					mobile={[{ alignItems: 'flex-start' }]}
				>
					<Heading
						as="h2"
						textAlign="center"
						mobile={[{ textAlign: 'left' }]}
					>
						Technology Stack
					</Heading>
					<Paragraph
						textAlign="center"
						maxW="770px"
						mobile={[{ textAlign: 'left' }]}
					>
						Using JavaScript as our primary language, we&apos;re creating
						fast and scalable applications with minimum loading time.
					</Paragraph>
				</Flex>
				<Grid
					gridTemplateColumns="repeat(7, 1fr)"
					desktop={[
						{
							gridTemplateColumns: 'repeat(5, 1fr)',
						},
					]}
					largeTablet={[
						{
							gridTemplateColumns: 'repeat(4, 1fr)',
						},
					]}
					tablet={[
						{
							gridTemplateColumns: 'repeat(3, 1fr)',
						},
					]}
					mobile={[
						{
							gridTemplateColumns: 'repeat(2, 1fr)',
						},
					]}
				>
					{tech.map(card => (
						<Wrapper
							key={card.title}
							padding={['l10', 'r10']}
						>
							<Card
								title={card.title}
								image={card.image}
								imageAlt={card.alt}
							/>
						</Wrapper>
					))}
				</Grid>
			</Flex>
		</Section>
	);
};

export default TechnologyStack;
