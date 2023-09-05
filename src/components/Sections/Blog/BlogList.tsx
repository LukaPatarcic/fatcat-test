import React from 'react';

// Atoms
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';
import BlogPreviewCard from '../../Molecules/Cards/BlogPreviewCard/BlogPreviewCard';

// Organisms
import Pagination from '../../Organisms/Pagination';

// Types
import { TContentfulPreviewBlogPost } from '../../../utils/types';

interface BlogListProps {
	posts: TContentfulPreviewBlogPost[];
	categorySlug: string;
	numOfPages: number;
	currentPage: number;
}

const BlogList: React.FC<BlogListProps> = (props) => {
	const {
		posts,
		categorySlug,
		numOfPages,
		currentPage,
	} = props;

	return (
		<Section
			paddingBottom="s192"
			standardDesktop={[
				{
					paddingBottom: 's148',
				},
			]}
			desktop={[
				{
					paddingBottom: 's120',
				},
			]}
			largeTablet={[
				{
					paddingBottom: 's100',
				},
			]}
			tablet={[
				{
					paddingBottom: 's80',
				},
			]}
			mobile={[
				{
					paddingBottom: 's48',
				},
			]}
			aria-label="Blog posts"
		>
			<Grid
				gap="40px"
				gridTemplateColumns="repeat(2, 1fr)"
				tablet={[
					{
						gap: '24px',
						gridTemplateColumns: 'repeat(1, 1fr)',
					},
				]}
			>
				{posts.map(post => (
					<BlogPreviewCard
						key={post.slug}
						title={post.title}
						slug={post.slug}
						category={post.category.title}
						readingTime={post.fields.readingTime}
						date={post.publishedAt}
						dateNonformatted={post.publishedAtNonformatted}
						image={post.previewImage}
					/>
				))}
			</Grid>
			<Pagination
				baseUrl={categorySlug === 'all' ? '/blog' : `/blog${categorySlug}`}
				numPages={numOfPages}
				currentPage={currentPage}
			/>
		</Section>
	);
};

export default BlogList;
