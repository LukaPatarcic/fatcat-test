import React from 'react';
import { graphql, HeadFC } from 'gatsby';

// Assets
import metaImage from '../assets/images/meta/blog.png';

// Molecules
import HeadMeta from '../components/Molecules/HeadMeta/HeadMeta';

// Organisms
import LetsWorkTogether from '../components/Organisms/LetsWorkTogether';

// Sections
import BlogCategories from '../components/Sections/Blog/BlogCategories';
import BlogList from '../components/Sections/Blog/BlogList';
import FeaturedBlogs from '../components/Sections/Blog/FeaturedBlogs';

// Types
import {
	TContentfulSlugTitle,
	TContentfulPreviewBlogPost, TContentfulMeta,
} from '../utils/types';

interface BlogPageProps {
	data: {
		contentfulPage: {
			meta: TContentfulMeta;
		};
		contentfulBlogCategoryOrder: {
			blogCategories: TContentfulSlugTitle[];
		};
		allBlogs: {
			nodes: TContentfulPreviewBlogPost[];
		};
		categoryBlogs: {
			nodes: TContentfulPreviewBlogPost[];
		};
		contentfulBlogCategory: {
			featuredBlogs: TContentfulPreviewBlogPost[];
		};
	};
	// eslint-disable-next-line react/no-unused-prop-types
	pageContext: {
		blogsPerPage: number;
		categorySlug: string;
		currentPage: number;
		featuredBlogSlug: string;
		limit: number;
		numOfPages: number;
		skip: number;
		slug: string;
	};
}

const Blog: React.FC<BlogPageProps> = (props) => {
	const {
		data: {
			contentfulBlogCategoryOrder: {
				blogCategories,
			},
			categoryBlogs: {
				nodes: categoryBlogPosts,
			},
			allBlogs: {
				nodes: allBlogPosts,
			},
			contentfulBlogCategory: {
				featuredBlogs,
			},
		},
		pageContext: {
			categorySlug,
			currentPage,
			numOfPages,
		},
	} = props;

	const blogPosts = categorySlug === 'all' ? allBlogPosts : categoryBlogPosts;

	return (
		<main>
			<BlogCategories categories={blogCategories} activeSlug={categorySlug} />
			<FeaturedBlogs posts={featuredBlogs} />
			{blogPosts.length > 0 && (
				<BlogList
					posts={blogPosts}
					numOfPages={numOfPages}
					currentPage={currentPage}
					categorySlug={categorySlug}
				/>
			)}
			<LetsWorkTogether location="Blog" />
		</main>
	);
};

export const Head: HeadFC = (props) => {
	return (
		<HeadMeta
			meta={{
				pageTitle: 'Blog | FatCat Coders',
				metaDescription: 'Stay informed about our latest projects and read insightful articles on software development and hiring. Dive into our blog today.',
				metaImage,
			}}
		/>
	);
};

export default Blog;

export const pageQuery = graphql`
    query BlogQuery($skip: Int, $limit: Int, $categorySlug: String, $featuredBlogSlug: String) {
    	# fetch all blog posts (ignore category filter) - this is for 'all' category
    	allBlogs: allContentfulBlog(
            filter: {slug: {ne: $featuredBlogSlug}}
            limit: $limit
            skip: $skip
            sort: {publishedAt: DESC}
        ) {
            nodes {
				...PreviewBlogPostFields
            }
        }
        categoryBlogs: allContentfulBlog(
            filter: {category: {slug: {eq: $categorySlug}}, slug: {ne: $featuredBlogSlug}}
            limit: $limit
            skip: $skip
            sort: {publishedAt: DESC}
        ) {
            nodes {
				...PreviewBlogPostFields
            }
        }
        contentfulBlogCategory(slug: {eq: $categorySlug}) {
            featuredBlogs {
				...PreviewBlogPostFields
            }
        }
        contentfulBlogCategoryOrder {
            blogCategories {
                slug
                title
            }
        }
    }
`;
