import React from 'react';

// Atoms
import { UlList } from 'fatcat-ui-library/components/Atoms/UlList';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

// Molecules
import FaqSection from '../../Molecules/Sections/FaqSection';

const faqs = [
	{
		title: 'Can we do a technical assessment of candidates on our side?',
		content: <Paragraph fontSize="s16">Yes. You can conduct your-side technical assessment and interviews.</Paragraph>,
	},
	{
		title: 'What makes Staff Augmentation different from Outsourcing?',
		content: (
			<Paragraph fontSize="s16">
				Staff Augmentation is designed for long-term cooperation and provides you with full control of employees&apos; work, same as
				if they are your employees. You will manage their tasks, teams, and projects.
				It’s a quick way to freshen up your company with verified IT professionals who will be dedicated to you.
			</Paragraph>
		),
	},
	{
		title: 'Why is it good to extend your team with IT professionals from Serbia?',
		content: (
			<>
				If you want to extend your team with remote IT experts, Serbia is a great choice and there are multiple reasons for that:
				<UlList marginTop="s18">
					<Text as="li">
						Serbia’s timezone matches Western-European countries within an hour, which ensures that you can easily communicate with your team.
					</Text>
					<Text as="li">
						Serbia is home to highly competent, enthusiastic, and well-educated software developers who offer top-notch service.
					</Text>
					<Text as="li">You won’t have to worry about language barriers when working with Serbian developers.</Text>
					<Text as="li">Serbia presents a neat balance and link between the East and West, both on personal and business levels, making it easy to build successful relationships.</Text>
				</UlList>
			</>
		),
	},
];

const StaffAugmentationFAQ = () => {
	return (
		<FaqSection
			faqs={faqs}
		/>
	);
};

export default StaffAugmentationFAQ;
