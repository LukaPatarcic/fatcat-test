import React from 'react';

// Types
import { TContentfulHero, TGatsbyImage } from '../../../utils/types';
import ContentfulHeading from '../../ContentfulHeading';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import ContentfulLink from '../../ContentfulLink';
import ContentfulImage from '../../ContentfulImage';

const HeroV1: React.FC<Omit<TContentfulHero, 'variant'>> = (props) => {
	const {
		asset,
		title,
		description,
		links,
	} = props;
	return (
		<Flex
			gap="42px"
			tablet={['column']}
		>
			<Flex
				direction="column"
				w="60%"
				tablet={[{ w: '100%' }]}
			>
				<ContentfulHeading {...title} margin={['b0']} textAlign="start" />
				{description && (
					<Paragraph
						margin={['t32']}
					>
						{description}
					</Paragraph>
				)}
				{links && links.length && (
					<Flex
						gap="24px"
						margin={['t48']}
						tablet={['column']}
					>
						{links?.map((link, index) => (
							<ContentfulLink
								key={index} // eslint-disable-line
								{...link}
							/>
						))}
					</Flex>
				)}
			</Flex>
			<Flex
				w="40%"
				tablet={[{ w: '100%' }]}
			>
				{asset && (
					<ContentfulImage
						{...asset as TGatsbyImage}
						loading="eager"
						objectFit="contain"
					/>
				)}
			</Flex>
		</Flex>
	);
};

export default HeroV1;
