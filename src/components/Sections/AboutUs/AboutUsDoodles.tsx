import React from 'react';

// Assets
import doodlesIcon from '../../../assets/images/about-us/doodles-icon.svg';
import doodles from '../../../assets/images/about-us/doodles.svg';
import doodlesSmaller from '../../../assets/images/about-us/doodlesSmaller.svg';
import arrow from '../../../assets/images/icons/arrow.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { SectionWrapper } from '../../Atoms/SectionWrapper';
import Button from '../../Atoms/Button';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';

const AboutUsDoodles: React.FC = () => {
	return (
		<SectionWrapper
			as="section"
		>
			<Section
				as="div"
			>
				<Flex
					direction="column"
					alignItems="center"
				>
					<Image
						alt="Doodles Logo"
						src={doodlesIcon}
						maxW="56px"
						marginBottom="s32"
						tablet={[{ maxW: '40px' }]}
					/>
					<Heading
						as="h3"
						marginBottom="s24"
						textAlign="center"
					>
						...but we always find a way to make things a bit funny
					</Heading>
					<Paragraph
						maxW="55%"
						tablet={['fluid']}
						textAlign="center"
						marginBottom="s48"
						mobile={[{ marginBottom: 's40' }]}
					>
						Check out our FatCat Doodles Instagram profile, and try to relate our cats with movie and real-life characters..
					</Paragraph>
					<Button
						as="a"
						text="Go to Instagram profile"
						href="https://www.instagram.com/fatcat.doodles/?hl=en"
						target="_blank"
						rel="noopener noreferrer"
					/>
				</Flex>
			</Section>
			<Flex
				position="relative"
				paddingTop="s48"
				direction="column"
				paddingBottom="s350"
				largeTablet={[{
					paddingBottom: 's0',
				}]}
			>
				<Image
					alt=""
					src={arrow}
					position="absolute"
					bottom="0"
					left="0"
					w="350px"
					desktopBig={[
						{
							top: '250px',
						},
						{
							w: '250px',
						},
					]}
					standardDesktop={[
						{
							w: '150px',
						},
					]}
					hide="desktop"
				/>
				<Image
					alt="Some work from FatCat Doodles profile"
					transform="translate(90px, -250px)"
					h="650px"
					zIndex={-1}
					alignSelf="center"
					src={doodles}
					position="absolute"
					w="auto"
					desktopBig={[
						{
							h: '600px',
						},
					]}
					hide="largeTablet"
				/>
				<Image
					alt="Some work from FatCat Doodles profile"
					overflow="hidden"
					alignSelf="center"
					zIndex={-1}
					src={doodlesSmaller}
					tablet={[{ w: '450px' }]}
					mobile={[{ w: '350px' }]}
					w="700px"
					show="largeTablet"
				/>
			</Flex>
		</SectionWrapper>
	);
};

export default AboutUsDoodles;
