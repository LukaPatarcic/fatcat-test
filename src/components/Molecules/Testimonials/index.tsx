import React from 'react';

// Molecules
import Slider from '../Slider';
import Testimonial, { TestimonialProps } from './Molecules/Testimonial';

const sliderSettings = {
	autoplay: true,
	autoplaySpeed: 10_000,
	infinite: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				variableWidth: false,
			},
		},
	],
};

export interface TestimonialsProps {
	testimonials: TestimonialProps[];
}

const Testimonials: React.FC<TestimonialsProps> = (props) => {
	const {
		testimonials,
	} = props;

	return (
		<Slider
			shouldBeInfinite
			scaleAnimation
			settings={sliderSettings}
			slides={testimonials.map(testimonial => (
				<Testimonial
					key={testimonial.name}
					{...testimonial}
				/>
			))}
		/>
	);
};

export default Testimonials;
