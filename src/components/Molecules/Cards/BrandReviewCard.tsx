import React from 'react';
import { css } from 'styled-components';

// Types
import { TContentfulCard, TGatsbyImage } from '../../../utils/types';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import ContentfulImage from '../../../contentful/ContentfulImage';

type TBrandReviewCard = Partial<TContentfulCard>

const BrandReviewCard: React.FC<TBrandReviewCard> = (props) => {
	const {
		image,
		description,
		headerColor,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
			alignItems="center"
			padding="s8"
			paddingBottom="s24"
			maxW="325px"
			minW="200px"
			gap="24px"
			borderRadius="8px"
			boxShadow="0 16px 25px rgba(112, 144, 176, 0.16)"
		>
			<Flex
				justifyContent="center"
				backgroundColor={headerColor}
				backgroundColorOpacity={0.05}
				padding="s28"
				borderRadius="4px 4px 0 0"
			>
				<Flex
					h="32px"
					w="fit-contetnt"
					styled={css`
						div, img {
							width: auto;
							height: 100%;
						}`}
				>
					<ContentfulImage {...image as TGatsbyImage} />
				</Flex>
			</Flex>
			<Paragraph
				size="small"
				textAlign="center"
			>
				{description?.description}
			</Paragraph>
		</Flex>
	);
};

export default BrandReviewCard;
