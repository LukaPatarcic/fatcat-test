import React from 'react';
import {
	graphql,
	useStaticQuery,
} from 'gatsby';

// Molecules
import TeamMembersSection from '../../Molecules/Sections/TeamMembersSection/TeamMembersSection';

// Types
import { TContentfulMember } from '../../../utils/types';

// @TODO: change props for slider card section to accept: data and renderCard props, the same goes for other sections using card props
const RecruiterOnDemandTeamMembers: React.FC = () => {
	const data: {
		carousel: {
			members: TContentfulMember[];
		};
	} = useStaticQuery(graphql`
		query {
  			carousel: contentfulMemberCarousel(
  				slug: {eq: "recruiter-on-demand-carousel"}
			) {
    			members {
      				...MemberFields
    			}
  			}
		}
	`);

	return (
		<TeamMembersSection
			title="Meet our recruitment team"
			description="Our team has the expertise to handle all aspects of the hiring process."
			teamMembers={data.carousel.members}
			slideLayout={{
				wideDesktop: [2, 3],
				largeDesktop: [2, 3],
				desktopBig: [2, 3],
				standardDesktop: [2, 3],
				desktop: [2, 3],
				largeTablet: [3, 1],
				tablet: [3, 1],
				mobile: [3, 1],
			}}
			defaultLayout={[2, 3]}
		/>
	);
};

export default RecruiterOnDemandTeamMembers;
