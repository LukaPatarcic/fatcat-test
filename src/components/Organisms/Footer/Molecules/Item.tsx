import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { useTheme } from 'styled-components';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';

export interface ItemProps {
	title: string;
	url: string;
	cells?: {
		title: string;
		url: string;
	}[];
}

const Item: React.FC<ItemProps> = (props) => {
	const {
		title,
		url,
		cells,
	} = props;
	const theme = useTheme();

	return (
		<Flex
			as="li"
			direction="column"
			gap="20px"
		>
			<Link
				as={GatsbyLink}
				variant="footer"
				to={url}
				textSize="h5Mobile"
				hover={[{ textColor: 'purple' }]}
			>
				{title}
			</Link>
			{cells && (
				<Flex
					as="ul"
					direction="column"
					gap="20px"
					borderLeft={`2px solid ${theme.color.mainYellow}`}
					paddingLeft="s18"
				>
					{cells.map(cell => (
						<li
							key={cell.title}
						>
							<Link
								as={GatsbyLink}
								to={cell.url}
								variant="footer"
								fontSize="s16"
								fontWeight="normal"
								textColor="black"
								hover={[{ textColor: 'purple' }]}
							>
								{cell.title}
							</Link>
						</li>
					))}
				</Flex>
			)}
		</Flex>
	);
};

Item.defaultProps = {
	cells: undefined,
};

export default Item;
