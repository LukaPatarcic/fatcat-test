import React, {
	Fragment,
	useState,
} from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { css } from 'styled-components';

// Assets
import Arrow from '../../../../../assets/images/svg-inline/arrow-down.svg';

// Atoms
import {
	DropdownItemsContainer,
	DropdownWrapper,
	VerticalLine,
} from './NavDropdown.atoms';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';
import DropdownLink from '../DropdownLink';

// Utils
import useViewportPosition from '../../../../../utils/hooks/useViewportPosition';

// Types
import { THeaderLinks } from '../../types';

interface NavDropdownProps {
	title: string;
	url?: string;
	id?: string;
	items: NonNullable<THeaderLinks[string]['subLinks']>;
}

const NavDropdown: React.FC<NavDropdownProps> = (props) => {
	const {
		title,
		url,
		id,
		items,
	} = props;

	const { rect, ref: linkRef } = useViewportPosition<HTMLDivElement>();
	const [isOpen, setIsOpen] = useState(false);

	// @TODO: check whether it's ok for DropdownWrapper to be focused and the <Link> to not be focused (tabindex:-1)
	//  because the DropdownWrapper needs to be focused in order for dropdown navigation to work
	return (
		<DropdownWrapper
			tabIndex={0}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			onFocus={() => setIsOpen(true)}
			onBlur={() => setIsOpen(false)}
		>
			<Flex
				alignItems="center"
				ref={linkRef}
			>
				<Link
					variant="nav"
					as={url ? GatsbyLink : 'button'}
					// @ts-ignore
					to={url || undefined}
					margin={['r10']}
					tabIndex={-1}
					id={id}
				>
					{title}
				</Link>
				<Arrow />
			</Flex>
			<DropdownItemsContainer
				/* We use style instead of left prop because it's changing on every window resize and can cause
   				   styled-components to create a bunch of classes for it. */
				style={{
					left: `-${rect?.left ?? 0}px`,
				}}
				isOpen={isOpen}
			>
				<Wrapper
					w="0"
					h="0"
					position="absolute"
					top="24px" // this is the padding of the DropdownItemsContainer
					// We calculate the triangle position based on the position of the link in the viewport
					borderLeft="10px solid transparent"
					borderRight="10px solid transparent"
					borderBottom="8px solid white"
					transform="translate(-50%, -100%)"
					/* We use style instead of left prop because it's changing on every window resize and can cause
					   styled-components to create a bunch of classes for it. */
					style={{
						left: `${(rect?.left ?? 0) + (rect?.width ?? 0) / 2}px`,
					}}
				/>
				<Section
					as="div"
					w="wide"
					styled={css`
						justify-content: center;
						${({ theme }) => theme.media.wideDesktop} {
							justify-content: flex-end;
						}
					`}
				>
					<Flex
						as="ul"
						backgroundColor="white"
						padding="s16"
						boxShadow="0px 8px 24px rgba(197, 197, 197, 0.25)"
						borderRadius="12px"
						gap="16px"
					>
						{Object.values(items).map((link, index) => (
							<Fragment
								key={link.text}
							>
								<Flex
									as="li"
									direction="column"
								>
									<DropdownLink
										size="large"
										to={link.url}
										icon={link.icon}
										text={link.text}
										description={link.description}
									/>
									<ul>
										{link.subLinks && Object.values(link.subLinks).map(subLink => (
											<li
												key={subLink.text}
											>
												<DropdownLink
													size="small"
													icon={subLink.icon}
													to={subLink.url}
													text={subLink.text}
												/>
											</li>
										))}
									</ul>
								</Flex>
								{index !== Object.values(items).length - 1 && <VerticalLine backgroundColor="black" />}
							</Fragment>
						))}
					</Flex>
				</Section>
			</DropdownItemsContainer>
		</DropdownWrapper>
	);
};

NavDropdown.defaultProps = {
	url: undefined,
	id: undefined,
};

export default NavDropdown;
