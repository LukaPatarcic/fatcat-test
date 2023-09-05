import React from 'react';
import {
	graphql,
	useStaticQuery,
} from 'gatsby';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import Button from '../Atoms/Button';
import { SecondaryHeading } from '../Atoms/SecondaryHeading';

// Molecules
import Section from '../Molecules/Section';
import BlogPreviewCard from '../Molecules/Cards/BlogPreviewCard/BlogPreviewCard';

// Types
import { TContentfulPreviewBlogPost } from '../../utils/types';

const LatestBlog: React.FC = () => {
	const data: {
		allContentfulBlog: {
			nodes: TContentfulPreviewBlogPost[];
		};
	} = useStaticQuery(graphql`
		query LatestBlogQuery {
			allContentfulBlog(
				limit: 3,
				sort: {
					publishedAt: DESC
				}
			) {
				nodes {
					...PreviewBlogPostFields
				}
			}
		}
	`);

	const {
		allContentfulBlog: {
			nodes: blogs,
		},
	} = data;

	return (
		<Section>
			<SecondaryHeading>
				Latest from the blog
			</SecondaryHeading>
			<Flex
				direction="column"
				gap="40px"
				largeTablet={[
					{ gap: '20px' },
				]}
			>
				<BlogPreviewCard
					slug={blogs[0].slug}
					title={blogs[0].title}
					category={blogs[0].category.title}
					readingTime={blogs[0].fields.readingTime}
					date={blogs[0].publishedAt}
					dateNonformatted={blogs[0].publishedAt}
					image={blogs[0].previewImage}
					wide
				/>
				<Flex
					gap="40px"
					largeTablet={[
						'column',
						{ gap: '20px' }]}
				>
					<BlogPreviewCard
						slug={blogs[1].slug}
						title={blogs[1].title}
						category={blogs[1].category.title}
						readingTime={blogs[1].fields.readingTime}
						date={blogs[1].publishedAt}
						dateNonformatted={blogs[1].publishedAtNonformatted}
						image={blogs[1].previewImage}
					/>
					<BlogPreviewCard
						slug={blogs[2].slug}
						title={blogs[2].title}
						category={blogs[2].category.title}
						readingTime={blogs[2].fields.readingTime}
						date={blogs[2].publishedAt}
						dateNonformatted={blogs[2].publishedAtNonformatted}
						image={blogs[2].previewImage}
					/>
				</Flex>
			</Flex>
			<Flex
				justifyContent="center"
				padding={['t80']}
				scale
			>
				<Button
					to="/blog"
					alignSelf="center"
					variant="ghost"
					text="View more blogs"
					fontWeight="medium"
					fontSize="s18"
					// this is added because of a gatsby bug, where it scrolls to the bottom of a page, instead of scrolling to the top
					onClick={() => window.scrollTo(0, 0)}
				/>
			</Flex>
		</Section>
	);
};

export default LatestBlog;
