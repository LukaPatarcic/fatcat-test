import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { SectionWrapper } from '../../Atoms/SectionWrapper';

// Molecules
import CircledText from '../../Molecules/CircledText';
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Static Assets
const homeFlowchart = '../../../assets/images/home/home-flowchart.png';
const homeFlowchartMobile = '../../../assets/images/home/home-flowchart-mobile.png';

const HomeFlowchart: React.FC = () => {
	return (
		<SectionWrapper
			as="section"
			alignItems="center"
		>
			<Section
				as="div"
				w="ultra_narrow"
			>
				<Heading
					as="h2"
					textAlign="center"
					mobile={[{
						textAlign: 'left',
					}]}
				>
					The unique blend of our services makes your
					{' '}
					<Text
						textColor="purple"
					>
						business growth
					</Text>
					{' '}
					an exciting adventure, rather than a daunting task.
				</Heading>
				<Flex
					justifyContent="flex-end"
					transform="translate(60px, -10px)"
					largeTablet={[{ transform: 'translate(0px, -10px)' }]}
					mobile={[{
						justifyContent: 'center',
						transform: 'translate(0px,0px)',
						marginTop: 's16',
					}]}
				>
					<CircledText
						text="Let’s find the best solution for your business."
						w="186px"
					/>
				</Flex>
			</Section>
			<Wrapper
				hide="tablet"
				maxW="1200px"
				paddingX="s32"
			>
				<StaticImage
					alt="Image of a flowchart explaining the path from idea to finished product."
					placeholder="blurred"
					src={homeFlowchart}
				/>
			</Wrapper>
			<Wrapper
				show="tablet"
				marginTop="s48"
				paddingX="s32"
				maxW="70%"
				mobile={['fluid']}
			>
				<StaticImage
					alt="Image of a flowchart explaining the path from idea to finished product."
					placeholder="blurred"
					src={homeFlowchartMobile}
				/>
			</Wrapper>
		</SectionWrapper>
	);
};

export default HomeFlowchart;
