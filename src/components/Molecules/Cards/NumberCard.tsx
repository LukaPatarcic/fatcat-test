import React, { useEffect, useRef, useState } from 'react';
import { CountUp } from 'use-count-up';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

export interface TrackRecordNumbers {
	num: number;
	numString?: string;
	title: string;
	symbol?: string;
}

interface NumberCardProps {
	num: number;
	numString?: string;
	title: string;
	textLeft?: boolean;
	symbol?: string;
}

const NumberCard: React.FC<NumberCardProps> = (props) => {
	const {
		num,
		numString,
		title,
		textLeft,
		symbol,
	} = props;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isElementVisible, setIsElementVisible] = useState(false);

	const CountUpRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			const [entry] = entries;
			setIsElementVisible(entry.isIntersecting);
		};

		const observer = new IntersectionObserver(handleIntersection, {});

		const domNode = CountUpRef.current;
		if (CountUpRef.current) {
			observer.observe(CountUpRef.current);
		}

		return () => {
			if (domNode) {
				observer.unobserve(domNode);
			}
		};
	}, []);

	return (
		<Flex
			as="article"
			direction="column"
			gap="16px"
			tablet={[
				{ gap: '8px' },
				{ paddingBottom: 's24' },
			]}
		>
			<Text
				fontSize="s38"
				display="block"
				textColor="primary"
				fontWeight="medium"
			>
				<Flex
					textColor="purple"
					justifyContent={textLeft ? 'flex-start' : 'center'}
					tablet={['textCenter', { justifyContent: 'center' }]}
				>
					<Text ref={CountUpRef}>
						<CountUp isCounting={isElementVisible} end={num} duration={3.2} />
					</Text>
					{numString}
					<Text textColor="primary">{symbol ?? '+'}</Text>
				</Flex>
			</Text>
			<Paragraph
				textAlign={textLeft ? 'left' : 'center'}
				fontWeight="medium"
				textColor="gray60"
				tablet={['textCenter']}
			>
				{title}
			</Paragraph>
		</Flex>
	);
};

NumberCard.defaultProps = {
	numString: undefined,
	textLeft: false,
	symbol: undefined,
};

export default NumberCard;
