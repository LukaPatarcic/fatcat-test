import React, { ReactElement } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTheme } from 'styled-components';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';

// Assets
import Copy from '../../../assets/images/svg-inline/copy.svg';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text/Text';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { CopyButton } from './atoms';

SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('jsx', jsx);

interface CodeBlockProps {
	text: (ReactElement | string)[] | ReactElement;
}

const CodeBlock: React.FC<CodeBlockProps> = (props) => {
	const {
		text,
	} = props;

	const theme = useTheme();

	if (!(text instanceof Array)) return null;

	if (text.length === 1 && typeof text[0] === 'string') {
		text[0] = text[0].trim();
		return (
			<Text
				as="code"
				backgroundColor="cream"
				padding={['t2', 'b2', 'l4', 'r4']}
				borderRadius="4px"
				textColor="black"
				fontFamily="code"
				style={{ fontSize: '0.8em' }}
			>
				{text[0]}
			</Text>
		);
	}

	const code = text.reduce<string>((acc, v) => {
		if (typeof v === 'string') return acc + v;
		return `${acc}\n`;
	}, '');

	return (
		<Wrapper position="relative">
			<Flex
				position="absolute"
				top="5px"
				right="5px"
				h="30px"
				w="30px"
			>
				<CopyToClipboard text={code}>
					<CopyButton
						type="button"
						aria-label="Copy to clipboard"
						title="Copy to clipboard"
					>
						<Copy />
					</CopyButton>
				</CopyToClipboard>
			</Flex>
			<SyntaxHighlighter
				showLineNumbers
				language="php"
				// @ts-ignore
				style={theme.codeBlock}
				customStyle={{ fontSize: '14px', borderRadius: '4px', margin: 0 }}
				codeTagProps={{ style: { userSelect: 'text' } }}
			>
				{code}
			</SyntaxHighlighter>
		</Wrapper>
	);
};

export default CodeBlock;
