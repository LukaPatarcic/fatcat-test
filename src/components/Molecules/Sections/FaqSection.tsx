import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { SecondaryHeading } from '../../Atoms/SecondaryHeading';

// Molecules
import Accordion from '../Accordions/Accordion';
import Section from '../Section';

interface FaqSectionProps {
    faqs: {
        title: string;
        content: string | ReactElement;
    }[];
}

const FaqSection: React.FC<FaqSectionProps> = (props) => {
	const {
		faqs,
	} = props;

	return (
		<Section>
			<Flex
				direction="column"
				alignItems="center"
			>
				<SecondaryHeading>
					Frequently asked questions
				</SecondaryHeading>
				{faqs.map((faq, index) => (
					<Accordion
						/* eslint-disable-next-line react/no-array-index-key */
						key={index}
						{...faq}
					/>
				))}
			</Flex>
		</Section>
	);
};

export default FaqSection;
