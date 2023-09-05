import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/staff-augmentation.png';

// Molecules
import { Services } from '../components/Molecules/Sections/Services';

// Organisms
import LatestBlog from '../components/Organisms/LatestBlog';
import LetsWorkTogether from '../components/Organisms/LetsWorkTogether';

// Sections
import CooperationModels from '../components/Sections/StaffAugmentation/CooperationModels';
import StaffAugmentationBenefits from '../components/Sections/StaffAugmentation/StaffAugmentationBenefits';
import StaffAugmentationAreasOfExpertise from '../components/Sections/StaffAugmentation/StaffAugmentationAreasOfExpertise';
import StaffAugmentationOurProcess from '../components/Sections/StaffAugmentation/StaffAugmentationOurProcess';
import StaffAugmentationFAQ from '../components/Sections/StaffAugmentation/StaffAugmentationFAQ';
import StaffAugmentationHero from '../components/Sections/StaffAugmentation/StaffAugmentationHero';
import ClientBanner from '../components/Molecules/Banners/ClientBanner';
import StaffAugmentationIdentification from '../components/Sections/StaffAugmentation/StaffAugmentationIdentification';
import CatBanner from '../components/Molecules/Banners/CatBanner';
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';
import StaffAugmentationTestimonials from '../components/Sections/StaffAugmentation/StaffAugmentationTestimonials';

const StaffAugmentation: React.FC = () => {
	return (
		<main>
			<StaffAugmentationHero />
			<ClientBanner />
			<StaffAugmentationIdentification />
			<StaffAugmentationBenefits />
			<StaffAugmentationTestimonials />
			<StaffAugmentationAreasOfExpertise />
			<StaffAugmentationOurProcess />
			<CooperationModels />
			<CatBanner
				title="Ready to extend your team with quality IT staff?"
				text=""
				buttonText="Get in touch"
			/>
			<StaffAugmentationFAQ />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Staff augmentation" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Extend your Team with Top IT Experts | FatCat Coders',
				metaDescription: 'Strengthen your IT team with fast and reliable staff augmentation services. Discover the smoothest way to scale your team',
				metaImage,
			}}
		/>
	);
};

export default StaffAugmentation;
