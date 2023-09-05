import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../../assets/images/meta/website-dev.png';

// Atoms

// Organisms
import LatestBlog from '../../components/Organisms/LatestBlog';
import LetsWorkTogether from '../../components/Organisms/LetsWorkTogether';

// Sections
import WebDevHero from '../../components/Sections/WebDev/WebDevHero';
import WebDevAreasOfExpertise from '../../components/Sections/WebDev/WebDevAreasOfExpertise';
import ClientBanner from '../../components/Molecules/Banners/ClientBanner';
import WebDevIdentification from '../../components/Sections/WebDev/WebDevIdentification';
import WebDevTestimonials from '../../components/Sections/WebDev/WebDevTestimonials';
import WebDevCoreBenefits from '../../components/Sections/WebDev/WebDevCoreBenefits';
import WebDevTechStack from '../../components/Sections/WebDev/WebDevTechStack';
import SoftwareDevGuidingPrinciples from '../../components/Sections/SoftwareDev/SoftwareDevGuidingPrinciples';
import WebDevCtaBanner from '../../components/Sections/WebDev/WebDevCtaBanner';
import ExtraMile from '../../components/Sections/WebDev/ExtraMile';
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import { Services } from '../../components/Molecules/Sections/Services';

const WebsiteDevelopment: React.FC = () => {
	return (
		<main>
			<WebDevHero />
			<ClientBanner />
			<WebDevIdentification />
			<WebDevTestimonials />
			<WebDevCoreBenefits />
			<WebDevTechStack />
			<WebDevAreasOfExpertise />
			<SoftwareDevGuidingPrinciples />
			<WebDevCtaBanner />
			<ExtraMile />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Website development" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Website Development | FatCat Coders',
				metaDescription: 'Join companies who choose to bring their website operations to the next level and scale efficiently and effectively.',
				metaImage,
			}}
		/>
	);
};

export default WebsiteDevelopment;
