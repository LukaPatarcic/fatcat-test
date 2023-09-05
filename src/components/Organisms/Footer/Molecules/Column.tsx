import React, { ReactElement } from 'react';
import Item, { ItemProps } from './Item';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

interface ColumnProps {
	title: string;
	items?: ItemProps[];
	otherContent?: ReactElement;
	lastColumn?: boolean;
}

const Column: React.FC<ColumnProps> = (props) => {
	const {
		title,
		items,
		otherContent,
		lastColumn,
	} = props;

	return (
		<Flex
			direction="column"
			w="auto"
			tablet={[{ marginBottom: lastColumn ? 's0' : 's40' }]}
		>
			<Heading
				as="h5"
				textSize="h5Mobile"
				textColor="purple"
				marginBottom="s20"
			>
				{title}
			</Heading>
			{items && (
				<Flex
					as="ul"
					direction="column"
					gap="30px"
				>
					{items.map(item => (
						<Item
							key={item.title}
							title={item.title}
							url={item.url}
							cells={item.cells}
						/>
					))}
				</Flex>
			)}
			{otherContent}
		</Flex>
	);
};

Column.defaultProps = {
	items: undefined,
	otherContent: undefined,
	lastColumn: false,
};

export default Column;
