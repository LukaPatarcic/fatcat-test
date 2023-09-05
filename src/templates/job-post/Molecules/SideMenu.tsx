import React, { useMemo } from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Assets
import workModel from '../../../assets/images/job/clock.svg';
import time from '../../../assets/images/job/timer.svg';
import salary from '../../../assets/images/job/salary.svg';
import locationIcon from '../../../assets/images/job/location.svg';
import ArrowLeft from '../../../assets/images/svg-inline/job-arrow-left.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import Button from '../../../components/Atoms/Button';

// Molecules
import IconList from '../../../components/Molecules/IconList';

// Types
import { TContentfulJobPost } from '../../../utils/types';

interface JobPostProps {
		jobPost: TContentfulJobPost;
        basic?: boolean;
}

const SideMenu: React.FC<JobPostProps> = (props) => {
	const {
		jobPost,
		basic,
	} = props;

	const iconList = useMemo(() => (
		<IconList
			gap="16px"
			direction="column"
			textColor="primary"
			fontWeight="normal"
			items={[
				{
					icon: locationIcon,
					text: jobPost.location,
					alt: 'Job location',
				},
				{
					icon: workModel,
					text: jobPost.workModel,
					alt: 'Work model',
				},
				{
					icon: salary,
					text: jobPost.salary,
					alt: 'Expected salary',
				},
				{
					icon: time,
					text: jobPost.interviewDuration,
					alt: 'Interview duration, process',
				},
			]}
		/>
	), [
		jobPost.interviewDuration,
		jobPost.location,
		jobPost.salary,
		jobPost.workModel,
	]);

	return (
		<>
			{!basic && (
				<Link
					to="/careers#jobs"
					as={GatsbyLink}
					onClick={() => {
						const url = '/careers#jobs';
						window.location.href = url;
					}}
				>
					<Flex
						gap="8px"
						alignItems="center"
					>
						<ArrowLeft />
						<Text>
							All roles
						</Text>
					</Flex>
				</Link>
			)}
			{iconList}
			<Button
				text="Apply"
				to="#job-form"
			/>
		</>
	);
};

SideMenu.defaultProps = {
	basic: undefined,
};

export default SideMenu;
