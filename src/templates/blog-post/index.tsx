import React from 'react';
import { graphql } from 'gatsby';

// Assets
import clock from '../../assets/images/icons/clock.svg';
import calendar from '../../assets/images/icons/calendar.svg';
import author from '../../assets/images/icons/author.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';
import { RenderWrapper } from './atoms';

// Molecules
import Breadcrumbs from '../../components/Molecules/Breadcrumbs';
import IconList from '../../components/Molecules/IconList';
import BlogPreviewCard from '../../components/Molecules/Cards/BlogPreviewCard/BlogPreviewCard';
import ShareMenu from './Molecules/ShareMenu';
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Organisms
import HeadMeta from '../../components/Molecules/HeadMeta/HeadMeta';
import LetsWorkTogether from '../../components/Organisms/LetsWorkTogether';

// Types
import {
	TContentfulPreviewBlogPost,
	TContentfulSingleBlogPost,
} from '../../utils/types';

// Contentful
import RichText from '../../contentful/RichText/RichText';
import ContentfulImage from '../../contentful/ContentfulImage';

// Utils
import { formatReadingTime } from '../../utils/helpers';

interface BlogPostProps {
	data: {
		blogPost: TContentfulSingleBlogPost;
		relatedBlogs: {
			nodes: TContentfulPreviewBlogPost[];
		};
	};
}

const Index: React.FC<BlogPostProps> = (props) => {
	const {
		data: {
			blogPost,
			relatedBlogs,
		},
	} = props;

	const iconList = (
		<IconList
			gap="24px"
			smallerSize
			items={[
				{
					icon: clock,
					text: formatReadingTime(blogPost.fields.readingTime),
					alt: 'Reading time',
					as: 'time',
					dateTime: `PT${Math.round(blogPost.fields.readingTime)}M`,
				},
				{
					icon: calendar,
					text: blogPost.publishedAt,
					alt: 'Published date',
					as: 'time',
					dateTime: blogPost.publishedAtNonformatted,
				},
				{
					icon: author,
					text: 'FatCat Coders',
					alt: 'Blog post author',
				},
			]}
			tablet={['column', {
				gap: '8px',
			}]}
			whiteSpace="nowrap"
		/>
	);

	return (
		<main>
			<Wrapper
				as="article"
				paddingY="s80"
				tablet={[{ paddingY: 's48' }]}
			>
				<Section
					as="header"
					marginBottom="s120"
					largeTablet={[{ marginBottom: 's48' }]}
				>
					<Flex
						gap="32px"
						alignItems="flex-end"
						largeTablet={['column']}
						justifyContent="space-between"
					>
						<Wrapper>
							<Breadcrumbs
								links={[
									{
										title: 'Blog',
										url: '/blog',
									},
									{
										title: blogPost.category.title,
										url: `/blog/category/${blogPost.category.slug}/`,
									},
								]}
							/>
							<ShareMenu
								show="desktop"
								gap="16px"
								margin={['b24']}
							/>
							<Heading
								as="h1"
								textSize="h1Blog"
								margin={['b24']}
								fontWeight="medium"
							>
								{blogPost.title}
							</Heading>
							{iconList}
						</Wrapper>
						<Wrapper
							maxW="40%"
							largeTablet={[
								{
									maxW: '70%',
									alignSelf: 'center',
								},
							]}
							mobile={[
								{
									maxW: 'unset',
								},
							]}
						>
							<ContentfulImage
								{...blogPost.previewImage}
							/>
						</Wrapper>
					</Flex>
				</Section>
				<Section
					as="div"
				>
					<Flex
						gap="80px"
						alignItems="flex-start"
					>
						<Flex
							w="20%"
							flexShrink="0"
							position="sticky"
							top="100px"
							hide="desktop"
						>
							<Wrapper
								position="absolute"
								padding={['b16', 'r80']}
							>
								<Text
									fontSize="s18"
									textColor="black"
									display="block"
									textAlign="center"
									marginBottom="s16"
								>
									Share:
								</Text>
								<ShareMenu
									justifyContent="space-between"
								/>
							</Wrapper>
						</Flex>
						<Flex
							direction="column"
						>
							<RenderWrapper>
								{RichText(blogPost.post)}
							</RenderWrapper>
						</Flex>
					</Flex>
				</Section>
			</Wrapper>
			{relatedBlogs.nodes.length > 0 && (
				<Wrapper
					as="aside"
				>
					<Section
						as="div"
						padding={['b168']}
						largeTablet={[
							{
								padding: ['b48'],
							},
						]}
					>
						<Heading
							as="h2"
							textAlign="center"
							margin={['b40']}
							largeTablet={[
								{
									margin: ['b32'],
								},
							]}
						>
							Related blog articles
						</Heading>
						<Grid
							gap="40px"
							gridTemplateColumns="repeat(2, 1fr)"
							margin={['b48']}
							tablet={[
								{
									gap: '24px',
									gridTemplateColumns: 'repeat(1, 1fr)',
								},
							]}
						>
							{relatedBlogs.nodes.map(post => (
								<BlogPreviewCard
									key={post.slug}
									slug={post.slug}
									title={post.title}
									category={post.category.title}
									readingTime={post.fields.readingTime}
									date={post.publishedAt}
									dateNonformatted={post.publishedAtNonformatted}
									image={post.previewImage}
								/>
							))}
						</Grid>
					</Section>
				</Wrapper>
			)}
			<LetsWorkTogether location={`Blog post: ${blogPost.title}`} />
		</main>
	);
};

export default Index;

export const Head: React.FC<BlogPostProps> = (props) => {
	const { data: { blogPost } } = props;
	return <HeadMeta meta={blogPost.meta || {}} />;
};

export const pageQuery = graphql`
    query BlogPostQuery($slug: String!, $category: String!) {
        blogPost: contentfulBlog(slug: {eq: $slug}) {
            ...SingleBlogPostFields
        }
        relatedBlogs: allContentfulBlog(
        	limit: 2,
        	filter: {category: {slug: {eq: $category}},
        	slug: {ne: $slug}},
        	sort: {publishedAt: DESC}
        ) {
            nodes {
				...PreviewBlogPostFields
            }
        }
    }
`;
