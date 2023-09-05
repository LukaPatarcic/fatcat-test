import React, { useEffect, useState } from 'react';
import { DefaultTheme, css, useTheme } from 'styled-components';
import {
	Link as GatsbyLink,
} from 'gatsby';

// Assets
import logo from '../../../assets/images/logo.svg';
import softwareDevelopment from '../../../assets/images/icons/software-development.svg';
import staffAugmentation from '../../../assets/images/icons/staff-augmentation.svg';
import hiringPartner from '../../../assets/images/icons/hiring-partner.svg';
import employerOfRecord from '../../../assets/images/icons/employer-of-record.svg';
import appDev from '../../../assets/images/icons/application-development.svg';
import webDev from '../../../assets/images/icons/website-development.svg';
import technicalRecruitment from '../../../assets/images/icons/technical-recruitment.svg';
import recruiterOnDemand from '../../../assets/images/icons/recruiter-on-demand.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import Button from '../../Atoms/Button';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';
import HamburgerMenu from './Molecules/HamburgerMenu/HamburgerMenu';
import NavigationMobileMenu from './Molecules/NavigationMobileMenu/NavigationMobileMenu';
import NavDropdown from './Molecules/NavDropdown/NavDropdown';

// Types
import { THeaderLinks } from './types';

// Hooks
import useScrollDirection from '../../../utils/hooks/useScrollDirection';
import useScrollPosition from '../../../utils/hooks/useScrollPosition';

// Utils
import {
	trackAnalytic,
	TrackAction,
	TrackLabel,
} from '../../../utils/gtag';
import { getUrl } from '../../../utils/helpers';
import { useLocation } from '@reach/router';

const headerLinks: THeaderLinks = {
	services: {
		text: 'Services',
		id: 'navigation-services',
		// url: '/',
		subLinks: {
			softwareDevelopment: {
				text: 'Software Development',
				url: '/software-development',
				description: 'Turn your vision into reality.',
				icon: softwareDevelopment,
				subLinks: {
					appDevelopment: {
						text: 'App Development',
						url: '/software-development/application-development',
						icon: appDev,
					},
					webDevelopment: {
						text: 'Web Development',
						url: '/software-development/website-development',
						icon: webDev,
					},
				},
			},
			staffAugmentation: {
				text: 'Staff Augmentation',
				url: '/staff-augmentation',
				description: 'Extend your team, fast.',
				icon: staffAugmentation,
			},
			hiringPartner: {
				text: 'Hiring Partner',
				url: '/hiring-partner',
				description: 'Let us hire for you.',
				icon: hiringPartner,
				subLinks: {
					technicalRecruitment: {
						text: 'Technical Recruitment',
						url: '/hiring-partner/technical-recruitment',
						icon: technicalRecruitment,
					},
					recruiterOnDemand: {
						text: 'Recruiter on Demand',
						url: '/hiring-partner/recruiter-on-demand',
						icon: recruiterOnDemand,
					},
				},
			},
			employerOfRecord: {
				text: 'Employer of Record',
				url: '/employer-of-record',
				description: 'Legally hire in Serbia.',
				icon: employerOfRecord,
			},
		},
	},
	careers: {
		text: 'Careers',
		url: '/careers',
	},
	aboutUs: {
		text: 'About Us',
		url: '/about-us',
	},
	blog: {
		text: 'Blog',
		url: '/blog',
		id: 'navigation-blog',
	},
};

interface HeaderProps {
	backgroundColor: keyof DefaultTheme['backgroundColor'];
}

const Header: React.FC<HeaderProps> = (props) => {
	const {
		backgroundColor,
	} = props;

	const theme = useTheme();

	const [isOpen, setIsOpen] = useState(false);

	// position where direction changed
	const [dirChanged, setDirChanged] = useState<number>(0);
	const directionThreshold = 300;

	const scrollDirection = useScrollDirection();
	const top = useScrollPosition();
	const threshold = 100;

	const openHamMenu = (value: boolean) => {
		setIsOpen(value);
		document.body.classList.toggle('scroll-disabled');
	};

	const onLinkClick = () => {
		openHamMenu(!isOpen);
	};

	useEffect(() => {
		setDirChanged(top);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [scrollDirection]);

	/* When changing the condition (or values) here
	you need to change the same condition in "ServicesNavigation.tsx" */
	const shouldHideHeader =
		(top > threshold && scrollDirection === 'down') ||
		(scrollDirection === 'up' && dirChanged - top < directionThreshold && top > threshold);

	const { pathname } = useLocation();

	useEffect(() => {
		// navigation highlight
		const navigationBlog = document.getElementById('navigation-blog');
		const navigationServices = document.getElementById('navigation-services');

		if (navigationBlog && pathname.startsWith('/blog')) {
			navigationBlog.classList.add('navigation-highlight');
		} else navigationBlog?.classList.remove('navigation-highlight');

		if (navigationServices && (
			pathname.startsWith('/software-development/') ||
			pathname.startsWith('/staff-augmentation/') ||
			pathname.startsWith('/hiring-partner/') ||
			pathname.startsWith('/employer-of-record/'))
		) {
			navigationServices.classList.add('navigation-highlight');
		} else navigationServices?.classList.remove('navigation-highlight');
	}, [pathname]);

	return (
		<Flex
			as="header"
			position="sticky"
			top="0"
			zIndex="100"
			transform={(shouldHideHeader && !isOpen) ? 'translateY(-100%)' : undefined}
			transition="transform 300ms ease-in-out"
		>
			<Flex
				backgroundColor={backgroundColor}
				mobile={[
					{
						backgroundColor: isOpen ? 'white' : undefined,
						zIndex: '1',
					},
				]}
			>
				<Section
					w="fluid"
					as="div"
					paddingY="s16"
				>
					<Flex
						as="nav"
						aria-label="Main header navigation"
						justifyContent="space-between"
						alignItems="center"
					>
						<Link
							as={GatsbyLink}
							variant="noStyle"
							to="/"
							title="FatCatCoders Homepage"
							aria-label="FatCatCoders Homepage"
							onClick={() => openHamMenu(false)}
						>
							<Image
								src={logo}
								alt="Fatcat brand logo"
								w="180px"
								mobile={[
									{
										w: '140px',
									},
								]}
							/>
						</Link>
						<Flex
							as="ul"
							w="fit-content"
							gap="32px"
							alignItems="center"
							hide="largeTablet"
							styled={css`
								[aria-current="page"]:not(#navigation-contact-us) {
									color: ${theme.color.primary};
								}
							`}
						>
							{Object.values(headerLinks).map(link => (
								<li
									key={link.text}
								>
									{link.subLinks ? (
										<NavDropdown
											title={link.text}
											url={link.url}
											items={link.subLinks}
											id={link.id}
										/>
									) : (
										<Link
											variant="nav"
											as={GatsbyLink}
											to={link.url}
											// this is added because of a gatsby bug, where it scrolls to the bottom of a page, instead of scrolling to the top
											onClick={() => { if (link.url === '/blog') window.scrollTo(0, 0); }}
											id={link.id}
										>
											{link.text}
										</Link>
									)}
								</li>
							))}
							<li>
								<Button
									to="/contact-us"
									id="navigation-contact-us"
									buttonColor="primaryPurple"
									text="Contact Us"
									fontWeight="medium"
									onClick={() => trackAnalytic(
										TrackAction.CTA_BUTTON_CLICK,
										TrackLabel.CONTACT_US_HEADER,
										getUrl()
									)}
								/>
							</li>
						</Flex>
						<HamburgerMenu onChange={() => openHamMenu(!isOpen)} isOpen={isOpen} />
					</Flex>
				</Section>
			</Flex>
			<NavigationMobileMenu
				open={isOpen}
				headerLinks={headerLinks}
				onLinkClick={onLinkClick}
			/>
		</Flex>
	);
};

export default Header;
