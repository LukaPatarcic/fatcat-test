import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Properties } from 'csstype';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Text } from 'fatcat-ui-library/components/Atoms/Text/Text';

export type Item = {
	icon: string;
	text: string;
	alt: string;
	link?: string;
} & ({
	as?: 'span';
} | {
	as?: 'time';
	dateTime: string;
});

interface ItemRowProps {
	item: Item;
	textColor?: keyof DefaultTheme['textColor'];
	fontWeight?: keyof DefaultTheme['fontWeight'];
	whiteSpace?: Properties['whiteSpace'];
	smallerSize?: boolean;
}

const ItemRow: React.FC<ItemRowProps> = (props) => {
	const {
		item,
		textColor,
		fontWeight,
		whiteSpace,
		smallerSize,
	} = props;

	return (
		<Flex
			key={item.text}
			alignItems="flex-start"
			gap={smallerSize ? '8px' : '16px'}
			w="fit-content"
		>
			<Image
				w={smallerSize ? '16px' : '24px'}
				src={item.icon}
				alt={item.alt}
			/>
			<Text
				as={item.as}
				dateTime={item.as === 'time' ? item.dateTime : undefined}
				fontSize={smallerSize ? 's14' : 's18'}
				textColor={textColor}
				fontWeight={fontWeight}
				whiteSpace={whiteSpace}
			>
				{item.text}
			</Text>
		</Flex>
	);
};

ItemRow.defaultProps = {
	textColor: 'gray60',
	fontWeight: 'medium',
	whiteSpace: undefined,
	smallerSize: undefined,
};

export default ItemRow;
