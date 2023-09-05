import React from 'react';

// Molecules
import AreasOfExpertise from '../../Molecules/Sections/AreasOfExpertise/AreasOfExpertise';

// Utils
import { TrackLabel } from '../../../utils/gtag';

const items = [
	{
		title: 'E-commerce Solutions',
	},
	{
		title: 'CMS Website Development',
	},
	{
		title: 'UI/UX Design Solutions',
	},
	{
		title: 'Custom Website Development',
	},
	{
		title: 'IT Consultancy Service',
	},
	{
		title: 'Business Web Development',
	},
];

const WebDevAreasOfExpertise: React.FC = () => {
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

export default WebDevAreasOfExpertise;
