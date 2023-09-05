import { Properties } from 'csstype';
import { DefaultTheme } from 'styled-components';
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text';

import { IGatsbyImageData } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser';
import { IGatsbyImageDataParent } from 'gatsby-plugin-image/dist/src/components/hooks';

import { MediaDefinition } from 'fatcat-ui-library/theme/definitions';
import { THeading } from 'fatcat-ui-library/components/Atoms/Heading';

export type RichTextData = RenderRichTextData<ContentfulRichTextGatsbyReference>;

export type MediaScreens = 'desktop' | 'largeTablet' | 'tablet' | 'mobile'

export type TContentfulSlugTitle = {
	slug: string;
	title: string;
}

export type TContentfulMeta = {
	ogImage: TContentfulAsset;
	metaDescription: string;
	pageTitle: string;
}

export type TContentfulPreviewBlogPost = {
	slug: string;
	category: TContentfulSlugTitle;
	title: string;
	publishedAt: string;
	publishedAtNonformatted: string;
	excerpt: {
		excerpt: string;
	};
	fields: {
		readingTime: number;
	};
	previewImage: TContentfulImage;
}

export type TContentfulSingleBlogPost = {
	title: string;
	slug: string;
	previewImage: TContentfulImage;
	excerpt: {
		excerpt: string;
	};
	publishedAt: string;
	publishedAtNonformatted: string;
	fields: {
		readingTime: number;
	};
	post: RenderRichTextData<ContentfulRichTextGatsbyReference>;
	category: TContentfulSlugTitle;
	meta: TContentfulMeta;
}

export type TContentfulMember = {
	name: string;
	slug: string;
	title: string;
	linkedin: string;
	image: TContentfulImage;
}

export type TContentfulAsset = {
	file: {
		url: string;
		contentType: string;
		details: {
			image: {
				width: number;
				height: number;
			};
		};
	};
	description?: string;
}

export type TContentfulImage = TContentfulAsset & {
	gatsbyImageData: IGatsbyImageDataParent | IGatsbyImageData;
}

export type TContentfulLongText = {
	description: string;
}

export type ContentfulConfig = {
	spaceId: string | undefined;
	accessToken: string | undefined;
	downloadLocal: boolean;
	host?: string;
}

export type THeadMeta = {
	meta: {
		pageTitle: string;
		metaDescription: string;
		metaKeywords?: string;
		metaImage?: string;
		ogTitle?: string;
		ogDescription?: string;
		ogImage?: TContentfulAsset;
		twitterTitle?: string;
		twitterDescription?: string;
		twitterImage?: TContentfulAsset;
	};
}

// General page type
export type TContentfulPage = {
	data: {
		contentfulPage: {
			sections: TContentfulSection[];
		} & THeadMeta;
	};
}

// Base contentful model definition
export type TContentfulBase = {
	__typename: string;
}

export type TContentfulOptions = {
	identifier: string;
	key: string;
	value: string;
}

export type TContentfulText = {
	text: string;
	textColor: keyof DefaultTheme['textColor'];
}

export type TContentfulHeading = {
	headingSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	headingText: TContentfulText[];
} & THeading

export type TContentfulBanner = {
	title: TContentfulHeading;
	description?: string;
	links?: TContentfulLink[];
}

export type TContentfulBackground = {
	backgroundImage?: TContentfulAsset;
	backgroundSize?: Properties['backgroundSize'];
	backgroundRepeat?: Properties['backgroundRepeat'];
	backgroundPosition?: Properties['backgroundPosition'];
	backgroundColor?: keyof DefaultTheme['backgroundColor'];
	backgroundColorOpacity?: number;
	backgroundGradient?: string;
}

export type TContentfulSection = {
	options: TContentfulOptions[];
	identifier: string;
	width: keyof DefaultTheme['sectionWidth'];
	background: TContentfulBackground;
	content: RichTextData;
	overflow?: Properties['overflow'];
	edge?: boolean;
	scale?: boolean;
	hide?: MediaScreens;
	show?: MediaScreens;
}

// Contentful link definition
export type TContentfulLink = {
	identifier: string;
	title: string;
	url: string;
	buttonVariant?: keyof DefaultTheme['buttonVariant'];
	buttonColor?: keyof DefaultTheme['buttonColor'];
	buttonSize?: 'large' | 'medium' | 'small' | 'nav';
	linkVariant?: keyof DefaultTheme['linkVariant'];
	linkColor?: keyof DefaultTheme['linkColor'];
	icon?: TContentfulAsset;
	page?: {
		slug: string;
		__typename: string;
	};
	asset?: TContentfulAsset;
	openInNewTab: boolean;
	items?: TContentfulLink[];
	onChange?: () => void;
}

export type TGatsbyImage = {
	file: {
		url: string;
		contentType: string;
		details: {
			image: {
				width: number;
				height: number;
			};
		};
	};
	description?: string;
	gatsbyImageData: IGatsbyImageDataParent | IGatsbyImageData;
}

export type TContentfulPartnershipBanner = {
	bannerText: string;
	partners: TGatsbyImage[];
}

export type TContentfulSpacer = {
	size: keyof DefaultTheme['space'];
	scale: boolean;
}

export type TContentfulCard = {
	title: string;
	type: 'simple' | 'brand-review';
	description: TContentfulLongText;
	headerColor?: keyof DefaultTheme['backgroundColor'];
	image: TGatsbyImage;
	link: TContentfulLink;
	eyebrow: string;
	callToAction: TContentfulLink;
}

export type TContentfulComponentList = {
	display: 'list' | 'grid';
	listTitle?: TContentfulHeading;
	description?: string;
	headingDirection?: Properties['flexDirection'];
	showDivider?: boolean;
	direction?: Properties['flexDirection'];
	alignItems?: Properties['alignItems'];
	justifyContent?: Properties['justifyContent'];
	gap?: Properties['gap'];
	rowGap?: Properties['rowGap'];
	options?: TContentfulOptions[];
	items: TContentfulCard[];
	gridTemplateColumns?: Properties['gridTemplateColumns'];
	wrap?: MediaDefinition | 'always';
	name?: string;
	useSlider?: boolean;
}

export type TContentfulSplitBlock = {
	size: '50% : 50%' | '66% : 33%' | '75% : 25%';
	firstBlock: RichTextData;
	secondBlock: RichTextData;
	reversed: boolean;
}

export type TContentfulHero = {
	title: TContentfulHeading;
	description?: string;
	variant: 'variant-1' | 'variant-2';
	links?: TContentfulLink[];
	asset?: TGatsbyImage;
}

type TBlogFields = {
	readingTime: string;
}

export type TAuthor = {
	name: string;
	image: TGatsbyImage;
	city?: string;
	position?: string;
}

export type TBlogPost = {
	author: TAuthor;
	excerpt: string;
	slug: string;
	heroImage: TGatsbyImage;
	previewImage: TGatsbyImage;
	title: string;
	post: RichTextData;
	publishedAt: string;
	createdAt: string;
	fields: TBlogFields;
	tags?: { identifier: string }[];
} & THeadMeta

export type TContentfulPreviewJobPost = {
	title: string;
	slug: string;
	excerpt: {
		excerpt: string;
	};
	isActive: boolean;
	location: string;
	salary: string;
	workModel: string;
}

export type TContentfulJobPost = {
	title: string;
	jobId: number;
	slug: string;
	excerpt: {
		excerpt: string;
	};
	meta: TContentfulMeta;
	isActive: boolean;
	location: string;
	salary: string;
	workModel: string;
	jobContent: RichTextData;
	interviewDuration: string;
}
