import * as React from 'react';
import { HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/contact-us.png';

// Molecules
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';

// Sections
import ContactUsSection from '../components/Sections/ContactUs';

const ContactUs: React.FC = () => {
	return (
		<main>
			<ContactUsSection />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Get in Touch with Us | FatCat Coders',
				metaDescription: 'Whether you need application development or engineering reinforcements for your team, FatCat Coders are here to help. Send us an inquiry and we are good to go',
				metaImage,
			}}
		/>
	);
};

export default ContactUs;
