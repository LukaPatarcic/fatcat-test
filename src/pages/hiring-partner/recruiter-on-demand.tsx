import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../../assets/images/meta/recruiter-on-demand.png';

// Atoms

// Organisms
import LatestBlog from '../../components/Organisms/LatestBlog';
import LetsWorkTogether from '../../components/Organisms/LetsWorkTogether';

// Sections
import RecruiterOnDemandHero from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandHero';
import ClientBanner from '../../components/Molecules/Banners/ClientBanner';
import RecruiterOnDemandIdentification from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandIdentification';
import RecruiterOnDemandWhatIsRod from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandWhatIsRod';
import RecruiterOnDemandBenefits from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandBenefits';
import RecruiterOnDemandTeamMembers from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandTeamMembers';
import RecruiterOnDemandOurProcess from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandOurProcess';
import RecruiterOnDemandCtaBanner from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandCtaBanner';
import RecruiterOnDemandFaq from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandFaq';
import RecruiterOnDemandYellowForm from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandYellowForm';
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import Section from '../../components/Molecules/Section';
import { Services } from '../../components/Molecules/Sections/Services';
// import RecruiterOnDemandTestimonials from '../../components/Sections/RecruiterOnDemand/RecruiterOnDemandTestimonials';

const RecruiterOnDemand: React.FC = () => {
	return (
		<main>
			<RecruiterOnDemandHero />
			<ClientBanner />
			<RecruiterOnDemandIdentification />
			<RecruiterOnDemandBenefits />
			<RecruiterOnDemandWhatIsRod />
			<RecruiterOnDemandCtaBanner />
			<RecruiterOnDemandOurProcess />
			<RecruiterOnDemandYellowForm />
			<Section clearTopPadding clearBottomPadding>
				<RecruiterOnDemandTeamMembers />
			</Section>
			<RecruiterOnDemandFaq />
			<Services />
			<LatestBlog />
			<LetsWorkTogether location="Recruiter on demand" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Recruiter on Demand | FatCat Coders',
				metaDescription: 'Expand your hiring team with an experienced recruiter on demand who can help you manage the full cycle of the recruitment process. See more info on the link!',
				metaImage,
			}}
		/>
	);
};

export default RecruiterOnDemand;
