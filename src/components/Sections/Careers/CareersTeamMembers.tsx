import React from 'react';
import {
	graphql,
	useStaticQuery,
} from 'gatsby';

// Molecules
import TeamMembersSection from '../../Molecules/Sections/TeamMembersSection/TeamMembersSection';

// Utils
import { TContentfulMember } from '../../../utils/types';

const CareersTeamMembers: React.FC = () => {
	const data: {
		carousel: {
			members: TContentfulMember[];
		};
	} = useStaticQuery(graphql`
		query {
  			carousel: contentfulMemberCarousel(
  				slug: {eq: "careers-carousel"}
			) {
    			members {
      				...MemberFields
    			}
  			}
		}
	`);

	return (
		<TeamMembersSection
			title="Behind our FatCat alter egos are the people who drive everything."
			teamMembers={data.carousel.members}
			settings={{
				autoplay: true,
				autoplaySpeed: 10_000,
			}}
			slideLayout={{
				wideDesktop: [2, 4],
				largeDesktop: [2, 4],
				desktopBig: [2, 4],
				standardDesktop: [2, 4],
				desktop: [2, 4],
				largeTablet: [2, 2],
				tablet: [2, 2],
				mobile: [4, 1],
			}}
			defaultLayout={[2, 4]}
		/>
	);
};

export default CareersTeamMembers;
