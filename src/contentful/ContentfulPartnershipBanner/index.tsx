import React from 'react';

// Types
import { TContentfulPartnershipBanner } from '../../utils/types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
// import GatsbyImage from '../../components/Atoms/GatsbyImage';

const ContentfulPartnershipBanner: React.FC<TContentfulPartnershipBanner> = (props) => {
	const {
		bannerText,
		partners,
	} = props;
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			largeTablet={['column', { gap: '24px' }]}
			gap="40px"
		>
			<Text
				fontWeight="semiBold"
				whiteSpace="nowrap"
			>
				{bannerText}
			</Text>
			<Flex
				wrap
				alignItems="center"
				justifyContent="space-between"
				gap="32px"
				largeTablet={['justifyContentCenter']}
				mobile={[{ gap: '0' }, 'column']}
			>
				{partners.map((partner) => {
					// shrinking images for better resolution
					const parsedData = {
						...partner.gatsbyImageData,
						width: (partner?.gatsbyImageData?.width as number) / 2,
						height: (partner?.gatsbyImageData?.height as number) / 2,
					};
					const gatsbyImage = getImage(parsedData) as IGatsbyImageData;
					return (
						<Wrapper key={partner.file.url} w="fit-content">
							<GatsbyImage
								image={gatsbyImage}
								alt={partner.description || ''}
							/>
						</Wrapper>
					);
				})}
			</Flex>
		</Flex>
	);
};
export default ContentfulPartnershipBanner;
