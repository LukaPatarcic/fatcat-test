import React from 'react';
import loadable from '@loadable/component';

// Types
import { TContentfulCard } from '../../utils/types';

// Components
const SimpleCard = loadable(() => import('../../components/Molecules/Cards/SimpleCard'));
const BrandReviewCard = loadable(() => import('../../components/Molecules/Cards/BrandReviewCard'));

type TContentfulComponentCard = {
	card: TContentfulCard;
}

const ContentfulComponentCard: React.FC<TContentfulComponentCard> = (props) => {
	const {
		card,
	} = props;

	switch (card.type) {
		case 'simple': {
			return (
				// @ts-ignore
				<SimpleCard {...card} />
			);
		}
		case 'brand-review': {
			return (
				<BrandReviewCard {...card} />
			);
		}
		default: return null;
	}
};

export default ContentfulComponentCard;
