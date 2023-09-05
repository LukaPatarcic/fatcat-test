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
		title: 'Experienced specialists',
		description:
	<>
		You’ll get expert
		<Text fontWeight="medium"> guidance </Text>
		and a talented team focused on your vision.
	</>,
	},
	{
		title: 'Proven development process',
		description: 'Our work is based on the principles of strategic planning, feature prioritization, and smooth integration.',
	},
	{
		title: 'Customized solutions',
		description: 'Our team crafts tailored solutions that align with your specific needs and requirements.',
	},
	{
		title: 'Meeting deadlines',
		description:
	<>
		Your timeline matters. Therefore, we
		<Text fontWeight="medium"> deliver </Text>
		projects on schedule to maximize your ROI.
	</>,
	},
	{
		title: 'In-house-like approach',
		description:
	<>
		Commitment to your app&apos;s long-term
		<Text fontWeight="medium"> success </Text>
		and
		<Text fontWeight="medium"> growth </Text>
		is our top priority.
	</>,
	},
	{
		title: 'Maximize performance',
		description:
	<>
		We will transform your idea into a
		<Text fontWeight="medium"> user-friendly </Text>
		and
		<Text fontWeight="medium"> high-performing </Text>
		application.
	</>,
	},
];

const AppDevBenefits: React.FC = () => {
	return (
		<Wrapper
			backgroundColor="cream"
		>
			<BenefitsSection
				title={(
					<>
						We provide
						<Text textColor="purple"> everything needed </Text>
						to bring your product from an idea to reality, and to ensure seamless cooperation for you.
					</>
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

export default AppDevBenefits;
