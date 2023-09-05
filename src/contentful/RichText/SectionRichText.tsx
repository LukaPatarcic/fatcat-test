import React, { ReactNode, ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import {
	BLOCKS,
	Block,
	INLINES,
	Inline,
	MARKS,
} from '@contentful/rich-text-types';

import { RichTextData } from '../../utils/types';

import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Link as UILink } from 'fatcat-ui-library/components/Atoms/Link';

// Helpers
import SplitText from '../SplitText/SplitText';

// Widget manager
import ComponentManager from '../ComponentManager';

type Node = Block | Inline;

const options = {
	renderText: (text: string): ReactNode => SplitText(text),
	renderMark: {
		[MARKS.BOLD]: (text: ReactNode): ReactNode => <Text fontWeight="bold">{text as ReactElement}</Text>,
		[MARKS.ITALIC]: (text: ReactNode): ReactNode => <Text fontStyle="italic">{text as ReactElement}</Text>,
		[MARKS.UNDERLINE]: (text: ReactNode): ReactNode => <Text textDecoration="underline">{text as ReactElement}</Text>,
		[MARKS.CODE]: (text: ReactNode): ReactNode => <Text as="code">{text as ReactElement}</Text>,
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode): ReactNode => {
			// removing empty paragraph if section only need to render components
			if (Array.isArray(children) && children.length === 1 && !children[0][0]) return null; // eslint-disable-line
			return (
				<Paragraph
					textAlign="center"
				>
					{children as ReactElement[]}
				</Paragraph>
			);
		},
		[BLOCKS.HEADING_1]: (node: Node, children: ReactNode): ReactNode => {
			return (
				<Heading
					as="h1"
					margin={['b32']}
					textAlign="center"
				>
					{children as ReactElement}
				</Heading>
			);
		},
		[BLOCKS.HEADING_2]: (node: Node, children: ReactNode): ReactNode => (
			<Heading
				as="h2"
				margin={['b32']}
				textAlign="center"
			>
				{children as ReactElement}
			</Heading>
		),
		[BLOCKS.HEADING_3]: (node: Node, children: ReactNode): ReactNode => (
			<Heading
				as="h3"
				margin={['b32']}
				textAlign="center"
			>
				{children as ReactElement}
			</Heading>
		),
		[BLOCKS.HEADING_4]: (node: Node, children: ReactNode): ReactNode => (
			<Heading
				as="h4"
				margin={['b32']}
				textAlign="center"
			>
				{children as ReactElement}
			</Heading>
		),
		[BLOCKS.HEADING_5]: (node: Node, children: ReactNode): ReactNode => (
			<Heading
				as="h5"
				margin={['b32']}
				textAlign="center"
			>
				{children as ReactElement}
			</Heading>
		),
		[BLOCKS.HEADING_6]: (node: Node, children: ReactNode): ReactNode => (
			<Heading
				as="h6"
				margin={['b32']}
				textAlign="center"
			>
				{children as ReactElement}
			</Heading>
		),
		[BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
			const { data } = node;
			return (
				<Image
					alt={data.target.description}
					src={data.target.file.url}
				/>
			);
		},
		[BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
			const { data } = node;
			// ignore empty block
			if (!data.target) {
				return null;
			}

			return ComponentManager(data.target);
		},
		[INLINES.HYPERLINK]: (node: Node, children: ReactNode): ReactNode => {
			const { data } = node;
			const newTab = data.uri.startsWith('http') || data.uri.startsWith('www') ? '_blank' : '_self';
			return (
				<UILink
					as={!newTab ? GatsbyLink : undefined}
					margin={['t16']}
					to={data.uri}
					target={newTab}
				>
					{children as ReactElement}
				</UILink>
			);
		},
	},
};

const SectionRichText = (content: RichTextData) => {
	return renderRichText(content, options);
};

export default SectionRichText;
