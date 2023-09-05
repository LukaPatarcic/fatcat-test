import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../../assets/images/meta/technical-recruitment.png';

// Molecules
import { Services } from '../../components/Molecules/Sections/Services';

// Organisms
import LatestBlog from '../../components/Organisms/LatestBlog';
import LetsWorkTogether from '../../components/Organisms/LetsWorkTogether';

// Sections
import TechnicalRecruitmentBenefits from '../../components/Sections/TechnicalRecruitment/TechnicalRecruitmentBenefits';
import TechnicalRecruitmentOurProcess from '../../components/Sections/TechnicalRecruitment/TechnicalRecruitmentOurProcess';
import TechnicalRecruitmentHero from '../../components/Sections/TechnicalRecruitment/TechnicalRecruitmentHero';
import ClientBanner from '../../components/Molecules/Banners/ClientBanner';
import TechRecruitmentIdentification from '../../components/Sections/TechnicalRecruitment/TechRecruitmentIdentification';
import CountriesSection from '../../components/Molecules/Sections/CountriesSection';
import TechnicalRecruitmentResults from '../../components/Sections/TechnicalRecruitment/TechnicalRecruitmentResults';
import TechnicalRecruitmentCtaBanner from '../../components/Sections/TechnicalRecruitment/TechnicalRecruitmentCtaBanner';

import TechnicalRecruitmentYellowForm from '../../components/Sections/TechnicalRecruitment/TechnicalRecruitmentYellowForm';
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import TechnicalRecruitmentFAQ from '../../components/Sections/TechnicalRecruitment/TechnicalRecruitmentFAQ';

const TechnicalRecruitment: React.FC = () => {
	return (
		<main>
			<TechnicalRecruitmentHero />
			<ClientBanner />
			<TechRecruitmentIdentification />
			<TechnicalRecruitmentBenefits />
			<TechnicalRecruitmentResults />
			<TechnicalRecruitmentCtaBanner />
			<TechnicalRecruitmentOurProcess />
			<TechnicalRecruitmentYellowForm />
			<CountriesSection clearTopPadding clearBottomPadding />
			<TechnicalRecruitmentFAQ />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Technical recruitment" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Technical Recruitment | FatCat Coders',
				metaDescription: 'Reduce your time to hire IT professionals with our talent pool and verified industry experts who will help you find the right candidate. Click to find out more.',
				metaImage,
			}}
		/>
	);
};

export default TechnicalRecruitment;
