import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { FloatingImagesWrapper } from './Quote.Atoms';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Assets
import textMark from '../../../../assets/images/home/quote/text-mark.svg';

// Static Assets
const left = '../../../../assets/images/home/quote/left.png';
const right = '../../../../assets/images/home/quote/right.png';
const top = '../../../../assets/images/home/quote/top.png';
const topTablet = '../../../../assets/images/home/quote/top-tablet.png';
const bottom = '../../../../assets/images/home/quote/bottom.png';
const bottomTablet = '../../../../assets/images/home/quote/bottom-tablet.png';

// @TODO: maybe add better image alt texts here

const Quote: React.FC = () => {
	return (
		<Section
			as="div"
			padding={['t192', 'b120']}
			scale
			backgroundColor="cream"
		>
			<FloatingImagesWrapper>
				<Flex
					justifyContent="center"
					alignItems="flex-start"
					gap="40px"
				>
					<Wrapper
						hide="tablet"
					>
						<StaticImage
							src={left}
							placeholder="blurred"
							class="quote-left-image"
							alt=""
						/>
					</Wrapper>
					<Flex
						direction="column"
						alignItems="center"
						gap="40px"
						w="60%"
						tablet={['fluid']}
						flexShrink="0"
					>
						<Wrapper
							hide="tablet"
							w="fit-content"
						>
							<StaticImage
								src={top}
								width={24}
								placeholder="blurred"
								alt=""
								class="quote-top-image"
							/>
						</Wrapper>
						<Wrapper
							show="tablet"
							w="fit-content"
						>
							<StaticImage
								src={topTablet}
								placeholder="blurred"
								quality={90}
								alt=""
							/>
						</Wrapper>
						<Heading
							as="h2"
							textAlign="center"
							largeTablet={[
								{
									textSize: 'h2Mobile',
								},
							]}
						>
							<Text whiteSpace="nowrap">
								<Image
									alt=""
									w="20px"
									display="inline-block"
									transform="translateY(-50%)"
									src={textMark}
								/>
								At
							</Text>
							{' '}
							the core of every successful business are the people who drive it
							{' '}
							<Text whiteSpace="nowrap">
								forward.
								<Image
									alt=""
									w="20px"
									display="inline-block"
									transform="translateY(50%)"
									src={textMark}
								/>
							</Text>
						</Heading>
						<Wrapper
							w="65%"
							largeTablet={['fluid']}
							hide="tablet"
						>
							<StaticImage
								src={bottom}
								placeholder="blurred"
								alt=""
								class="quote-bottom-image"
							/>
						</Wrapper>
						<Wrapper
							show="tablet"
						>
							<StaticImage
								src={bottomTablet}
								placeholder="blurred"
								quality={90}
								alt=""
							/>
						</Wrapper>
					</Flex>
					<Wrapper
						hide="tablet"
					>
						<StaticImage
							src={right}
							placeholder="blurred"
							alt=""
							class="quote-right-image"
						/>
					</Wrapper>
				</Flex>
			</FloatingImagesWrapper>
		</Section>
	);
};

export default Quote;
