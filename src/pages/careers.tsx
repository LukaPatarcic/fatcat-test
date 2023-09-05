import React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/careers.png';

// Molecules
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';

// Sections
import CareersBenefits from '../components/Sections/Careers/CareersBenefits';
import CareersCatTalk from '../components/Sections/Careers/CareersCatTalk';
import CareersHero from '../components/Sections/Careers/CareersHero';
import CareersGuidingPrinciples from '../components/Sections/Careers/CareersGuidingPrinciples';
import CareersCurrentOpenings from '../components/Sections/Careers/CareersCurrentOpenings';
import CareersRecruitmentProcess from '../components/Sections/Careers/CareersRecruitmentProcess';
import CareersTeamMembers from '../components/Sections/Careers/CareersTeamMembers';
import CareersFindRole from '../components/Sections/Careers/CareersFindRole';
import Section from '../components/Molecules/Section';

const Careers: React.FC = () => {
	return (
		<main>
			<CareersHero />
			<CareersCatTalk />
			<CareersGuidingPrinciples />
			<CareersBenefits />
			<CareersCurrentOpenings />
			<CareersRecruitmentProcess />
			<Section clearTopPadding>
				<CareersTeamMembers />
			</Section>
			{/* <CareersQuote /> */}
			<CareersFindRole />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Join our Team | FatCat Coders',
				metaDescription: 'Discover available jobs, the work environment, and the perks of being a FatCat team member.',
				metaImage,
			}}
		/>
	);
};

export default Careers;
