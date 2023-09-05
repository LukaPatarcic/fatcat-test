import React from 'react';

// Assets
import technicalRecruitment from '../../../assets/images/icons/technical-recruitment.svg';
import recruiterOnDemand from '../../../assets/images/icons/recruiter-on-demand.svg';

// Molecules
import CardSection from '../../Molecules/Sections/CardSection';
import CreamCard from '../../Molecules/Cards/CreamCard';

const HiringPartnerOurSolutions = () => {
	return (
		<CardSection
			alignCenterMobile
			eyebrow="Our Solutions"
			title="With our services, the hiring process becomes a breeze."
			cards={(
				<>
					<CreamCard
						title="Technical Recruitment"
						description="Find and hire IT professionals that match your requirements using our well established technical recruitment service."
						image={technicalRecruitment}
						url="/hiring-partner/technical-recruitment"
					/>
					<CreamCard
						title="Recruiter on Demand"
						description="Get a fully equipped recruiter to assist you with any step of the recruitment process, for as long as you need."
						image={recruiterOnDemand}
						url="/hiring-partner/recruiter-on-demand"
					/>
				</>
			)}
		/>
	);
};

export default HiringPartnerOurSolutions;
