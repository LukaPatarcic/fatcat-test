import React from 'react';
import { testimonialValues } from '../../../data/testimonials';

// Molecules
import Testimonials from '../../Molecules/Testimonials';
import Section from '../../Molecules/Section';

const testimonials = [
	testimonialValues.provideHealth,
	testimonialValues.shapa,
];

const AppDevTestimonials: React.FC = () => {
	return (
		<Section
			aria-label="Client testimonials"
		>
			<Testimonials testimonials={testimonials} />
		</Section>
	);
};

export default AppDevTestimonials;
