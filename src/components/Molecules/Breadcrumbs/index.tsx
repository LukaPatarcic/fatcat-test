import React, { Fragment } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import { Text } from 'fatcat-ui-library/components/Atoms/Text/Text';

interface BreadcrumbsProps {
	links: {
		title: string;
		url: string;
	}[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
	const {
		links,
	} = props;

	return (
		<Flex
			gap="16px"
			margin={['b24']}
		>
			{links.map((link, index) => (
				<Fragment
					key={link.title}
				>
					<Link
						as={GatsbyLink}
						to={link.url}
						fontWeight="medium"
					>
						{link.title}
					</Link>
					{index !== links.length - 1 && (
						<Text
							fontSize="s18"
							textColor="gray40"
							fontWeight="medium"
						>
							/
						</Text>
					)}
				</Fragment>
			))}
		</Flex>
	);
};

export default Breadcrumbs;
