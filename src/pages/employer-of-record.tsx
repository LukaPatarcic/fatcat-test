import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/employer-of-record.png';

// Molecules
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';
import { Services } from '../components/Molecules/Sections/Services';

// Organisms
import LatestBlog from '../components/Organisms/LatestBlog';
import LetsWorkTogether from '../components/Organisms/LetsWorkTogether';

// Sections
import PricingModels from '../components/Sections/EmployerOfRecord/PricingModels';
import EmployerOfRecordHero from '../components/Sections/EmployerOfRecord/EmployerOfRecordHero';
import ClientBanner from '../components/Molecules/Banners/ClientBanner';
import EmployerOfRecordIdentification from '../components/Sections/EmployerOfRecord/EmployerOfRecordIdentification';
import EmployerOfRecordOurProcess from '../components/Sections/EmployerOfRecord/EmployerOfRecordOurProcess';
import CatBanner from '../components/Molecules/Banners/CatBanner';
import EmployerOfRecordCoreBenefits from '../components/Sections/EmployerOfRecord/EmployerOfRecordCoreBenefits';
import EmployerOfRecordAddons from '../components/Sections/EmployerOfRecord/EmployerOfRecordAddons';
import EmployerOfRecordLaws from '../components/Sections/EmployerOfRecord/EmployerOfRecordLaws';
import EmployerOfRecordYellowForm from '../components/Sections/EmployerOfRecord/EmployerOfRecordYellowForm';

const EmployerOfRecord: React.FC = () => {
	return (
		<main>
			<EmployerOfRecordHero />
			<ClientBanner />
			<EmployerOfRecordIdentification />
			<EmployerOfRecordCoreBenefits />
			<EmployerOfRecordOurProcess />
			<PricingModels />
			<EmployerOfRecordAddons />
			<CatBanner
				title="Ready to streamline your payroll?"
				text="Contact us to discuss all the details. "
				buttonText="Get in touch"
			/>
			<EmployerOfRecordLaws />
			<EmployerOfRecordYellowForm />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Employer of record" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Payroll and Employer of Record Solutions | FatCat Coders',
				metaDescription: 'Hire employees in Serbia legally with our comprehensive Payroll and Employer of Record solutions. Follow the link for more information.',
				metaImage,
			}}
		/>
	);
};

export default EmployerOfRecord;
