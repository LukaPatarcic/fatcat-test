import React from 'react';
import { TContentfulPreviewBlogPost } from '../../../utils/types';
import Section from 'fatcat-ui-library/components/Molecules/Section';
import BlogPreviewCard from '../../Molecules/Cards/BlogPreviewCard/BlogPreviewCard';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

interface FeaturedBlogsProps {
	posts: TContentfulPreviewBlogPost[];
}

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = (props) => {
	const {
		posts,
	} = props;

	return (
		<Section
			paddingBottom="s40"
			tablet={[
				{
					paddingBottom: 's24',
				},
			]}
			aria-label="Featured blog posts"
		>
			<Flex
				direction="column"
				gap="40px"
				largeTablet={[
					{ gap: '20px' },
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
						wide
					/>
				))}
			</Flex>
		</Section>
	);
};

export default FeaturedBlogs;
