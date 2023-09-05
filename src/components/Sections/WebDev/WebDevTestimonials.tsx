import React from 'react';
import { testimonialValues } from '../../../data/testimonials';

// Molecules
import Testimonials from '../../Molecules/Testimonials';
import Section from '../../Molecules/Section';

const testimonials = [
	testimonialValues.calendly,
	testimonialValues.provideHealth,
	testimonialValues.bizly,
];

const WebDevTestimonials: React.FC = () => {
	return (
		<Section
			aria-label="Client testimonials"
			backgroundColor="cream"
		>
			<Testimonials testimonials={testimonials} />
		</Section>
	);
};

export default WebDevTestimonials;
