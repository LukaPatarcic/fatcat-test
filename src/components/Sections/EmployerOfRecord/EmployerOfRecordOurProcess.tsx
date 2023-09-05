import React from 'react';

// Assets
import ourProcess1 from '../../../assets/images/icons/our-process-1.svg';
import ourProcess2 from '../../../assets/images/icons/our-process-2.svg';
import ourProcess3 from '../../../assets/images/icons/our-process-3.svg';
import ourProcess4 from '../../../assets/images/icons/our-process-4.svg';

// Molecules
import OurProcessCard from '../../Molecules/Cards/OurProcessCard';
import OurProcess from '../../Molecules/Sections/OurProcess';

const EmployerOfRecordOurProcess: React.FC = () => {
	return (
		<OurProcess
			cards={(
				<>
					<OurProcessCard
						title="Welcome call"
						description="We guide you through Serban-specific requirements, such as taxes, labor laws and benefits, and we discuss all add-ons you’d like for your EoR employee."
						image={ourProcess1}
					/>
					<OurProcessCard
						title="Contract review"
						description="We work with your team to prepare an employment contract that meets both your company’s needs as well as local market laws and regulations."
						image={ourProcess2}
					/>
					<OurProcessCard
						title="Employee onboarding"
						description="Your employee begins day-to-day operations. They'll report to you, while we serve as their legal employer and handle all HR and payroll needs."
						image={ourProcess3}
					/>
					<OurProcessCard
						title="Simple billing"
						description="You receive a single invoice per month detailing your employees’ salary, social costs, commissions and service fees."
						image={ourProcess4}
					/>
				</>
			)}
		/>
	);
};

export default EmployerOfRecordOurProcess;
