import React from 'react';
import { testimonialValues } from '../../../data/testimonials';

// Molecules
import Testimonials from '../../Molecules/Testimonials';

const testimonials = [
	testimonialValues.insightful,
	testimonialValues.daon,
	testimonialValues.hunch,
];

const TechnicalRecruitmentTestimonials: React.FC = () => {
	return (
		<Testimonials testimonials={testimonials} />
	);
};

export default TechnicalRecruitmentTestimonials;
