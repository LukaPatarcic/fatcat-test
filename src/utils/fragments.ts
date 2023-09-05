import { graphql } from 'gatsby';

export const qlAssetField = graphql`
    fragment AssetFields on ContentfulAsset {
		__typename
		contentful_id
		description
        file {
			contentType
            url
			details {
				image {
					width
					height
				}
			}
        }
    }
`;

export const qlMetaFields = graphql`
    fragment MetaFields on ContentfulMeta {
        pageTitle
		metaDescription
		ogImage {
			...AssetFields
		}
    }
`;

export const qlContentfulImage = graphql`
    fragment ContentfulImage on ContentfulAsset {
        ...AssetFields
		gatsbyImageData(placeholder: BLURRED, quality: 90)
    }
`;

export const qlPreviewBlogPost = graphql`
	fragment PreviewBlogPostFields on ContentfulBlog {
		slug
		category {
			slug
			title
		}
		title
		publishedAt(formatString: "MMM DD, YYYY")
		publishedAtNonformatted: publishedAt(formatString: "YYYY-MM-DD")
		excerpt {
			excerpt
		}
		fields {
			readingTime
		}
		previewImage {
			...ContentfulImage
		}
	}
`;

export const qlSingleBlogPost = graphql`
	fragment SingleBlogPostFields on ContentfulBlog {
		title
		slug
		excerpt {
			excerpt
		}
		previewImage {
			...ContentfulImage
		}
		publishedAt(formatString: "MMMM DD, YYYY")
		publishedAtNonformatted: publishedAt(formatString: "YYYY-MM-DD")
		fields {
			readingTime
		}
		post {
			raw
			references {
				... on ContentfulAsset {
					__typename
					contentful_id
					...AssetFields
					gatsbyImageData
				}
			}
		}
		category {
			title
			slug
		}
		meta {
			...MetaFields
		}
	}
`;

export const qlTeamMember = graphql`
	fragment MemberFields on ContentfulMember {
		name
		title
		slug
		linkedin
		image {
			...AssetFields
			gatsbyImageData(placeholder: BLURRED, quality: 90)
		}
	}
`;

export const qlLinkFields = graphql`
    fragment LinkFields on ContentfulLink {
		__typename
		contentful_id
        identifier
        title
		url
		linkVariant
		linkColor
		buttonVariant
		buttonColor
		openInNewTab
		asset {
			...AssetFields
		}
		# icon {
		# 	...AssetFields
		# }
		page {
			... on ContentfulPage {
				__typename
				slug
			}
		}
    }
`;

export const ComponentBanner = graphql`
	fragment ComponentBanner on ContentfulComponentBanner {
		__typename
		contentful_id
		identifier
		title {
			...ComponentHeading
		}
		description
		links {
			...LinkFields
		}
	}
`;

export const qlComponentHeading = graphql`
    fragment ComponentHeading on ContentfulComponentHeading {
		__typename
		contentful_id
		headingSize
		headingText {
			text
			textColor
		}
    }
`;

export const qlComponentPartnershipBanner = graphql`
	fragment ComponentPartnershipBanner on ContentfulComponentPartnershipBanner {
		__typename
		contentful_id
		bannerText
		partners {
			...ContentfulImage
		}
    }
`;

export const qlCardFields = graphql`
    fragment CardFields on ContentfulComponentCard {
		identifier
		type
		title
		headerColor
        description {
			description
        }
		link {
 			...LinkFields
		}
		image {
			...ContentfulImage
		}
    }
`;

export const qlSplitBlock = graphql`
	fragment ComponentSplitBlock on ContentfulComponentSplitBlock {
		__typename
		contentful_id
		size
		reversed
		firstBlock {
			raw
		}
		secondBlock {
			raw
			references {
				...ContentfulImage
			}
		}
	}
`;

export const qlComponentListItems = graphql`
	fragment ComponentListItems on ContentfulComponentListItems {
		__typename
		contentful_id
		display
        gridTemplateColumns
		justifyContent
		gap
		wrap
		items {
			...CardFields
		}

    }
`;

export const qlComponentHero = graphql`
	fragment ComponentHero on ContentfulComponentHero {
		__typename
		contentful_id
		variant
		title {
			...ComponentHeading
		}
		description
		links {
			...LinkFields
		}
		asset {
			...ContentfulImage
		}
    }
`;

export const qlPreviewJobPost = graphql`
	fragment PreviewJobPostFields on ContentfulJob {
		title
		slug
		excerpt {
			excerpt
		}
		isActive
		location
		salary
		workModel
	}
`;

export const qlSingleJobPost = graphql`
	fragment SingleJobPostFields on ContentfulJob {
		title
		jobId
		slug
		excerpt {
			excerpt
		}
		jobContent {
			raw
		}
		isActive
		location
		salary
		slug
		workModel
		interviewDuration
		meta {
			...MetaFields
		}
	}
`;
