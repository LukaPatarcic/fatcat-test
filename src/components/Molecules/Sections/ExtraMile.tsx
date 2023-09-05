import React from 'react';
import { css } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { SectionWrapper } from '../../Atoms/SectionWrapper';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Assets
import arrow from '../../../assets/images/app-dev/extra-mile/arrow.svg';
import arrowVertical from '../../../assets/images/app-dev/extra-mile/arrow-vertical.svg';

interface ExtraMileProps {
	title: string;
	rightImage: string;
	rightImageAlt: string;
	bottomImage: string;
	bottomImageAlt: string;
	tabletImage: string;
	tabletImageAlt: string;
}

const ExtraMile: React.FC<ExtraMileProps> = (props) => {
	const {
		title,
		rightImage,
		rightImageAlt,
		bottomImage,
		bottomImageAlt,
		tabletImage,
		tabletImageAlt,
	} = props;

	return (
		<SectionWrapper
			as="section"
			direction="column"
			mobile={[
				{
					minH: 'unset',
				},
			]}
			overflow="hidden"
		>
			<Section
				as="div"
				position="relative"
			>
				<Image
					alt=""
					src={arrow}
					position="absolute"
					top="0"
					left="0"
					w="350px"
					largeDesktop={[
						{
							w: '250px',
						},
					]}
					desktopBig={[
						{
							w: '150px',
						},
					]}
					standardDesktop={[
						{
							display: 'none',
						},
					]}
				/>
				<Flex
					gap="32px"
					tablet={[
						'column',
						'alignItemsCenter',
					]}
				>
					<Flex
						direction="column"
						gap="0"
						w="70%"
						tablet={['fluid']}
					>
						<Heading
							as="h2"
						>
							{title}
						</Heading>
						<Image
							alt=""
							src={arrowVertical}
							maxH="100px"
							show="standardDesktop"
							hide="desktop"
						/>
						<Image
							alt={tabletImageAlt}
							src={tabletImage}
							show="tablet"
						/>
					</Flex>
					<Flex
						w="30%"
						hide="tablet"
					>
						<Image
							alt={rightImageAlt}
							src={rightImage}
							h="500px"
							w="auto"
							standardDesktop={[
								{
									h: '400px',
								},
							]}
							desktop={[
								{
									h: '300px',
								},
							]}
						/>
					</Flex>
				</Flex>
			</Section>
			<Section
				as="div"
				w="fluid"
				styled={css`margin-top: -168px;`}
				desktop={[
					{
						styled: css`margin-top: -68px;`,
					},
				]}
				zIndex="1"
				hide="tablet"
			>
				<Flex
					justifyContent="flex-end"
					wideDesktop={['justifyContentCenter']}
				>
					<Image
						maxW="2000px"
						w="90%"
						desktop={['fluid']}
						alt={bottomImageAlt}
						src={bottomImage}
					/>
				</Flex>
			</Section>
		</SectionWrapper>
	);
};

export default ExtraMile;
