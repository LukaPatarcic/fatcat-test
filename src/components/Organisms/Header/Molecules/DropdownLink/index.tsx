import React, { MouseEventHandler } from 'react';
import { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby-link';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';

export const NavLinkStyles = css`
	&:hover {
		background-color: ${props => props.theme.backgroundColor.cream};
	}
	
	&:hover > div > span {
		color: ${props => props.theme.textColor.purple};
	}
`;

interface DropdownLinkProps {
	size: 'small' | 'large';
	to: string;
	icon: string;
	text: string;
	description?: string;
	onLinkClick?: MouseEventHandler<HTMLAnchorElement>;
}

const DropdownLink: React.FC<DropdownLinkProps> = (props) => {
	const {
		size,
		to,
		icon,
		text,
		description,
		onLinkClick,
	} = props;

	return (
		<Link
			as={GatsbyLink}
			to={to}
			variant="noStyle"
			display="block"
			borderRadius="8px"
			padding="s16"
			w="100%"
			styled={NavLinkStyles}
			standardDesktop={[{ paddingX: 's8' }]}
			largeTablet={[
				{
					padding: 's16',
				},
			]}
			onClick={onLinkClick}
		>
			<Flex
				gap="8px"
			>
				<Image
					src={icon}
					h={size === 'large' ? '24px' : '20px'}
					w="auto"
					alt=""
					alignSelf="center"
				/>
				<Text
					fontSize={size === 'large' ? 's16' : 's14'}
					fontWeight={size === 'large' ? 'medium' : 'normal'}
				>
					{text}
				</Text>
			</Flex>
			{size === 'large' && description && (
				<Text
					textColor="gray60"
					fontSize="s14"
				>
					{description}
				</Text>
			)}
		</Link>
	);
};

DropdownLink.defaultProps = {
	description: undefined,
	onLinkClick: undefined,
};

export default DropdownLink;
