import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Atoms
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

// Types
import { TestimonialProps } from '../components/Molecules/Testimonials/Molecules/Testimonial';

// Static Assets
const calendly = '../assets/images/testimonials/client-logos/calendly.png';
const calendlyAvatar = '../assets/images/testimonials/client-images/calendly.png';
const provideHealth = '../assets/images/testimonials/client-logos/provide-health.png';
const provideHealthAvatar = '../assets/images/testimonials/client-images/provide-health.png';
const shapa = '../assets/images/testimonials/client-logos/shapa.png';
const shapaAvatar = '../assets/images/testimonials/client-images/shapa.png';
const bizly = '../assets/images/testimonials/client-logos/bizly.png';
const bizlyAvatar = '../assets/images/testimonials/client-images/bizly.png';
const insightful = '../assets/images/testimonials/client-logos/insightful.png';
const insightfulAvatar = '../assets/images/testimonials/client-images/insightful.png';
const daon = '../assets/images/testimonials/client-logos/daon.png';
const daonAvatar = '../assets/images/testimonials/client-images/daon.png';
const hunch = '../assets/images/testimonials/client-logos/hunch.png';
const hunchAvatar = '../assets/images/testimonials/client-images/hunch.png';

interface Testimonial {
	[key: string]: TestimonialProps;
}

export const testimonialValues: Testimonial = {
	calendly: {
		testimonial: '“FatCat Coders is a highly-skilled, highly-capable group of thinkers, strategists, and workers. ' +
		'You improve all the time, and I can see it. I would consider you more than engineers or designers You bring strategy, ' +
		'and I appreciate it.”',
		logo: <StaticImage
			src={calendly}
			alt="Calendly logo"
			layout="constrained"
			placeholder="blurred"
		/>,
		avatar: <StaticImage
			src={calendlyAvatar}
			alt="Photo of Ty Collins - Former Head of Marketing @ Calendly"
			layout="constrained"
			placeholder="blurred"
		/>,
		name: 'Ty Collins',
		title: 'Former Head of Marketing @ Calendly',
	},
	provideHealth: {
		testimonial: "“We can't recommend FatCat Coders enough. Our development had been stalled with other developers, " +
		"but that all changed with FatCat. It's not just about delivering code. We feel they genuinely want us to succeed." +
		'We could not have done this project without FatCat!”',
		logo: <StaticImage
			src={provideHealth}
			alt="ProvideHealth logo"
			layout="constrained"
			placeholder="blurred"
		/>,
		avatar: <StaticImage
			src={provideHealthAvatar}
			alt="Photo of James Atkins - Owner @ ProvideHealth"
			layout="constrained"
			placeholder="blurred"
		/>,
		name: 'James Atkins',
		title: 'Owner @ ProvideHealth',
	},
	shapa: {
		testimonial: (
			<>
				<Paragraph marginBottom="s20">
					“FatCats never say it is too difficult. They just came up with the solution. They handle clients successfully, never say something wrong, and everything is clear with them.”
				</Paragraph>
				<Paragraph>
					We
					{' '}
					<span
						role="img"
						aria-label="love"
					>
						❤️
					</span>
					{' '}
					FatCat Coders!
				</Paragraph>
			</>
		),
		logo: <StaticImage
			src={shapa}
			alt="Shapa logo"
			layout="constrained"
			placeholder="blurred"
		/>,
		avatar: <StaticImage
			src={shapaAvatar}
			alt="Photo of Voljena Daničić - Head of Creative @ Direct Media"
			layout="constrained"
			placeholder="blurred"
		/>,
		name: 'Voljena Daničić',
		title: 'Head of Creative @ Direct Media',
	},
	bizly: {
		testimonial: (
			<>
				<Paragraph marginBottom="s20">
					“I’m happy how Bizly and FCC worked together.
				</Paragraph>
				<Paragraph>
					I highly value the experts they provided for our products and how reliable and responsive they are.”
				</Paragraph>
			</>),
		logo: <StaticImage
			src={bizly}
			alt="Bizly logo"
			layout="constrained"
			placeholder="blurred"
		/>,
		avatar: <StaticImage
			src={bizlyAvatar}
			alt="Photo of Ron Shah - CEO @ Bizly"
			layout="constrained"
			placeholder="blurred"
		/>,
		name: 'Ron Shah',
		title: 'CEO @ Bizly',
	},
	insightful: {
		testimonial: '“As a fast-growing tech startup, we had to fill many positions pretty fast. FatCat Coders was able to plug in and play ' +
		'the role of an entire recruitment team for us, including technical evaluations. They have an extraordinary team of people, who were ready ' +
		"to fulfill all of our requests and share our team's values as their own.”",
		logo: <StaticImage
			src={insightful}
			alt="Insightful logo"
			layout="constrained"
			placeholder="blurred"
		/>,
		avatar: <StaticImage
			src={insightfulAvatar}
			alt="Photo of Ivan Petrović - CEO @ Insightful"
			layout="constrained"
			placeholder="blurred"
		/>,
		name: 'Ivan Petrović',
		title: 'CEO @ Insightful',
	},
	daon: {
		testimonial: '“Daon has used FatCat Select for many of our significant hires over the past year. They have provided us an excellent bespoke service that catered to our ' +
        "exact needs in the industry. They took the time to understand Daon's background, tech stack and what is that we are looking for. They have access to an amazing network of " +
        'candidates, which is important in the industry. Overall, a great organization that delivers.”',
		logo: <StaticImage
			src={daon}
			alt="Daon logo"
			layout="constrained"
			placeholder="blurred"
		/>,
		avatar: <StaticImage
			src={daonAvatar}
			alt="Photo of Dalibor Panić - SWE Manager @ Daon"
			layout="constrained"
			placeholder="blurred"
		/>,
		name: 'Dalibor Panić',
		title: 'SWE Manager @ Daon',
	},
	hunch: {
		testimonial: '“I must admit that I was skeptical that their assignment-based recruitment would bring any candidates. Not only was I wrong, but FatCat brought us high-quality ' +
        'candidates with proven skills and motivation. I highly recommend FatCat Select for all your technical positions!”',
		logo: <StaticImage
			src={hunch}
			alt="Hunch logo"
			layout="constrained"
			placeholder="blurred"
		/>,
		avatar: <StaticImage
			src={hunchAvatar}
			alt="Photo of Nikola Milenković - CTO @ Hunch"
			layout="constrained"
			placeholder="blurred"
		/>,
		name: 'Nikola Milenković',
		title: 'CTO @ Hunch',
	},
};
