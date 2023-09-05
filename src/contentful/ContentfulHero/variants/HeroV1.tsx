import React from 'react';

// Types
import { TContentfulHero } from '../../../utils/types';
import ContentfulHeading from '../../ContentfulHeading';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import ContentfulLink from '../../ContentfulLink';

const HeroV1: React.FC<Omit<TContentfulHero, 'variant'>> = (props) => {
	const {
		title,
		description,
		links,
	} = props;
	return (
		<Flex
			maxW="620px"
			direction="column"
		>
			<ContentfulHeading {...title} margin={['b0']} />
			{description && (
				<Paragraph
					margin={['t32']}
					textAlign="center"
				>
					{description}
				</Paragraph>
			)}
			{links && links.length && (
				<Flex
					justifyContent="center"
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
	);
};

export default HeroV1;
