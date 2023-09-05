import * as React from 'react';
import {
	GatsbyImage,
	IGatsbyImageData,
} from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

// @TODO: Change alt text

const scaleBase = 1;
const scaleBaseLargeTablet = 0.8;
const scaleBaseMobile = 0.9;

const logoMeta: Record<string, {
	alt: string;
	scale?: number;
}> = {
	insightful: {
		scale: 1,
		alt: 'Insightful logo',
	},
	calendly: {
		alt: 'Calendly logo',
		scale: 1.1,
	},
	'fox-vision': {
		alt: 'FoxVision logo',
		scale: 1.1,
	},
	solsea: {
		alt: 'Solesea logo',
		scale: 1,
	},
	bizly: {
		alt: 'Bizly logo',
		scale: 0.9,
	},
	shapa: {
		alt: 'Shapa logo',
		scale: 1,
	},
	cart: {
		alt: 'Cart logo',
		scale: 0.8,
	},
	'36px': {
		alt: '36px logo',
		scale: 0.7,
	},
	celsius: {
		alt: 'Celsius logo',
		scale: 1.1,
	},
	'cloud-horizon': {
		alt: 'Cloud Horizon logo',
		scale: 1.3,
	},
	cloudberrie: {
		alt: 'Cloudberrie logo',
		scale: 1.3,
	},
	'convert-more': {
		alt: 'Convert More logo',
		scale: 1.3,
	},
	daon: {
		alt: 'Daon logo',
		scale: 0.9,
	},
	'fly-there': {
		alt: 'Fly There logo',
		scale: 0.85,
	},
	fonduu: {
		alt: 'Fonduu logo',
		scale: 0.9,
	},
	growthmill: {
		alt: 'Growthmill logo',
		scale: 0.9,
	},
	hunch: {
		alt: 'Hunch logo',
		scale: 0.95,
	},
	hurricane: {
		alt: 'Hurricane logo',
		scale: 0.9,
	},
	holywally: {
		alt: 'Holywally logo',
		scale: 1,
	},
	janea: {
		alt: 'Janea logo',
		scale: 0.8,
	},
	rasa: {
		alt: 'Rasa logo',
		scale: 0.45,
	},
	showroom: {
		alt: 'Showroom logo',
	},
	'spotted-zebra': {
		alt: 'SpottedZebra logo',
		scale: 1.2,
	},
	vitamed: {
		alt: 'Vitamed logo',
		scale: 1.1,
	},
	wio: {
		alt: 'Wio logo',
		scale: 0.6,
	},
};

const ClientBanner = () => {
	const data: {
		clientLogos: {
			nodes: {
				id: string;
				name: string;
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
				};
			}[];
		};
	} = useStaticQuery(graphql`
		query {
			clientLogos: allFile(
				filter: {
					sourceInstanceName: {eq: "images"},
					relativeDirectory: {eq: "client-logos"},
					extension: {eq: "png"}
				}
			) {
				nodes {
					id
					name
					childImageSharp {
						gatsbyImageData(
							placeholder: BLURRED,
							quality: 90,
							layout: CONSTRAINED
						)
					}
				}
			}
		}
	`);

	const { clientLogos } = data;

	const scrollContent = (
		<Flex
			alignItems="center"
			w="fit-content"
			animation={['horizontalScroll', '150s linear infinite']}
		>
			{clientLogos.nodes.map(logo => (
				<Flex
					key={logo.id}
					w="150px"
					justifyContent="center"
					margin={['l80', 'r80']}
					transform={
						`scale(${(logoMeta[logo.name].scale ?? 1) * scaleBase})`
					}
					largeTablet={[
						{
							margin: ['l40', 'r40'],
							transform: `scale(${(logoMeta[logo.name].scale ?? 1) * scaleBaseLargeTablet})`,
						},
					]}
					mobile={[
						{
							w: '100px',
							margin: ['l24', 'r24'],
							transform: `scale(${(logoMeta[logo.name].scale ?? 1) * scaleBaseMobile})`,
						},
					]}
				>
					<GatsbyImage
						image={logo.childImageSharp.gatsbyImageData}
						alt={logoMeta[logo.name].alt ?? ''}
					/>
				</Flex>
			))}
		</Flex>
	);

	return (
		<Flex
			as="section"
			overflow="hidden"
			padding={['t32', 'b32']}
			tablet={[
				{
					padding: ['t24', 'b24'],
				},
			]}
			mobile={[
				{
					padding: ['t16', 'b16'],
				},
			]}
		>
			{scrollContent}
			{scrollContent}
			{scrollContent}
		</Flex>
	);
};

export default ClientBanner;
