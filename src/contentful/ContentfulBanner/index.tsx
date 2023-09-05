import React from 'react';

// Types
import { TContentfulBanner } from '../../utils/types';
import ContentfulHeading from '../ContentfulHeading';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import ContentfulLink from '../ContentfulLink';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

const ContentfulBanner: React.FC<TContentfulBanner> = (props) => {
	const {
		title,
		description,
		links,
	} = props;
	return (
		<Flex
			maxW="540px"
			direction="column"
		>
			<ContentfulHeading {...title} margin={['b48']} largeTablet={[{ margin: ['b24'] }]} />
			{description && <Paragraph>{description}</Paragraph>}
			{links && links.length && (
				<Flex
					justifyContent="center"
					gap="24px"
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

export default ContentfulBanner;
