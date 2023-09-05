import path from 'path';
import dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';

import { ContentfulConfig } from './src/utils/types';
import manifestIcons from './manifest-config';

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig: ContentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	downloadLocal: false,
};

if (process.env.CONTENTFUL_HOST) {
	contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const config: GatsbyConfig = {
	siteMetadata: {
		title: process.env.SITE_NAME,
		siteUrl: process.env.SITE_URL,
	},
	plugins: [
		// 'gatsby-plugin-perf-budgets',
		// 'gatsby-plugin-webpack-bundle-analyser-v2',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig,
		},
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-sitemap',
			options: {
				serialize: ({ path }: { path: string }) => {
					return {
						url: path,
					};
				},
			},
		},
		'gatsby-plugin-layout',
		'gatsby-plugin-optimize-svgs',
		'gatsby-plugin-preload-fonts',
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				displayName: process.env.NODE_ENV === 'development',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/assets/images`,
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: process.env.SITE_URL,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: `${__dirname}/src/assets/images/svg-inline/`,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: process.env.SITE_URL,
				sitemap: `${process.env.SITE_URL}/sitemap-index.xml`,
				policy: [{ userAgent: '*', allow: '/' }],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: process.env.SITE_NAME,
				short_name: process.env.SITE_SHORT_NAME,
				start_url: '/',
				background_color: '#FFFFFF',
				theme_color: 'rgb(92, 98, 249)',
				display: 'minimal-ui',
				icon: `${__dirname}/static/favicon.svg`,
				icons: manifestIcons,
			},
		},
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: [
					process.env.GOOGLE_ANALYTICS_KEY, // Google Analytics / GA
				],
				gtagConfig: {
					anonymize_ip: true,
				},
				pluginConfig: {
					// Puts tracking script in the head instead of the body
					head: false,
				},
			},
		},
	],
};

export default config;
