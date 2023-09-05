import React from 'react';

// Assets
import ourProcess1 from '../../../assets/images/icons/our-process-1.svg';
import ourProcess2 from '../../../assets/images/icons/our-process-2.svg';
import ourProcess3 from '../../../assets/images/icons/our-process-3.svg';
import ourProcess4 from '../../../assets/images/icons/our-process-4.svg';

// Molecules
import OurProcessCard from '../../Molecules/Cards/OurProcessCard';
import OurProcess from '../../Molecules/Sections/OurProcess';

const TechnicalRecruitmentOurProcess: React.FC = () => {
	return (
		<OurProcess
			cards={(
				<>
					<OurProcessCard
						title="Get in touch"
						description="We'll discuss the specifics of your company, the position you're looking to fill, and any other important details."
						image={ourProcess1}
					/>
					<OurProcessCard
						title="Onboarding & set-up"
						description="Once we have gained insight into your needs and gathered all of the requirements, we will start the client onboarding process."
						image={ourProcess2}
					/>
					<OurProcessCard
						title="Recruitment phase"
						description="Screening resumes, conducting screening calls, reports, and performing any necessary background checks."
						image={ourProcess3}
					/>
					<OurProcessCard
						title="Hiring phase"
						description="Finally, you will have a list of qualified candidates, and you can make your hiring decision."
						image={ourProcess4}
					/>
				</>
			)}
		/>
	);
};

export default TechnicalRecruitmentOurProcess;
