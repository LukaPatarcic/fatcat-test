import React from 'react';

// Assets
import ourProcess1 from '../../../assets/images/icons/our-process-1.svg';
import ourProcess2 from '../../../assets/images/icons/our-process-2.svg';
import ourProcess3 from '../../../assets/images/icons/our-process-3.svg';
import ourProcess4 from '../../../assets/images/icons/our-process-4.svg';

// Molecules
import OurProcessCard from '../../Molecules/Cards/OurProcessCard';
import OurProcess from '../../Molecules/Sections/OurProcess';

const RecruiterOnDemandOurProcess: React.FC = () => {
	return (
		<OurProcess
			cards={(
				<>
					<OurProcessCard
						title="Get in touch"
						description="Get in touch with us and share what your needs are, and we’ll get back to you shortly."
						image={ourProcess1}
					/>
					<OurProcessCard
						title="Recruiter shortlisting"
						description="Based on your requirements, we’ll send you profiles of our available recruiters."
						image={ourProcess2}
					/>
					<OurProcessCard
						title="Choose Recruiter"
						description="You can interview recruiters and chose who will be engaged as your dedicated RoD."
						image={ourProcess3}
					/>
					<OurProcessCard
						title="Get down to business"
						description="Onboard your Recruiter on Demand, and assign them their first tasks. "
						image={ourProcess4}
					/>
				</>
			)}
		/>
	);
};

export default RecruiterOnDemandOurProcess;
