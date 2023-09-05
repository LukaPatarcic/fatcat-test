import React from 'react';

// Atoms

// Molecules
import CatBanner from '../../Molecules/Banners/CatBanner';

const RecruiterOnDemandCtaBanner: React.FC = () => {
	return (
		<CatBanner
			title="Want to learn more about our Recruiter on Demand service? "
			text="Book a free consultation, so we can discuss all details about your needs, and how our RoD service can help your business."
			buttonText="Get in touch"
		/>
	);
};

export default RecruiterOnDemandCtaBanner;
