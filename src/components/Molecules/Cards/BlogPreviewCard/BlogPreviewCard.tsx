import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Assets
import CircleArrow from '../../../../assets/images/svg-inline/circle-arrow.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import { Dot } from './BlogPreviewCard.atoms';

// Contentful
import ContentfulImage from '../../../../contentful/ContentfulImage';

// Types
import { TContentfulImage } from '../../../../utils/types';

// Utils
import { formatReadingTime } from '../../../../utils/helpers';

interface BlogCardProps {
    title: string;
	slug: string;
    category: string;
    readingTime: number;
    date: string;
	dateNonformatted: string;
    image: TContentfulImage;
	wide?: boolean;
}

const BlogPreviewCard: React.FC<BlogCardProps> = (props) => {
	const {
		title,
		slug,
		category,
		readingTime,
		date,
		dateNonformatted,
		image,
		wide,
	} = props;

	const blogPostUrl = `/blog/${slug}/`;

	return (
		<Link
			as={GatsbyLink}
			to={blogPostUrl}
			// this is added because of a gatsby bug, where it scrolls to the bottom of a page, instead of scrolling to the top
			onClick={() => window.scrollTo(0, 0)}
			aria-label={`Read blog post: ${title}`}
			borderRadius="8px"
			transition="all 0.3s ease"
			hover={[
				{
					transform: 'translateY(-10px)',
					boxShadow: '6px 6px 10px rgba(0, 0, 0, 0.1)',
				},
			]}
		>
			<Flex
				as="article"
				direction={wide ? 'row' : 'column'}
				justifyContent="space-between"
				backgroundColor={wide ? 'primary' : 'tertiaryYellow'}
				minH={wide ? '280px' : '460px'}
				borderRadius="8px"
				largeTablet={[
					'column',
					{
						minH: '280px',
					},
				]}
				h="100%"
			>
				<Flex
					direction="column"
					alignItems="flex-start"
					paddingX="s40"
					paddingY={wide ? 's40' : 's32'}
					flexGrow="1"
					largeTablet={[
						{
							paddingX: 's24',
							paddingY: 's32',
						},
					]}
				>
					<Text
						fontSize="s14"
						fontWeight="medium"
						textColor="purple"
						backgroundColor="white"
						paddingX="s8"
						paddingY="s8"
						borderRadius="4px"
						marginBottom="s16"
					>
						{category}
					</Text>
					<Flex
						flexGrow="1"
					>
						<Heading
							as="h3"
							textColor={wide ? 'white' : 'primary'}
						>
							{title}
						</Heading>
					</Flex>
					<Flex
						alignItems="center"
						gap="16px"
						textSize="h5"
						textColor={wide ? 'white' : 'gray60'}
						marginTop="s14"
						mobile={[{ textSize: 'h5Mobile' }]}
					>
						<time
							aria-label="Reading time"
							dateTime={`PT${Math.round(readingTime)}M`}
						>
							{formatReadingTime(readingTime)}
						</time>
						<Dot
							color={wide ? 'white' : 'gray60'}
						/>
						<time
							aria-label="Published date"
							dateTime={dateNonformatted}
						>
							{date}
						</time>
					</Flex>
				</Flex>
				<Flex
					justifyContent={wide ? 'end' : 'space-between'}
					gap="32px"
					alignItems="flex-end"
					largeTablet={[
						{
							justifyContent: 'space-between',
						},
					]}
				>
					<Flex
						w={wide ? '45%' : '60%'}
						alignSelf="flex-end"
						largeTablet={[
							{
								w: '20%',
								marginLeft: 's24',
							},
						]}
						tablet={[
							{
								w: '30%',
							},
						]}
						mobile={[
							{
								w: '40%',
							},
						]}
					>
						<ContentfulImage
							{...image}
						/>
					</Flex>
					<Flex
						w="fit-content"
						alignItems="center"
						gap="8px"
						textColor={wide ? 'white' : 'purple'}
						marginBottom="s40"
						marginRight="s40"
						mobile={[
							{
								marginBottom: 's24',
								marginRight: 's24',
							},
						]}
						fontWeight="medium"
						fontSize="s18"
					>
						<Text
							whiteSpace="nowrap"
						>
							Read more
						</Text>
						<CircleArrow />
					</Flex>
				</Flex>
			</Flex>
		</Link>
	);
};

BlogPreviewCard.defaultProps = {
	wide: false,
};

export default BlogPreviewCard;
