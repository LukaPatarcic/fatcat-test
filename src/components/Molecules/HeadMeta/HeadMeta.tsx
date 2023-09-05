import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { THeadMeta } from '../../../utils/types';

// Assets
import metaImage from '../../../assets/images/meta/meta.jpeg';

const HeadMeta: React.FC<THeadMeta> = (props) => {
	const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
	`);

	const { meta } = props;
	const { site } = data;

	const pageTitle = meta?.pageTitle || site?.siteMetadata.title;
	const metaDescription = meta?.metaDescription || site?.siteMetadata.description;
	const metaKeywords = meta?.metaKeywords; // eslint-disable-line
	const ogTitle = meta?.ogTitle || pageTitle;
	const ogDescription = meta?.ogDescription || metaDescription;
	const twitterTitle = meta?.twitterTitle || ogTitle;
	const twitterDescription = meta?.twitterDescription || ogDescription;
	const ogImage = meta?.ogImage?.file.url || meta?.metaImage || metaImage;
	const twitterImage = meta?.twitterImage?.file.url || ogImage;

	return (
		<>
			<title>
				{pageTitle}
			</title>
			<meta name="description" content={metaDescription} />
			{metaKeywords && <meta name="keywords" content={metaKeywords} />}
			<meta name="application-name" content={site?.siteMetadata.title} />
			<meta name="viewport" content="width=device-width,initial-scale=1" />

			{/* Safari Pinned Tab tags */}
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5C62F9" />

			{/*	Apple Touch Tags */}
			<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />

			{/* Facebook Tags */}
			<meta property="og:site_name" content={site?.siteMetadata.title} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image" content={ogImage} />
			{/* <meta property="og:url" content={metaUrl} /> */}

			{/* Twitter tags */}
			<meta property="twitter:title" content={`${twitterTitle}`} />
			<meta property="twitter:description" content={twitterDescription} />
			<meta name="twitter:image" content={twitterImage} />

			{/* Windows 8 and 10 Tile tags */}
			<meta name="msapplication-config" content="/browserconfig.xml" />
		</>
	);
};

export default HeadMeta;
