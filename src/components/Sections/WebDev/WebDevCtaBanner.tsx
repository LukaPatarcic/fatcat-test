import React from 'react';

// Molecules
import CatBanner from '../../Molecules/Banners/CatBanner';

const WebDevCtaBanner: React.FC = () => {
	return (
		<CatBanner
			title="Ready to transform your online presence?"
			text="Contact us today to discuss your web development needs and discover how FatCat Coders can help your business thrive online."
			buttonText="Get in touch"
		/>

	);
};

export default WebDevCtaBanner;
