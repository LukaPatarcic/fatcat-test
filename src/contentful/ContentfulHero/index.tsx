import React from 'react';
// import loadable from '@loadable/component';

// Types
import { TContentfulHero } from '../../utils/types';

// // Atoms
import HeroV1 from './variants/HeroV1';
import HeroV2 from './variants/HeroV2';

const ContentfulHero: React.FC<TContentfulHero> = (props) => {
	const {
		variant,
		...restProps
	} = props;
	switch (variant) {
		case 'variant-1': {
			return <HeroV1 {...restProps} />;
		}
		case 'variant-2': {
			return <HeroV2 {...restProps} />;
		}
		default: return null;
	}
};

export default ContentfulHero;
