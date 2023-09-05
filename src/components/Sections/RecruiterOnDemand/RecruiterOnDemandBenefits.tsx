import React, { ReactElement } from 'react';

// Assets
import benefitsTick from '../../../assets/images/icons/benefits-tick.svg';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import BenefitsSection from '../../Molecules/Sections/BenefitsSection';
import SimpleCard from '../../Molecules/Cards/SimpleCard';

interface Card {
	title: string;
	description: string | ReactElement;
}

const cards: Card[] = [
	{
		title: 'Reliable, experienced recruiters',
		description:
	<>
		Our recruiters can
		<Text fontWeight="medium"> manage </Text>
		an entire recruitment process life-cycle, and handle other hiring-related tasks.
	</>,
	},
	{
		title: 'Full access to our pool of candidates',
		description:
	<>
		A recruiter will work on all your positions while accessing a 20k+ candidate database, which can
		<Text fontWeight="medium"> speed up time-to-hire. </Text>
	</>,
	},
	{
		title: 'Automated recruitment service',
		description:
	<>
		Recruiters are
		<Text fontWeight="medium"> fully equipped </Text>
		with Linkedin Recruiter, ATS system, and other necessary tools to perform recruitment efficiently.
	</>,
	},
	{
		title: 'Scaling up and down fast',
		description: 'You don’t have to spend time and money on hiring a permanent, contracted recruiter whose services you may not need in the long run.',
	},
	{
		title: 'You are the manager',
		description:
	<>
		You will be in charge of
		<Text fontWeight="medium"> managing </Text>
		the recruiter&apos;s priorities and all its activities as if they are one of your regular employees.
	</>,
	},
	{
		title: 'Cost-effectiveness',
		description:
	<>
		You get
		<Text fontWeight="medium"> unlimited hires, </Text>
		which reduces costs when hiring multiple employees compared to standard success fee models.
	</>,
	},
];

const RecruiterOnDemandBenefits: React.FC = () => {
	return (
		<Wrapper backgroundColor="cream">
			<BenefitsSection
				title={(
					<>
						With
						<Text textColor="purple"> Recruiter on Demand, </Text>
						we can help you solve all these challenges, and many more, by providing:
					</>
				)}
				cards={(
					<>
						{cards.map(card => (
							<SimpleCard
								key={card.title}
								title={card.title}
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

export default RecruiterOnDemandBenefits;
