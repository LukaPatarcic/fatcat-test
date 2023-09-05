import React from 'react';

// Assets
import webTech from '../../../assets/images/web-dev/web-tech.svg';
import webTechMobile from '../../../assets/images/web-dev/web-stacks-mobile.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import Section from '../../Molecules/Section';
import NumberCard, { TrackRecordNumbers } from '../../Molecules/Cards/NumberCard';

const trackRecordNumbers: TrackRecordNumbers[] = [
	{
		num: 50,
		title: 'Faster load speed',
		symbol: '%',
	},
	{
		num: 20,
		title: 'Faster build time',
		symbol: '%',
	},
	{
		num: 2,
		title: 'SEO boost',
		symbol: 'x',
	},
];

const WebDevTechStack: React.FC = () => {
	return (
		<Section backgroundColor="cream">
			<Flex
				gap="130px"
				tablet={[
					'wrap',
					'contentCenter',
					{ gap: '32px' },
				]}
			>
				<Flex
					direction="column"
					w="60%"
					justifyContent="center"
					tablet={[
						'fluid',
					]}
				>
					<Heading
						as="h2"
						marginBottom="s16"
						maxW="500px"
						tablet={[
							'textCenter',
							'fluid',
						]}
					>
						With cutting-edge tech, we ensure efficiency and seamless scalability
					</Heading>
					<Paragraph
						marginBottom="s48"
						maxW="500px"
						tablet={[
							'textCenter',
							'fluid',
						]}
					>
						We use technologies that eneble us to deliver fast, high-quality and easy-to-manage websites that are optimized for search engines.
					</Paragraph>
					<Flex
						wrap
						gap="20px"
						justifyContent="center"
						mobile={[{ gap: '0px' }]}
					>
						{trackRecordNumbers.map(record => (
							<Wrapper
								key={record.title}
								w="30%"
								mobile={[
									{
										w: '100%',
									},
								]}
							>
								<NumberCard
									{...record}
									textLeft
								/>
							</Wrapper>
						))}
					</Flex>
				</Flex>
				<Image
					src={webTech}
					maxH="550px"
					w="auto"
					hide="tablet"
					alt="Our tech-stack for web development: Gatsby, Contentful, NodeJS, React, NextJS"
				/>
				<Image
					src={webTechMobile}
					show="tablet"
					maxH="166px"
					alt="Our tech-stack for web development: Gatsby, Contentful, NodeJS, React, NextJS"
				/>
			</Flex>
		</Section>

	);
};

export default WebDevTechStack;
