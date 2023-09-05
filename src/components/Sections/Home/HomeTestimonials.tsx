import React from 'react';
import { testimonialValues } from '../../../data/testimonials';

// Molecules
import Testimonials from '../../Molecules/Testimonials';

const testimonials = [
	testimonialValues.calendly,
	testimonialValues.bizly,
	testimonialValues.insightful,
	testimonialValues.provideHealth,
	testimonialValues.shapa,
];

const HomeTestimonials: React.FC = () => {
	return (
		<Testimonials testimonials={testimonials} />
	);
};

export default HomeTestimonials;
