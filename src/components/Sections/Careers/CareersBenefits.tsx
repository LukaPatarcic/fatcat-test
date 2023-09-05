import React from 'react';

// Assets
import benefitsTick from '../../../assets/images/icons/benefits-tick.svg';

// Atoms

// Molecules
import BenefitsSection from '../../Molecules/Sections/BenefitsSection';
import SimpleCard from '../../Molecules/Cards/SimpleCard';

interface Card {
	title: string;
	description: string;
}

const cards: Card[] = [
	{
		title: 'Six hour net working day',
		description: 'Quality over quantity. FatCat gives you the opportunity to be productive and have enough time to rest in the process.',
	},
	{
		title: 'Flexible hours and location',
		description: 'FatCat gives you the time and flexibility to work at your best. Our cozy office or work from home - the choice is yours.',
	},
	{
		title: 'Learning & development time',
		description: 'As long as you strive to improve yourself, we’re happy to help you grow. You`ll get learning time off and any courses you need.',
	},
	{
		title: 'Private health insurance',
		description: 'Your health is important, which is why we provide private medical insurance to our employees and their family members.',
	},
	{
		title: 'Employee events',
		description: 'Apart from regular work, our employees know how to have fun. Join us for a game of billiard or an exciting chess duel!',
	},
	{
		title: 'FatCat extras',
		description: 'There are additional perks you will love, such as a monthly home-office budget, a pet-friendly office and much more.',
	},
];

const CareersBenefits: React.FC = () => {
	return (
		<BenefitsSection
			title="Perks & Benefits"
			hasBackground
			cards={(
				<>
					{cards.map(card => (
						<SimpleCard
							key={card.title}
							title={card.title}
							titleGrow={false}
							description={card.description}
							alignItemsLeft
							smallerImage
							image={benefitsTick}
						/>
					))}
				</>
			)}
		/>
	);
};

export default CareersBenefits;
