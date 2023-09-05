import React from 'react';
import { useTheme } from 'styled-components';
import {
	Link as GatsbyLink,
} from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// Assets
import Linkedin from '../../../assets/images/svg-inline/footer/linkedin.svg';
import Facebook from '../../../assets/images/svg-inline/footer/facebook.svg';
import Instagram from '../../../assets/images/svg-inline/footer/instagram.svg';
import logo from '../../../assets/images/logo.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import Button from '../../Atoms/Button';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';
import Column from './Molecules/Column';

// Utils
import { TrackAction, trackAnalytic, TrackLabel } from '../../../utils/gtag';
import { getUrl } from '../../../utils/helpers';

// Static Assets
const cat = '../../../assets/images/footer/cat.png';

const socials = [
	{
		url: 'https://www.facebook.com/fatcatcoders',
		label: 'Go to our facebook page',
		icon: <Facebook />,
	},
	{
		url: 'https://www.linkedin.com/company/fatcat-coders/about/',
		label: 'Go to our Linkedin',
		icon: <Linkedin />,
	},
	{
		url: 'https://www.instagram.com/fatcat.coders/',
		label: 'Go to our Instagram',
		icon: <Instagram />,
	},
];

const Footer = () => {
	const date = new Date();
	const theme = useTheme();
	return (
		<Section
			as="footer"
			paddingTop="s64"
			paddingBottom="s20"
			largeTablet={[
				{
					paddingTop: 's56',
				},
			]}
			tablet={[
				{
					paddingTop: 's48',
				},
			]}
			w="wide"
		>
			<Flex
				as="section"
				justifyContent="space-between"
				position="relative"
				paddingBottom="s52"
				tablet={['column']}
			>
				<Flex
					direction="column"
					alignItems="flex-start"
					maxW="25%"
					tablet={[{
						maxW: '100%',
						marginBottom: 's32',
					}]}
				>
					<Link
						as={GatsbyLink}
						to="/"
						title="FatCatCoders Homepage"
						aria-label="FatCatCoders Homepage"
						marginBottom="s56"
						tablet={[{ marginBottom: 's32' }]}
					>
						<Image
							src={logo}
							alt="Fatcat brand logo"
							h="29px"
							w="auto"
							alignSelf="flex-start"
							tablet={[{ h: '22px' }]}
						/>
					</Link>
					<Paragraph
						fontSize="s14"
						marginBottom="s24"
					>
						Discover our comprehensive range of services including staff augmentation, software
						development, and hiring expertise. Get in touch so we can learn more about your business needs.
					</Paragraph>
					<Button
						to="/contact-us"
						text="Contact us"
						onClick={() => trackAnalytic(
							TrackAction.CTA_BUTTON_CLICK,
							TrackLabel.CONTACT_US,
							getUrl()
						)}
					/>
				</Flex>
				<Column
					title="SERVICES"
					items={[
						{
							title: 'Software Development',
							url: '/software-development',
							cells: [
								{
									title: 'Application Development',
									url: '/software-development/application-development',
								},
								{
									title: 'Web Development',
									url: '/software-development/website-development',
								},
							],
						},
						{
							title: 'Staff Augmentation',
							url: '/staff-augmentation',
						},
						{
							title: 'Hiring Partner',
							url: '/hiring-partner',
							cells: [
								{
									title: 'Technical Recruitment',
									url: '/hiring-partner/technical-recruitment',
								},
								{
									title: 'Recruiter on Demand',
									url: '/hiring-partner/recruiter-on-demand',
								},
							],
						},
						{
							title: 'Employer of Record',
							url: '/employer-of-record',
						},
					]}
				/>
				<Column
					title="COMPANY"
					items={[
						{
							title: 'Careers',
							url: '/careers',
						},
						{
							title: 'About us',
							url: '/about-us',
						},
						{
							title: 'Blog',
							url: '/blog',
						},
					]}
				/>
				<Column
					title="FOLLOW US"
					lastColumn
					otherContent={(
						<Flex
							as="ul"
							gap="16px"
							alignItems="center"
							h="min-content"
						>
							{socials.map(social => (
								<li
									key={social.url}
								>
									<Link
										href={social.url}
										aria-label={social.label}
										target="_blank"
										rel="noopener noreferrer"
										textColor="black"
										display="block"
										hover={[{ textColor: 'purple' }]}
									>
										{social.icon}
									</Link>
								</li>
							))}
						</Flex>
					)}
				/>
				<Wrapper
					maxW="300px"
					position="absolute"
					bottom="0"
					right="0"
					largeTablet={[{
						maxW: '250px',
					}]}
					tablet={[{
						position: 'static',
						transform: 'translate(0px, 52px)',
						alignSelf: 'flex-start',
						maxW: '160px',
					}]}
				>
					<StaticImage
						alt=""
						src={cat}
						layout="constrained"
						placeholder="blurred"
					/>
				</Wrapper>
			</Flex>
			<Flex
				as="section"
				justifyContent="space-between"
				gap="12px"
				borderTop={`1px solid ${theme.color.gray10}`}
				paddingTop="s16"
				textColor="gray60"
				tablet={[
					'column',
					'alignItemsStart',
				]}
			>
				<Link
					as={GatsbyLink}
					variant="noStyle"
					to="/privacy-policy"
					textSize="h5Mobile"
					textColor="black"
					fontWeight="medium"
					hover={[{ textColor: 'purple' }]}
				>
					Privacy policy
				</Link>
				<Paragraph
					fontSize="s16"
					tablet={[
						{
							fontSize: 's14',
						},
					]}
					textColor="gray60"
				>
					&copy;
					{' '}
					{date.getFullYear()}
					{' '}
					FatCat Coders. All rights reserved.
				</Paragraph>
				<Link
					to="mailto:hello@fatcatcoders.com"
					variant="noStyle"
					textSize="h5Mobile"
					tablet={[{ fontSize: 's14' }]}
					hover={[{ textColor: 'purple' }]}
				>
					hello@fatcatcoders.com
				</Link>
			</Flex>
		</Section>
	);
};

export default Footer;
