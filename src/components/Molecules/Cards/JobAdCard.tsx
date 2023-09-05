import React from 'react';
import { useCallback } from 'react';
import { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

// Assets
import locationIcon from '../../../assets/images/icons/locationIcon.svg';
import clockIcon from '../../../assets/images/icons/clockIcon.svg';
import salaryIcon from '../../../assets/images/icons/salaryIcon.svg';
import CircleArrow from '../../../assets/images/svg-inline/circle-arrow.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';

type JobAdCardProps = {
	jobTitle: string;
	excerpt: string;
	location: string;
	workModel: string;
	salary: string;
	slug: string;
}

// @TODO: consider adding proper aria-labels on card links here

const JobAdCard: React.FC<JobAdCardProps> = (props) => {
	const {
		jobTitle,
		excerpt,
		location,
		workModel,
		salary,
		slug,
	} = props;

	const renderDetail = useCallback((title: string, icon: string) => (
		<Flex
			direction="row"
			alignItems="center"
			justifyContent="flex-start"
			gap="16px"
		>
			<Image
				alt=""
				src={icon}
				maxH="24px"
				w="24px"
			/>
			<Paragraph
				fontSize="s16"
			>
				{title}
			</Paragraph>
		</Flex>
	), []);

	return (
		<Link
			as={GatsbyLink}
			to={`/job/${slug}/`}
			borderRadius="8px"
			padding={['r8', 'l8', 't32']}
			backgroundColor="white"
			maxW="350px"
			transition="all 0.3s ease"
			aria-label={`Read job post: ${jobTitle}`}
			hover={[
				{
					transform: 'translateY(-20px)',
					boxShadow: '6px 6px 4px rgba(0, 0, 0, 0.1)',
				},
			]}
			mobile={[{
				padding: ['t24'],
				hover: [{ transform: 'unset', boxShadow: 'unset' }],
			}]}
			tablet={['fluid']}
		>
			<Flex
				direction="column"
				as="article"
				h="100%"
			>
				<Flex
					padding={['r16', 'l16']}
					direction="column"
					borderRadius="15px"
					flexGrow="1"
				>
					<Heading
						as="h3"
						padding={['b16']}
						fontWeight="medium"
						marginBottom="sauto"
					>
						{jobTitle}
					</Heading>
					<Wrapper
						overflow="hidden"
						maxH="112px"
						marginBottom="s24"
					>
						<Paragraph
							fontSize="s16"
							styled={css`
								display: -webkit-box;
								-webkit-line-clamp: 4;
								-webkit-box-orient: vertical;
								overflow: hidden;
								text-overflow: ellipsis;
						`}
						>
							{excerpt}
						</Paragraph>
					</Wrapper>
				</Flex>
				<Flex
					backgroundColor="cream"
					borderRadius="8px"
					paddingX="s16"
					paddingY="s16"
					direction="column"
					gap="12px"
				>
					{renderDetail(location, locationIcon)}
					{renderDetail(workModel, clockIcon)}
					{renderDetail(salary, salaryIcon)}
				</Flex>
				<Flex
					alignItems="center"
					justifyContent="center"
					gap="10px"
					padding={['t24', 'b32']}
					mobile={[{ padding: ['b24'] }]}
					fontWeight="medium"
				>
					View more
					<CircleArrow />
				</Flex>
			</Flex>
		</Link>
	);
};

export default JobAdCard;
