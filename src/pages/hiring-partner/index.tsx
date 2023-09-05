import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../../assets/images/meta/hiring-partner.png';

// Molecules
import CountriesSection from '../../components/Molecules/Sections/CountriesSection';
import ClientBanner from '../../components/Molecules/Banners/ClientBanner';
import { Services } from '../../components/Molecules/Sections/Services';

// Organisms
import LatestBlog from '../../components/Organisms/LatestBlog';
import LetsWorkTogether from '../../components/Organisms/LetsWorkTogether';

// Sections
import HiringPartnerOurSolutions from '../../components/Sections/HiringPartner/HiringPartnerOurSolutions';
import HiringPartnerHero from '../../components/Sections/HiringPartner/HiringPartnerHero';
import HiringPartnerIdentification from '../../components/Sections/HiringPartner/HiringPartnerIdentification';
import HiringPartnerBenefits from '../../components/Sections/HiringPartner/HiringPartnerBenefits';
import HiringPartnerCtaBanner from '../../components/Sections/HiringPartner/HiringPartnerCtaBanner';
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import HiringPartnerTestimonials from '../../components/Sections/HiringPartner/HiringPartnerTestimonials';

const HiringPartner: React.FC = () => {
	return (
		<main>
			<HiringPartnerHero />
			<ClientBanner />
			<HiringPartnerIdentification />
			<HiringPartnerBenefits />
			<HiringPartnerTestimonials />
			<HiringPartnerOurSolutions />
			<CountriesSection clearTopPadding />
			<HiringPartnerCtaBanner />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Hiring partner" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Hiring Made Easy | FatCat Coders',
				metaDescription: 'Wide range of IT recruitment services that can meet all of your demands, just a few clicks away. Browse our offer and get in touch with hiring professionals.',
				metaImage,
			}}
		/>
	);
};

export default HiringPartner;
