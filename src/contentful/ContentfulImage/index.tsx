import React from 'react';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser';

// Types
import { TContentfulImage } from '../../utils/types';

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

type ContentfulImageProps = {
	loading?: 'lazy' | 'eager';
	objectFit?: 'cover' | 'contain';
} & TContentfulImage;

const ContentfulImage: React.FC<ContentfulImageProps> = (props) => {
	const {
		file,
		description,
		gatsbyImageData,
		loading,
		objectFit,
	} = props;

	const isSVG = file.contentType === 'image/svg+xml';
	const gatsbyImage = getImage(gatsbyImageData) as IGatsbyImageData;
	return (
		<>
			{isSVG && (
				<Image
					w="100%"
					// height={`${file?.details.image.height}`}
					// width={`${file?.details.image.width}`}
					src={file.url}
					alt={description}
				/>
			)}
			{!isSVG && (
				<GatsbyImage
					image={gatsbyImage}
					alt={description || ''}
					loading={loading}
					objectFit={objectFit}
				/>
			)}
		</>
	);
};

ContentfulImage.defaultProps = {
	loading: 'lazy',
	objectFit: 'cover',
};

export default ContentfulImage;
