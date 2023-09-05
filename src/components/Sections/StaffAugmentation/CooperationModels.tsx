import React from 'react';

// Assets
import pricingCircle from '../../../assets/images/icons/pricing-circle.svg';
import pricingTriangle from '../../../assets/images/icons/pricing-triangle.svg';

// Molecules
import CardSection from '../../Molecules/Sections/CardSection';
import PricingCard from '../../Molecules/Cards/PricingCard';

// Utils
import { TrackLabel } from '../../../utils/gtag';

const CooperationModels: React.FC = () => {
	return (
		<CardSection
			title="Cooperation models"
			description="Choose between our flexible cooperation models, and start working with best professionals in the industry."
			alignCenterMobile
			cards={(
				<>
					<PricingCard
						mark="Popular"
						title="Monthly based payment"
						description="Monthly based payment is ideal for long term cooperation. "
						image={pricingTriangle}
						bulletList={[
							'Easy budget planning',
							'Full-time employee dedication',
							'Direct management',
						]}
						buttonText="Get a quote"
						gaTrackLabel={TrackLabel.GET_A_QUOTE}
					/>
					<PricingCard
						title="Daily based payment"
						description="Rent our IT professionals just when you need them."
						image={pricingCircle}
						bulletList={[
							'Pay only for the days they worked',
							'Full-time or part-time work',
							'Direct management',
						]}
						buttonText="Get a quote"
						gaTrackLabel={TrackLabel.GET_A_QUOTE}
					/>
				</>
			)}
		/>
	);
};

export default CooperationModels;
