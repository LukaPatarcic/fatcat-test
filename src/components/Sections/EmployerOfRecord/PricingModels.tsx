import React from 'react';

// Assets
import pricingCircle from '../../../assets/images/icons/pricing-circle.svg';
import pricingTriangle from '../../../assets/images/icons/pricing-triangle.svg';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import CardSection from '../../Molecules/Sections/CardSection';
import PricingCard from '../../Molecules/Cards/PricingCard';

const PricingModels: React.FC = () => {
	return (
		<CardSection
			title="Pricing models"
			alignCenterMobile
			cards={(
				<>
					<PricingCard
						eyebrow="Paid monthly"
						title={(
							<>
								€400/
								<Text textSize="h4">month</Text>
							</>
						)}
						bulletList={[
							'Legal',
							'Administrative',
							'Payroll',
							'Localized benefits',
							'Expenses management',
							'Time off management',
							'Onboarding and Offboarding',
						]}
						bulletLink="Unlimited add-ons"
						image={pricingCircle}
					/>
					<PricingCard
						mark="Save 12%"
						eyebrow="Paid yearly"
						title={(
							<>
								€350/
								<Text textSize="h4">month</Text>
							</>
						)}
						bulletList={[
							'Legal',
							'Administrative',
							'Payroll',
							'Localized benefits',
							'Expenses management',
							'Time off management',
							'Onboarding and Offboarding',
						]}
						bulletLink="Unlimited add-ons"
						image={pricingTriangle}
					/>
				</>
			)}
		/>
	);
};

export default PricingModels;
