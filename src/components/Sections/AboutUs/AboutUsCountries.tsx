import React from 'react';

// Assets
import worldMap from '../../../assets/images/hiring-worldwide.svg';

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import { TrackRecordNumbers } from '../../Molecules/Cards/NumberCard';
import TrackRecord from '../../Molecules/TrackRecord';

const trackRecordNumbers: TrackRecordNumbers[] = [
	{
		num: 5,
		title: 'Years in the market',
	},
	{
		num: 50,
		title: 'Launched products',
	},
	{
		num: 150,
		title: 'Hired candidates',
	},
	{
		num: 20,
		numString: 'k',
		title: 'Candidates in the pool',
	},
];

const AboutUsCountries: React.FC = () => {
	return (
		<TrackRecord
			clearTopPadding
			isAboutUs
			title={(
				<>
					We prioritize our
					<Text textColor="purple"> clients&apos; satisfaction</Text>
					, and our success is measured by their success. That’s why we are trusted all over the world.
				</>
			)}
			trackRecordNumbers={trackRecordNumbers}
			content={(
				<Image
					alt="Pins that showcase that our clients are located worldwide"
					src={worldMap}
				/>
			)}
		/>
	);
};

export default AboutUsCountries;
