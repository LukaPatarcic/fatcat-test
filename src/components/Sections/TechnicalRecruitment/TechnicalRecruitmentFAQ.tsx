import React from 'react';

// Molecules
import FaqSection from '../../Molecules/Sections/FaqSection';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

const faqs = [
	{
		title: 'What is the usual time to hire?',
		content: (
			<Paragraph fontSize="s16">
				Time-to-hire is approximately 2.5 months, while the average time to the first lead ranges between 3 to 5 days.
			</Paragraph>
		),
	},
	{
		title: 'At which step in the process do we get to know candidates?',
		content: (
			<Paragraph fontSize="s16">
				You can learn more about the interested candidates following the screening process we conduct at the very beginning.
				With their screening results and CV information,
				you can decide whether to meet them for an interview to see if they are the right candidate for further assessment.
			</Paragraph>
		),
	},
	{
		title: 'How do we keep up with the progress of the selection process?',
		content: (
			<Paragraph fontSize="s16">
				In addition to our official weekly updates via email, we provide you with the means to track selection process progress in real-time.
			</Paragraph>
		),
	},
	{
		title: 'Do you recruit for non-engineering roles?',
		content: (
			<Paragraph fontSize="s16">
				Yes, we can cover any position that an IT company might require. From Sales and Product Management to Operations, Marketing, and much more.
			</Paragraph>
		),
	},
	{
		title: 'Can company representatives participate in the FatCat Coders selection process?',
		content: (
			<Paragraph fontSize="s16">
				Absolutely! We encourage your participation in each step of the hiring process, from developing the assessment process to interviewing candidates.
			</Paragraph>
		),
	},
	{
		title: 'Can we use FatCat Coders and manage our own hiring process simultaneously?',
		content: (
			<Paragraph fontSize="s16">
				We don’t limit your capacity to manage the hiring process yourself, so long as we communicate updates together in a timely fashion.
			</Paragraph>
		),
	},
];

const TechnicalRecruitmentFAQ = () => {
	return (
		<FaqSection
			faqs={faqs}
		/>
	);
};

export default TechnicalRecruitmentFAQ;
