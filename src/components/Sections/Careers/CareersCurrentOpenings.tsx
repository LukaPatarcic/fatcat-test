import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// Types
import { TContentfulPreviewJobPost } from '../../../utils/types';

// Molecules
import CardSection from '../../Molecules/Sections/CardSection';
import JobAdCard from '../../Molecules/Cards/JobAdCard';

const CareersCurrentOpenings: React.FC = () => {
	const data = useStaticQuery(graphql`
		query {
			allJobs: allContentfulJob(
				sort: {
					createdAt: DESC
				}
			) {
				nodes {
					...PreviewJobPostFields
				}
			}
		}
	`);

	const jobs: TContentfulPreviewJobPost[] = data.allJobs?.nodes;
	const activeJobs = jobs.filter(job => job.isActive);

	return (
		<CardSection
			alignCenterMobile
			id="jobs"
			title="Current openings"
			backgroundColor="mainYellow"
			numOfColumns={activeJobs.length < 3 ? activeJobs.length : 3}
			smallerGap
			largerRowGap
			largerGapTablet
			cards={activeJobs?.map(job => (
				<JobAdCard
					key={job.title}
					jobTitle={job.title}
					excerpt={job.excerpt.excerpt}
					location={job.location}
					workModel={job.workModel}
					salary={job.salary}
					slug={job.slug}
				/>
			))}
		/>
	);
};

export default CareersCurrentOpenings;
