import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Properties } from 'csstype';

// Atoms
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Flex, TFlex } from 'fatcat-ui-library/components/Atoms/Flex';

// Molecules
import ItemRow, { Item } from './Molecules/ItemRow';

interface IconListProps extends TFlex {
	items: Item[];
	textColor?: keyof DefaultTheme['textColor'];
	fontWeight?: keyof DefaultTheme['fontWeight'];
	whiteSpace?: Properties['whiteSpace'];
	smallerSize?: boolean;
}

const IconList: React.FC<IconListProps> = (props) => {
	const {
		items,
		textColor,
		fontWeight,
		whiteSpace,
		smallerSize,
		...rest
	} = props;

	return (
		<Flex
			as="ul"
			{...rest}
		>
			{items.map(item => (
				<Wrapper
					as="li"
					key={item.text}
					w="fit-content"
				>
					{!item.link ? (
						<ItemRow
							item={item}
							textColor={textColor}
							fontWeight={fontWeight}
							whiteSpace={whiteSpace}
							smallerSize={smallerSize}
						/>
					) : (
						<Link
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ItemRow
								item={item}
								textColor={textColor}
								fontWeight={fontWeight}
								whiteSpace={whiteSpace}
							/>
						</Link>
					)}
				</Wrapper>
			))}
		</Flex>
	);
};

IconList.defaultProps = {
	textColor: 'gray60',
	fontWeight: 'medium',
	whiteSpace: undefined,
	smallerSize: undefined,
};

export default IconList;
