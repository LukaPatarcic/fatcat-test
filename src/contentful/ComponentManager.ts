// Types
import { TContentfulBase } from '../utils/types';

// Contentful component mappers
import ContentfulComponentBanner from './ContentfulBanner';
import ContentfulComponentHeading from './ContentfulHeading';
import ContentfulComponentHero from './ContentfulHero';
import ContentfulComponentListItems from './ContentfulListItems';
import ContentfulComponentPartnershipBanner from './ContentfulPartnershipBanner';
import ContentfulComponentSplitBlock from './ContentfulSplitBlock';
import ContentfulSpacer from './ContentfulSpacer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentObject: Record<string, any> = {
	ContentfulComponentBanner,
	ContentfulComponentHeading,
	ContentfulComponentHero,
	ContentfulComponentListItems,
	ContentfulComponentPartnershipBanner,
	ContentfulComponentSplitBlock,
	ContentfulSpacer,
};

const ComponentManager = (component: TContentfulBase) => {
	// eslint-disable-next-line no-underscore-dangle
	return componentObject[component.__typename](component);
};

export default ComponentManager;
