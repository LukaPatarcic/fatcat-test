import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/about-us.png';
import arrow from '../assets/images/arrow-down-black.svg';

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Sections
import AboutHero from '../components/Sections/AboutUs/AboutHero';
import AboutUsStory from '../components/Sections/AboutUs/AboutUsStory';
import HomeGuidingPrinciples from '../components/Sections/Home/HomeGuidingPrinciples';
import AboutUsOurActions from '../components/Sections/AboutUs/AboutUsOurActions';
import AboutUsOurRoots from '../components/Sections/AboutUs/AboutUsOurRoots';
import AboutUsWhatWeDo from '../components/Sections/AboutUs/AboutUsWhatWeDo';
import AboutUsDoodles from '../components/Sections/AboutUs/AboutUsDoodles';

// Organisms
import LetsWorkTogether from '../components/Organisms/LetsWorkTogether';
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';
import AboutUsCountries from '../components/Sections/AboutUs/AboutUsCountries';

const AboutUs: React.FC = () => {
	return (
		<main>
			<AboutHero />
			<AboutUsStory />
			<HomeGuidingPrinciples />
			<AboutUsCountries />
			<AboutUsOurActions />
			<AboutUsOurRoots />
			<AboutUsWhatWeDo />
			<Wrapper>
				<Image
					alt=""
					src={arrow}
					maxH="100px"
					tablet={[{ maxH: '80px' }]}
					mobile={[{ marginTop: 's0' }]}
				/>
			</Wrapper>
			<AboutUsDoodles />
			<LetsWorkTogether location="About us" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Our Story | FatCat Coders',
				metaDescription: 'Find out who is behind the FatCat’s, what these cats do, and how everything started. Check the link!',
				metaImage,
			}}
		/>
	);
};

export default AboutUs;
