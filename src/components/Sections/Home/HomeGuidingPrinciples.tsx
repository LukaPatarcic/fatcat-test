import React from 'react';

// Assets
import collaborationIcon from '../../../assets/images/icons/collaboration.svg';
import accountabilityIcon from '../../../assets/images/icons/accountability-icon.svg';
import transparencyIcon from '../../../assets/images/icons/transparency-icon.svg';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import SimpleCardSection from '../../Molecules/Sections/SimpleCardSection';
import Section from '../../Molecules/Section';

const cards = [
	{
		image: collaborationIcon,
		title: (
			<>
				<Text
					textColor="purple"
				>
					C
				</Text>
				ollaboration.
				{' '}
				<br />
				Not Outsourcing
			</>
		),
		description: 'We become your partner and work closely with you to identify custom solutions and optimal delivery path for your business.',
	},
	{
		image: accountabilityIcon,
		title: (
			<>
				<Text
					textColor="purple"
				>
					A
				</Text>
				ccountability.
				{' '}
				<br />
				Not Excuses
			</>
		),
		description: 'We take accountability for delivering the promised outcomes by treating your business like our own. There’s no place for excuses.',
	},
	{
		image: transparencyIcon,
		title: (
			<>
				<Text
					textColor="purple"
				>
					T
				</Text>
				ransparency.
				{' '}
				<br />
				Not Ambiguity
			</>
		),
		description: 'We embrace transparent and honest communication, empowering the exchange of ideas and continuous growth.',
	},
];

const GuidingPrinciples = () => {
	return (
		<Section clearTopPadding>
			<SimpleCardSection
				title="Our guiding principles"
				numOfColumns={3}
				cards={cards}
			/>
		</Section>
	);
};

export default GuidingPrinciples;
