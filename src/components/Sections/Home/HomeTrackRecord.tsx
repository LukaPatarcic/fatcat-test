import React from 'react';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

// Molecules
import { TrackRecordNumbers } from '../../Molecules/Cards/NumberCard';
import TrackRecord from '../../Molecules/TrackRecord';
import HomeTestimonials from './HomeTestimonials';

const trackRecordNumbers: TrackRecordNumbers[] = [
	{
		num: 60,
		title: 'Satisfied clients',
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

const HomeTrackRecord: React.FC = () => {
	return (
		<TrackRecord
			title={(
				<>
					Our
					{' '}
					<Text
						textColor="purple"
					>
						proven track record
					</Text>
					{' '}
					of delivering successful products, engineering excellence, and hiring the best talents, speaks for itself.
				</>
			)}
			trackRecordNumbers={trackRecordNumbers}
			content={<HomeTestimonials />}
		/>
	);
};

export default HomeTrackRecord;
