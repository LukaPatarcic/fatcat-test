import React from 'react';

// Atoms
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

// Molecules
import FaqSection from '../../Molecules/Sections/FaqSection';

const faqs = [
	{
		title: 'Why choose Recruiter on Demand instead of the Technical recruitment service?',
		content: (
			<Paragraph fontSize="s16">
				Perhaps you have a well-established selection process and don’t need the help of external tech experts because you have
				internal specialists. You might just lack the manpower to focus on generating a
				talent pool, processing applications, screening candidates, writing job ads, or other responsibilities. That’s when a Recruiter on
				Demand is a better option when compared to Tech Recruitment.
			</Paragraph>
		),
	},
	{
		title: 'How does Recruiter on Demand pay off?',
		content: (
			<Paragraph fontSize="s16">
				With Recruiter on Demand you get hiring help right away, with full access to the FatCat Coders database. This enables you to
				connect with our candidates in Serbia, some of whom may already be tested and ready to start work right away. As opposed to spending time
				and money on finding and onboarding a permanent recruiter whose services you may not need in the future.
			</Paragraph>
		),
	},
	{
		title: 'What working conditions does the Recruiter on Demand adhere to?',
		content:
	<>
		<Paragraph marginBottom="s16" fontSize="s16">
			Your designated Recruiter is fully dedicated to your company and your hiring needs, but also adheres to FatCat Coders working conditions
			such as 6h of productive work per day*.
		</Paragraph>
		<Paragraph fontSize="s16">
			*That means that your designated Recruiter will track his work using a productivity and time tracking tool, all in order to
			ensure he provides 30 productive hours each week. You will be able to define both productive and unproductive apps, and the total hours will be calculated accordingly.
		</Paragraph>
	</>,
	},
	{
		title: 'Should we provide our designated Recruiter on Demand with any equipment?',
		content: (
			<Paragraph fontSize="s16">
				That’s not necessary, since we provide all the necessary equipment to our Recruiters, including a MacBook, LinkedIn recruiter, ATS, and other important tools.
			</Paragraph>
		),
	},
	{
		title: 'What if I don’t need the Recruiter on Demand any more, but our contract hasn’t yet expired?',
		content: (
			<Paragraph fontSize="s16">
				A contract may be terminated with a notice period of one month when its agreed duration exceeds three months. If the contract has a 3-month duration, even if you
				wish to terminate it before it expires, you will have to pay compensation for the previously agreed duration of the contract.
			</Paragraph>
		),
	},
	{
		title: 'What IT roles can a Recruiter on Demand cover?',
		content: (
			<Paragraph fontSize="s16">
				Our Recruiters can cover any position that an IT company might require. From Sales and Product Management, to Operations, Marketing, and much more.
			</Paragraph>
		),
	},
];

const RecruiterOnDemandFaq: React.FC = () => {
	return (
		<FaqSection
			faqs={faqs}
		/>
	);
};

export default RecruiterOnDemandFaq;
