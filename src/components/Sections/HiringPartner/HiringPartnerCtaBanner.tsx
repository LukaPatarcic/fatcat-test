import React from 'react';

// Molecules
import CatBanner from '../../Molecules/Banners/CatBanner';

const HiringPartnerCtaBanner: React.FC = () => {
	return (
		<CatBanner
			title="Ready to start hiring?"
			text="With a right talent, anything is possible. Contact us, and let’s discuss your hiring needs in more detail."
			buttonText="Get in touch"
		/>
	);
};

export default HiringPartnerCtaBanner;
