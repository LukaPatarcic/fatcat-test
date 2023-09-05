/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// You can delete this file if you're not using it
import * as path from 'path';
import type { GatsbyNode } from 'gatsby';
import { calculateReadingTime } from './src/utils/calculateReadingTime';
import redirects from './redirects.json';

const POSTS_PER_PAGE = Number(process.env.POSTS_PER_PAGE) || 6;

export const onCreateNode: GatsbyNode['onCreateNode'] = async (options) => {
	calculateReadingTime(options);
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions;

	type NodeResults = {
		errors?: any;
		data?: {
			allContentfulBlog: {
				nodes: {
					slug: string;
					category: {
						slug: string;
					};
				}[];
			};
			allContentfulBlogCategory: {
				nodes: {
					slug: string;
					blog: {
						slug: string;
					}[] | null;
					featuredBlogs: {
						slug: string;
					}[];
				}[];
			};
			allContentfulJob: {
				nodes: {
					slug: string;
				}[];
			};
		};
	}

	const result: NodeResults = await graphql(`
        {
            allContentfulBlog {
                nodes {
                    slug
                    category {
                        slug
                    }
                }
            }
            allContentfulBlogCategory {
                nodes {
                    slug
                    blog {
                        slug
                    }
                    featuredBlogs {
                        slug
                    }
                }
            }
			allContentfulJob {
                nodes {
                    slug
                }
            }
        }
    `);

	const blogCategories = result.data?.allContentfulBlogCategory.nodes ?? [];
	const blogPosts = result.data?.allContentfulBlog.nodes ?? [];

	if (blogCategories.length) {
		const BlogPage = path.resolve('./src/templates/blog.tsx');

		for (const category of blogCategories) {
			// If category slug is `all`, then we want to consider all blogs posts.
			const categoryPosts = category.slug === 'all' ? blogPosts : (category.blog ?? []);
			// Remove 1 from total number to exclude featured blog post.
			const numOfPosts = Math.max(categoryPosts.length - 1, 0);
			const numOfPages = Math.ceil(numOfPosts / POSTS_PER_PAGE);

			const path = category.slug === 'all' ? '/blog' : `/blog/category/${category.slug}`;

			// Always create at least one page (even if there are no blog posts)
			createPage({
				path: `${path}/`,
				component: BlogPage,
				context: {
					slug: 'blog',
					categorySlug: category.slug,
					featuredBlogSlug: category.featuredBlogs[0].slug,
					currentPage: 1,
					numOfPages,
					blogsPerPage: POSTS_PER_PAGE,
					skip: 0,
					limit: POSTS_PER_PAGE,
				},
			});

			// We start from index = 1 because we have covered index = 0 above.
			// eslint-disable-next-line no-plusplus
			for (let i = 1; i < numOfPages; ++i) {
				createPage({
					path: `${path}/${i + 1}/`,
					component: BlogPage,
					context: {
						slug: 'blog',
						categorySlug: category.slug,
						featuredBlogSlug: category.featuredBlogs[0].slug,
						currentPage: i + 1,
						numOfPages,
						blogsPerPage: POSTS_PER_PAGE,
						skip: i * POSTS_PER_PAGE,
						limit: POSTS_PER_PAGE,
					},
				});
			}
		}
	}

	//* Create: Blog-post */

	if (blogPosts.length) {
		const BlogPostPage = path.resolve('./src/templates/blog-post/index.tsx');

		for (const blog of blogPosts) {
			const slug = blog.slug.trim();
			createPage({
				path: `/blog/${slug}/`,
				component: BlogPostPage,
				context: {
					slug,
					category: blog.category.slug,
				},
			});
		}
	}

	const jobPosts = result.data?.allContentfulJob.nodes ?? [];

	//* Create: job-post */
	if (jobPosts.length) {
		const JobPostPage = path.resolve('./src/templates/job-post/index.tsx');

		for (const job of jobPosts) {
			const slug = job.slug.trim();
			createPage({
				path: `/job/${slug}/`,
				component: JobPostPage,
				context: {
					slug,
				},
			});
		}
	}

	/* Redirects */
	if (redirects.length) {
		for (const { fromPath, toPath } of redirects) {
			createRedirect({
				fromPath,
				toPath,
				isPermanent: true,
			});
		}
	}
};
