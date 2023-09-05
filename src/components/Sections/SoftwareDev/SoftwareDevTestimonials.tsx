import React from 'react';
import { testimonialValues } from '../../../data/testimonials';

// Molecules
import Testimonials from '../../Molecules/Testimonials';
import Section from '../../Molecules/Section';

const testimonials = [
	testimonialValues.calendly,
	testimonialValues.provideHealth,
	testimonialValues.shapa,
	testimonialValues.bizly,
];

const SoftwareDevTestimonials: React.FC = () => {
	return (
		<Section
			backgroundColor="cream"
		>
			<Testimonials testimonials={testimonials} />
		</Section>
	);
};

export default SoftwareDevTestimonials;
