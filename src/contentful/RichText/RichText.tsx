import React, { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Options } from '@contentful/rich-text-react-renderer';

import {
	BLOCKS,
	INLINES,
	MARKS,
} from '@contentful/rich-text-types';

import { RichTextData, TGatsbyImage } from '../../utils/types';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { OlList } from 'fatcat-ui-library/components/Atoms/OlList';
import { UlList } from 'fatcat-ui-library/components/Atoms/UlList';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Link as UILink } from 'fatcat-ui-library/components/Atoms/Link';

// Molecules
import CodeBlock from '../../components/Molecules/CodeBlock';

// Contentful
import ContentfulImage from '../ContentfulImage';

// Helpers
import SplitText from '../SplitText/SplitText';

// Widget manager
import ComponentManager from '../ComponentManager';
import { BlockQuote } from '../../components/Atoms/BlockQuote';

const options: Options = {
	renderText: (text: string) => SplitText(text),
	renderMark: {
		[MARKS.BOLD]: text => <Text fontWeight="bold">{text}</Text>,
		[MARKS.ITALIC]: text => <Text fontStyle="italic">{text}</Text>,
		[MARKS.UNDERLINE]: text => <Text textDecoration="underline">{text}</Text>,
		[MARKS.CODE]: (text) => {
			// @TODO: maybe there is a better way for code block?
			return <CodeBlock text={text as (ReactElement | string)[] | ReactElement} />;
		},
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: ({ content }, children) => {
			// @TODO: maybe there is a better way of handling code blocks?
			let isCodeBlock = false;
			// @ts-ignore
			if (content[0].value.length === 0) {
				return null;
			}
			// @ts-ignore
			if (content.length === 1 && content[0].marks[0]?.type === 'code') isCodeBlock = true;
			return (
				<Paragraph
					as={isCodeBlock ? 'div' : 'p'}
					textColor="gray80"
					margin={['b24']}
				>
					{children}
				</Paragraph>
			);
		},
		[BLOCKS.HEADING_1]: (node, children) => {
			return (
				<Heading
					as="h1"
					margin={['b24', 't24']}
				>
					{children as ReactElement}
				</Heading>
			);
		},
		[BLOCKS.HEADING_2]: (node, children) => (
			<Heading
				as="h2"
				margin={['b24', 't24']}
			>
				{children as ReactElement}
			</Heading>
		),
		[BLOCKS.HEADING_3]: (node, children) => (
			<Heading
				as="h3"
				margin={['b24', 't24']}
			>
				{children}
			</Heading>
		),
		[BLOCKS.HEADING_4]: (node, children) => (
			<Heading
				as="h4"
				margin={['b24', 't24']}
			>
				{children}
			</Heading>
		),
		[BLOCKS.HEADING_5]: (node, children) => (
			<Heading
				as="h5"
				margin={['b24', 't24']}
			>
				{children}
			</Heading>
		),
		[BLOCKS.HEADING_6]: (node, children) => (
			<Heading
				as="h6"
				margin={['b24', 't24']}
			>
				{children}
			</Heading>
		),
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			const { data } = node;
			return (
				<Flex
					marginBottom="s24"
					justifyContent="center"
				>
					<ContentfulImage {...data.target as TGatsbyImage} />
				</Flex>
			);
		},
		[BLOCKS.EMBEDDED_ENTRY]: (node) => {
			const { data } = node;
			// ignore empty block
			if (!data.target) {
				return null;
			}

			return ComponentManager(data.target);
		},
		[BLOCKS.HR]: () => <hr />,
		[BLOCKS.OL_LIST]: (node, children) => (
			<OlList
				marginBottom="s24"
			>
				{children}
			</OlList>
		),
		[BLOCKS.UL_LIST]: (node, children) => (
			<UlList
				variant="base"
				bulletColor="primary"
				marginBottom="s24"
			>
				{children}
			</UlList>
		),
		[BLOCKS.QUOTE]: (node, children) => (
			<BlockQuote>
				{children}
			</BlockQuote>
		),
		[INLINES.HYPERLINK]: (node, children) => {
			const { data } = node;
			const newTab = data.uri.startsWith('http') || data.uri.startsWith('www') ? '_blank' : '_self';
			return (
				<UILink
					as={!newTab ? GatsbyLink : undefined}
					margin={['t16']}
					to={data.uri}
					variant="primary"
					target={newTab}
				>
					{children}
				</UILink>
			);
		},
	},
};

const RichText = (content: RichTextData) => {
	return renderRichText(content, options);
};

export default RichText;
