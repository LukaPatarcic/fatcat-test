import React, { ReactElement } from 'react';

// Assets
import benefitsTick from '../../../assets/images/icons/benefits-tick.svg';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import BenefitsSection from '../../Molecules/Sections/BenefitsSection';
import SimpleCard from '../../Molecules/Cards/SimpleCard';
import CircledText from '../../Molecules/CircledText';

interface Card {
	title: string;
	description: string | ReactElement;
}

const cards: Card[] = [
	{
		title: 'Easily scale your team',
		description: 'Scale your team up or down as needed without the expense and hassle of hiring full-time employees.',
	},
	{
		title: 'Get access to proven talents',
		description:
	<>
		Gain access
		to thoroughly vetted, exceptional talent, ensuring a
		<Text fontWeight="medium">
			{' '}
			perfect skill set match.
		</Text>
	</>,
	},
	{
		title: 'Flexible cooperation models',
		description:
	<>
		<Text fontWeight="medium">Customize cooperation lengths, </Text>
		from short-term to long-term engagements, for optimal flexibility.
	</>,
	},
	{
		title: 'In-house quality guaranteed',
		description:
	<>
		Experience outstanding in-house quality service,
		maintaining
		<Text fontWeight="medium">
			{' '}
			high standards of collaboration.
		</Text>
	</>,
	},
	{
		title: 'Easy budget planning',
		description:
	<>
		Simplify budget planning with
		{' '}
		<Text fontWeight="medium"> predictable costs</Text>
		, enabling effective financial management.
	</>,
	},
	{
		title: 'Reduce your risks',
		description:
	<>
		We provide a
		{' '}
		<Text fontWeight="medium"> trial period</Text>
		, and you can cancel cooperation anytime.
	</>,
	},
];

const StaffAugmentationBenefits: React.FC = () => {
	return (
		<Wrapper
			backgroundColor="cream"
		>
			<BenefitsSection
				title={(
					<>
						We provide
						<Text textColor="purple"> experienced professionals </Text>
						to jump in your project right away, and integrate with your team as your own employee, while
						<Text textColor="purple"> you keep full control </Text>
						over a project.
						<CircledText
							w="164px"
							text="...and so much more"
							hide="tablet"
						/>
					</>
				)}
				belowTitle={(
					<Flex
						justifyContent="center"
						marginBottom="s32"
						show="tablet"
					>
						<CircledText
							w="164px"
							text="...and so much more"
						/>
					</Flex>
				)}
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
		</Wrapper>
	);
};

export default StaffAugmentationBenefits;
