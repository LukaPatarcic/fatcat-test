import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../../assets/images/meta/application-dev.png';

// Atoms

// Molecules
import ClientBanner from '../../components/Molecules/Banners/ClientBanner';

// Organisms
import LatestBlog from '../../components/Organisms/LatestBlog';
import LetsWorkTogether from '../../components/Organisms/LetsWorkTogether';

// Sections
import AppDevHero from '../../components/Sections/AppDev/AppDevHero';
import AppDevBenefits from '../../components/Sections/AppDev/AppDevBenefits';
import AppDevAreasOfExpertise from '../../components/Sections/AppDev/AppDevAreasOfExpertise';
import AppDevIdentification from '../../components/Sections/AppDev/AppDevIdentification';
import AppDevTestimonials from '../../components/Sections/AppDev/AppDevTestimonials';
import AppDevCtaBanner from '../../components/Sections/AppDev/AppDevCtaBanner';
import SoftwareDevGuidingPrinciples from '../../components/Sections/SoftwareDev/SoftwareDevGuidingPrinciples';
import ExtraMile from '../../components/Sections/AppDev/ExtraMile';
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import { Services } from '../../components/Molecules/Sections/Services';

const ApplicationDevelopment: React.FC = () => {
	return (
		<main>
			<AppDevHero />
			<ClientBanner />
			<AppDevIdentification />
			<AppDevBenefits />
			<AppDevTestimonials />
			<AppDevAreasOfExpertise />
			<SoftwareDevGuidingPrinciples />
			<AppDevCtaBanner />
			<ExtraMile />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Applicaton development" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Full Product Development | FatCat Coders',
				metaDescription: "We transform your ideas into top-class software products, focusing on your business needs. Let's meet up and discuss your project.",
				metaImage,
			}}
		/>
	);
};

export default ApplicationDevelopment;
