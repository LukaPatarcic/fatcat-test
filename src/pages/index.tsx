import * as React from 'react';
import type { HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/homepage.png';

// Atoms
import { BR } from 'fatcat-ui-library/components/Atoms/Divider';

// Molecules
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';
import ClientBanner from '../components/Molecules/Banners/ClientBanner';
import CatBanner from '../components/Molecules/Banners/CatBanner';
import { Services } from '../components/Molecules/Sections/Services';

// Sections
import HomeHero from '../components/Sections/Home/HomeHero';
import HomeGuidingPrinciples from '../components/Sections/Home/HomeGuidingPrinciples';
import HomeIdentification from '../components/Sections/Home/HomeIdentification';
import HomeFlowchart from '../components/Sections/Home/HomeFlowchart';
import HomeTrackRecord from '../components/Sections/Home/HomeTrackRecord';
import Quote from '../components/Sections/Home/Quote';

// Organisms
import LatestBlog from '../components/Organisms/LatestBlog';
import LetsWorkTogether from '../components/Organisms/LetsWorkTogether';

const IndexPage = () => {
	return (
		<main>
			<HomeHero />
			<ClientBanner />
			<HomeIdentification />
			<HomeGuidingPrinciples />
			<Services />
			<HomeFlowchart />
			<CatBanner
				title={(
					<>
						Not sure which service is
						<BR
							hide="desktop"
						/>
						{' '}
						right for you?
					</>
				)}
				buttonText="Get in touch"
				text="Book a free consultation and we will discuss your requirements thoroughly to come up with the ideal solution for your business needs."
			/>
			<HomeTrackRecord />
			<Quote />
			<LatestBlog />
			<LetsWorkTogether location="Home" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Exceptional Software & Staff Solutions | FatCat Coders',
				metaDescription: 'Discover the software and staff solutions that will propel your businesses to success. Partner with us and take on an exciting adventure of business growth.',
				metaImage,
			}}
		/>
	);
};

export default IndexPage;
