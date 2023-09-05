import React from 'react';

// Atoms
import { BR } from 'fatcat-ui-library/components/Atoms/Divider';

// Molecules
import AreasOfExpertise from '../../Molecules/Sections/AreasOfExpertise/AreasOfExpertise';

// Utils
import { TrackLabel } from '../../../utils/gtag';

const items = [
	{
		title: (
			<>
				UX/UI
				{' '}
				<BR
					hide="largeTablet"
				/>
				Designers
			</>
		),
	},
	{
		title: 'React.js Developers',
	},
	{
		title: 'Node.js Developers',
	},
	{
		title: (
			<>
				Software
				{' '}
				<BR
					hide="largeTablet"
				/>
				Testers
			</>
		),
	},
	{
		title: 'JavaScript Developers',
	},
	{
		title: (
			<>
				Product
				{' '}
				<BR
					hide="largeTablet"
				/>
				Experts
			</>
		),
	},
];

const StaffAugmentationAreasOfExpertise: React.FC = () => {
	return (
		<AreasOfExpertise
			title="Augmented teams"
			description="Whether you need developers, project managers, or other subject matter experts, we've got you covered."
			items={items}
			buttonProps={{
				buttonText: 'Check availability and rates',
				gaTrackLabel: TrackLabel.CHECK_AVAILABILITY_AND_RATES,
			}}
		/>
	);
};

export default StaffAugmentationAreasOfExpertise;
