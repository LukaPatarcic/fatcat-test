import React from 'react';

// Molecules
import { TrackRecordNumbers } from '../../Molecules/Cards/NumberCard';
import TechnicalRecruitmentTestimonials from './TechnicalRecruitmentTestimonials';
import TrackRecord from '../../Molecules/TrackRecord';

const trackRecordNumbers: TrackRecordNumbers[] = [
	{
		num: 20,
		numString: 'k',
		title: 'Talents in pool',
	},
	{
		num: 150,
		title: 'Successful hires',
	},
	{
		num: 40,
		title: 'Satisfied clients',
	},
	{
		num: 97,
		title: 'Candidate retention',
		symbol: '%',
	},
];

const TechnicalRecruitmentResults: React.FC = () => {
	return (
		<TrackRecord
			title="Results speak for themselves"
			trackRecordNumbers={trackRecordNumbers}
			content={(
				<TechnicalRecruitmentTestimonials />
			)}
		/>
	);
};

export default TechnicalRecruitmentResults;
