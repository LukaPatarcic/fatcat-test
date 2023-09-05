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
		title: 'Tailored approach',
		description:
	<>
		Our team is dedicated to providing customized search
		<Text fontWeight="medium"> solutions </Text>
		that meet your unique needs.
	</>,
	},
	{
		title: 'Integrated cooperation',
		description:
	<>
		We integrate with
		<Text fontWeight="medium"> your team </Text>
		and respect your ownership and process ensuring
		<Text fontWeight="medium"> efficiency.</Text>
	</>,
	},
	{
		title: 'Installment payment',
		description:
	<>
		Strengthen long-term customer relationships and share risk through
		<Text fontWeight="medium"> flexible payments.</Text>
	</>,
	},
	{
		title: 'Positive candidate experience',
		description:
	<>
		Prioritizing a
		<Text fontWeight="medium"> positive candidate </Text>
		journey ensures lasting relationships with top talent.
	</>,
	},
	{
		title: 'Quick time-to-hire',
		description:
	<>
		We aim to
		<Text fontWeight="medium"> help our clients </Text>
		fill talent gaps within 30 days or less.
	</>,
	},
	{
		title: 'Extensive talent pool',
		description:
	<>
		Gain access to our extensive database of over 20,000
		<Text fontWeight="medium"> qualified candidates. </Text>
	</>,
	},
];

const TechnicalRecruitmentBenefits: React.FC = () => {
	return (
		<Wrapper backgroundColor="cream">
			<BenefitsSection
				title={(
					<>
						Let our Technical Recruitment service connect you with
						<Text textColor="purple"> skilled professionals, </Text>
						ensuring your attention remains on essential business goals.
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
						margin={['b40']}
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
								image={benefitsTick}
								smallerImage
							/>
						))}
					</>
				)}
			/>
		</Wrapper>
	);
};

export default TechnicalRecruitmentBenefits;
