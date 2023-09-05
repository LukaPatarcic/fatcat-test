import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Assets
import pawIcon from '../../../assets/images/icons/paw-icon.svg';

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { BR } from 'fatcat-ui-library/components/Atoms/Divider';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { SectionWrapper } from '../../Atoms/SectionWrapper';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';
import TextImageSection from '../../Molecules/Sections/TextImageSection';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Static Assets
const zoran = '../../../assets/images/about-us/zoran.png';
const dunja = '../../../assets/images/about-us/dunja.png';
const dara = '../../../assets/images/about-us/dara.png';

const AboutUsStory = () => {
	return (
		<SectionWrapper
			as="section"
		>
			<Wrapper
				hide="largeTablet"
				paddingBottom="s80"
			/>
			<Section
				as="div"
			>
				<Flex
					direction="column"
					justifyContent="center"
					alignItems="center"
					marginBottom="s80"
					tablet={[{ marginBottom: 's48' }]}
					mobile={[{ alignItems: 'flex-start' }]}
				>
					<Image
						src={pawIcon}
						h="40px"
						w="35px"
						alt="Cat's paw"
						mobile={[{ alignSelf: 'flex-start' }]}
					/>
					<Heading
						as="h2"
						textAlign="center"
						margin={['t8', 'b16']}
						mobile={['textLeft']}
					>
						Behind the Scenes:
						<BR />
						The FatCat Coders Story
					</Heading>
					<Paragraph
						textAlign="center"
						maxW="65%"
						tablet={['fluid']}
						mobile={['textLeft']}
					>
						Unveiling the adventure of FatCat Coders, driven by dedication, experience, and a shared vision.
					</Paragraph>
				</Flex>
			</Section>
			<TextImageSection
				aboutUsSection
				isFirst
				smaller
				image={(
					<StaticImage
						src={zoran}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				description={[
					'In 2018, Zoran Lazic founded FatCat Coders with the initial aim of delivering meaningful and successful solutions.',
					'His vast industry experience and passion for helping businesses succeed, turned the FatCat into a powerhouse for growth and innovation.',
					'Today, our thriving organization shares this vision, working together to drive businesses forward.',
				]}
				title={(
					<>
						<Text
							textColor="purple"
						>
							Success
							{' '}
						</Text>
						begins
						<BR />
						with a vision
					</>
				)}
			/>
			{' '}
			<TextImageSection
				aboutUsSection
				smaller
				isImageLeft
				image={(
					<StaticImage
						src={dunja}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				description={[
					'Our company name is inspired by Zoran\'s cat, Dunja—a 15-year-old lady, a feline ally of our CEO.',
					'Partly thanks to Dunja, we\'ve crafted a distinctive brand identity that not only sets us apart in the industry but also makes us easily recognized and memorable.',
					'While she may appear grumpy, Dunja is a lovable companion who enjoys cuddling at every chance she gets.',
				]}
				title={(
					<>
						The
						<Text
							textColor="purple"
						>
							{' '}
							inspiration
							{' '}
						</Text>
						behind our name
					</>
				)}
			/>
			{' '}
			<TextImageSection
				aboutUsSection
				isLast
				smaller
				image={(
					<StaticImage
						src={dara}
						layout="constrained"
						placeholder="blurred"
						objectFit="contain"
						quality={90}
						alt=""
					/>
				)}
				description={[
					'At FatCat Coders, we\'ve mastered the art of blending fun and professionalism. Our team, represented by delightful cat avatars, fosters a creative and enjoyable atmosphere.',
					'When it\'s time to get to work, we focus on delivering exceptional results, ensuring client satisfaction in a workspace where inspiration thrives.',
				]}
				title={(
					<>
						A place where
						<Text
							textColor="purple"
						>
							{' '}
							creativity
							{' '}
						</Text>
						and
						<Text
							textColor="purple"
						>
							{' '}
							expertise
							{' '}
						</Text>
						coexist
					</>
				)}
			/>
		</SectionWrapper>
	);
};

export default AboutUsStory;
