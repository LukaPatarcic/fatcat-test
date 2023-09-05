import React from 'react';

// Molecules
import AreasOfExpertise from '../../Molecules/Sections/AreasOfExpertise/AreasOfExpertise';

// Utils
import { TrackLabel } from '../../../utils/gtag';

const items = [
	{
		title: 'Mobile App Development',
	},
	{
		title: 'Web App Development',
	},
	{
		title: 'Cross-Platform Development',
	},
	{
		title: 'Digital Product Design',
	},
	{
		title: 'Online Stores Development',
	},
	{
		title: 'IT Consulting Services',
	},
];

const AppDevAreasOfExpertise: React.FC = () => {
	return (
		<AreasOfExpertise
			title="Our areas of expertise"
			description="Here’s just a part of what we do. Feel free to share your needs with us and we’ll let you know how we can help."
			items={items}
			buttonProps={{
				buttonText: 'Get in touch',
				gaTrackLabel: TrackLabel.GET_IN_TOUCH,
			}}
		/>
	);
};

export default AppDevAreasOfExpertise;
