import React from 'react';

// Assets
import ourProcess1 from '../../../assets/images/icons/our-process-1.svg';
import ourProcess2 from '../../../assets/images/icons/our-process-2.svg';
import ourProcess3 from '../../../assets/images/icons/our-process-3.svg';
import ourProcess4 from '../../../assets/images/icons/our-process-4.svg';

// Molecules
import OurProcessCard from '../../Molecules/Cards/OurProcessCard';
import OurProcess from '../../Molecules/Sections/OurProcess';

const StaffAugmentationOurProcess: React.FC = () => {
	return (
		<OurProcess
			cards={(
				<>
					<OurProcessCard
						title="Get in touch"
						description="Let us know what type of employees you are looking for and we will get back to you shortly."
						image={ourProcess1}
					/>
					<OurProcessCard
						title="Candidate shortlisting"
						description="You will receive a shortlist of candidates who match your criteria and requirements."
						image={ourProcess2}
					/>
					<OurProcessCard
						title="Choose Employee"
						description="You select the top candidates, interview them, and choose who to hire as an extended employee."
						image={ourProcess3}
					/>
					<OurProcessCard
						title="Get down to business"
						description="Onboard your new team members, and assign them their first tasks. You have 2 weeks trial!"
						image={ourProcess4}
					/>
				</>
			)}
		/>
	);
};

export default StaffAugmentationOurProcess;
