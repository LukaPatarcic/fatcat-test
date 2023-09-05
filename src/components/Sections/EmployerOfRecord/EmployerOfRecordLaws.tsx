import React from 'react';

// Assets
import noticePeriod from '../../../assets/images/employer-of-record/laws/notice-period.svg';
import probationPeriod from '../../../assets/images/employer-of-record/laws/probation-period.svg';
import publicHolidays from '../../../assets/images/employer-of-record/laws/public-holidays.svg';
import timeOff from '../../../assets/images/employer-of-record/laws/time-off.svg';

// Molecules
import CardSection from '../../Molecules/Sections/CardSection';
import SimpleCard from '../../Molecules/Cards/SimpleCard';

const EmployerOfRecordLaws = () => {
	return (
		<CardSection
			clearBottomPadding
			alignCenterMobile
			title="Serbian labor laws highlights"
			numOfColumns={4}
			button="Lorem ipsum"
			cards={(
				<>
					<SimpleCard
						title="Time off"
						description="Employee is entitled to minimum 20 days of paid time off annually."
						image={timeOff}
						fixedHeight
					/>
					<SimpleCard
						title="Public holidays"
						description="Employee gets a day off on public holidays - 10 days yearly."
						image={publicHolidays}
						fixedHeight
					/>
					<SimpleCard
						title="Probation period"
						description="Six months probation, with a five working days notice period."
						image={probationPeriod}
						fixedHeight
					/>
					<SimpleCard
						title="Notice period"
						description="After six months, the notice period is 30 days minimum."
						image={noticePeriod}
						fixedHeight
					/>
				</>
			)}
		/>
	);
};

export default EmployerOfRecordLaws;
