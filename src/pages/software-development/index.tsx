import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../../assets/images/meta/software-development.png';

// Atoms

// Molecules
import ClientBanner from '../../components/Molecules/Banners/ClientBanner';
import CatBanner from '../../components/Molecules/Banners/CatBanner';
import { Services } from '../../components/Molecules/Sections/Services';

// Organisms
import OurApproachSection from '../../components/Organisms/OurApproachSection/OurAppropachSection';
import LatestBlog from '../../components/Organisms/LatestBlog';
import LetsWorkTogether from '../../components/Organisms/LetsWorkTogether';

// Sections
import SoftwareDevHero from '../../components/Sections/SoftwareDev/SoftwareDevHero';
import SoftwareDevOurSolutions from '../../components/Sections/SoftwareDev/SoftwareDevOurSolutions';
import TechnologyStack from '../../components/Sections/SoftwareDev/TechnologyStack';
import SoftwareDevGuidingPrinciples from '../../components/Sections/SoftwareDev/SoftwareDevGuidingPrinciples';
import SoftwareDevIdentification from '../../components/Sections/SoftwareDev/SoftwareDevIdentification';
import ExtraMile from '../../components/Sections/SoftwareDev/ExtraMile';
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import SoftwareDevTestimonials from '../../components/Sections/SoftwareDev/SoftwareDevTestimonials';

const SoftwareDevelopment: React.FC = () => {
	return (
		<main>
			<SoftwareDevHero />
			<ClientBanner />
			<SoftwareDevIdentification />
			<SoftwareDevTestimonials />
			<SoftwareDevOurSolutions />
			<CatBanner
				title="Have a project in mind?"
				text="Book a free consultation with our tech experts."
				buttonText="Get in touch"
			/>
			<OurApproachSection />
			<SoftwareDevGuidingPrinciples />
			<TechnologyStack />
			<ExtraMile />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Software development" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'We Create Reliable and Quality Software | FatCat Coders',
				metaDescription: 'Our company is JavaScript-oriented and helps businesses design, build, and launch amazing products. Hop on in to find out more and get started.',
				metaImage,
			}}
		/>
	);
};

export default SoftwareDevelopment;
