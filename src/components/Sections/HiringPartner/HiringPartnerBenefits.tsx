import React from 'react';

// Assets
import provenSuccess from '../../../assets/images/hiring-partner/proven-success-icon.svg';
import industryExperts from '../../../assets/images/hiring-partner/user-icon.svg';
import dataDrivenProcess from '../../../assets/images/hiring-partner/data-driven-process-icon.svg';
import tailoredSolutions from '../../../assets/images/hiring-partner/tailored-solutions-icon.svg';

// Atoms
import { BR } from 'fatcat-ui-library/components/Atoms/Divider';

// Molecules
import CardSection from '../../Molecules/Sections/CardSection';
import SimpleCard from '../../Molecules/Cards/SimpleCard';

const cards = [
	{
		image: provenSuccess,
		title: (
			<>
				Proven
				<BR
					hide="largeTablet"
				/>
				{' '}
				success
			</>
		),
		description: 'Exceptional results in technical recruitment',
	},
	{
		image: industryExperts,
		title: 'Tech industry experts',
		description: 'In-depth understanding of talent landscape',
	},
	{
		image: dataDrivenProcess,
		title: ('Data-driven process'),
		description: 'Results-oriented hiring strategies',
	},
	{
		image: tailoredSolutions,
		title: (
			<>
				Tailored
				<BR
					hide="largeTablet"
				/>
				{' '}
				solutions
			</>
		),
		description: 'Customized services for your unique needs',
	},
];

const HiringPartnerBenefits = () => {
	return (
		<CardSection
			clearTopPadding
			title="Experience the difference with us:"
			numOfColumns={4}
			cards={cards.map(card => (
				<SimpleCard
					key={card.image}
					fixedHeight
					titleGrow={false}
					{...card}
				/>
			))}
		/>
	);
};

export default HiringPartnerBenefits;
