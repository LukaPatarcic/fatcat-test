import type { Node, Actions } from 'gatsby';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import readingTime from 'reading-time';

import { RichTextData } from './types';

type TCalculateReadingTime = (arg: { node: Node, actions: Actions }) => void

export const calculateReadingTime: TCalculateReadingTime = ({ node, actions }) => {
	const { internal: { type } } = node;
	if (type !== 'ContentfulBlog') return;
	if (node.post) {
		const richText = (node.post as RichTextData).raw || '';
		const document = JSON.parse(richText);
		const text = documentToPlainTextString(document);
		const result = readingTime(text);
		actions.createNodeField({ node, name: 'readingTime', value: result.minutes });
	} else {
		actions.createNodeField({ node, name: 'readingTime', value: 0 });
	}
};
