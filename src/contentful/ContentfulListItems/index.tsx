import React from 'react';

// Types
import { TContentfulComponentList } from '../../utils/types';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';

// Local managers
import ContentfulCard from '../ContentfulCard';

const ContentfulComponentListItems = (props: TContentfulComponentList) => {
	const {
		display,
		direction,
		alignItems,
		justifyContent,
		gap,
		items,
		rowGap,
		gridTemplateColumns,
		wrap,
	} = props;

	const renderList = () => {
		if (display === 'grid') {
			// Add grid view
			return (
				<Grid
					alignItems={alignItems}
					justifyContent={justifyContent}
					gap={gap}
					gridTemplateColumns={gridTemplateColumns}
					rowGap={rowGap}
				>
					{items.map((card, index) => (
						<ContentfulCard
							key={index} // eslint-disable-line
							card={card}
						/>
					))}
				</Grid>
			);
		}

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const flexWrap: any = {};

		if (wrap && wrap !== 'always') {
			flexWrap[wrap] = ['wrap'];
		}

		return (
			<Flex
				direction={direction}
				alignItems={alignItems}
				justifyContent={justifyContent}
				gap={gap}
				{...flexWrap}
				wrap={wrap === 'always'}
			>
				{items.map((card, index) => (
					<ContentfulCard
						key={index} // eslint-disable-line
						card={card}
					/>
				))}
			</Flex>
		);
	};

	return renderList();
};

export default ContentfulComponentListItems;
