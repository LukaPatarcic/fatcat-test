import React, { MouseEventHandler } from 'react';
import { useTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby-link';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { NavigationMenuWrapper } from './NavigationMobileMenu.atom';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import Button from '../../../../Atoms/Button';

// Molecules
import DropdownLink from '../DropdownLink';

// Types
import { THeaderLinks } from '../../types';

// Utils
import {
	trackAnalytic,
	TrackAction,
	TrackLabel,
} from '../../../../../utils/gtag';
import { getUrl } from '../../../../../utils/helpers';

type NavigationMobileMenuProps = {
	open: boolean;
	headerLinks: THeaderLinks;
	onLinkClick: MouseEventHandler<HTMLAnchorElement>;
}

const NavigationMobileMenu: React.FC<NavigationMobileMenuProps> = (props) => {
	const {
		open,
		headerLinks,
		onLinkClick,
	} = props;

	const theme = useTheme();

	return (
		<NavigationMenuWrapper open={open} aria-label="Main Mobile">
			<Flex
				show="largeTablet"
				direction="column"
				backgroundColor="white"
				padding={['l24', 'r24', 'b24']}
				minH="100%"
			>
				<Flex
					direction="column"
				>
					{Object.values(headerLinks).map((link, index) => (
						<Flex
							key={link.text}
							direction="column"
						>
							<Link
								variant="nav"
								as={link.url ? GatsbyLink : 'button'}
								// @ts-ignore
								to={link.url || undefined}
								textColor={link.url ? 'black' : 'gray60'}
								padding="s8"
								onClick={onLinkClick}
							>
								{link.text}
							</Link>
							{link.subLinks && Object.values(link.subLinks).map((subLink, index) => (
								<Wrapper
									key={subLink.text}
									borderBottom={
										index !== Object.values(link.subLinks ?? {}).length - 1 ?
											`1px solid ${theme.color.gray10}` :
											undefined
									}
								>
									<DropdownLink
										key={subLink.text}
										size="large"
										icon={subLink.icon}
										to={subLink.url}
										text={subLink.text}
										description={subLink.description}
										onLinkClick={onLinkClick}
									/>
									{subLink.subLinks && Object.values(subLink.subLinks).map(subSubLink => (
										<DropdownLink
											key={subSubLink.text}
											size="small"
											icon={subSubLink.icon}
											to={subSubLink.url}
											text={subSubLink.text}
											onLinkClick={onLinkClick}
										/>
									))}
								</Wrapper>
							))}
						</Flex>
					))}
					<Button
						to="/contact-us"
						buttonColor="primaryPurple"
						text="Contact Us"
						marginTop="s24"
						onClick={(e) => {
							(onLinkClick as unknown as MouseEventHandler<HTMLButtonElement>)(e);
							trackAnalytic(
								TrackAction.CTA_BUTTON_CLICK,
								TrackLabel.CONTACT_US_NAVIGATION_MENU,
								getUrl()
							);
						}}
					/>
				</Flex>
			</Flex>
		</NavigationMenuWrapper>
	);
};

export default NavigationMobileMenu;
