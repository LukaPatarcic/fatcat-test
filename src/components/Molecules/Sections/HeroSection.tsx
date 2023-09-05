import React, { ReactElement } from 'react';
import { DefaultTheme } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import Button from '../../Atoms/Button';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Utils
import {
	trackAnalytic,
	TrackAction,
	TrackLabel,
} from '../../../utils/gtag';
import { getUrl } from '../../../utils/helpers';

interface HeroSectionProps {
	title: ReactElement;
	description?: string | ReactElement;
	button?: boolean;
	buttonText?: string;
	image: ReactElement;
	backgroundColor?: keyof DefaultTheme['backgroundColor'];
	largerImageWidth?: boolean;
	scrollTo?: string;
	isHome?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
	const {
		title,
		description,
		button,
		buttonText,
		image,
		backgroundColor,
		largerImageWidth,
		scrollTo,
		isHome,
	} = props;
	return (
		<Flex
			backgroundColor={backgroundColor}
			position="relative"
			minH="calc(100vh - 77px)"
			alignItems="center"
			overflow="hidden"
		>
			<Section
				padding={['t48', 'b48']}
			>
				<Flex
					gap="66px"
					desktop={[{ gap: '40px' }]}
					largeTablet={[
						'column',
						'alignItemsCenter',
					]}
					tablet={[{ minH: '100%'	}]}
				>
					<Flex
						w="58%"
						direction="column"
						alignSelf="flex-start"
						gap="32px"
						marginTop="s80"
						largeTablet={[
							'fluid',
							{
								marginTop: 's0',
							},
						]}
					>
						<Heading
							as="h1"
						>
							{title}
						</Heading>
						{description && (
							<Paragraph>
								{description}
							</Paragraph>
						)}
						{isHome && (
							<Flex
								tablet={['column']}
								gap="16px"
							>
								<Button
									size="large"
									text="Scale your team"
									to="/staff-augmentation"
									onClick={() => trackAnalytic(
										TrackAction.CTA_BUTTON_CLICK,
										TrackLabel.SCALE_YOUR_TEAM,
										getUrl()
									)}
								/>
								<Button
									variant="secondary"
									size="large"
									text="Build your product"
									to="/software-development"
									onClick={() => trackAnalytic(
										TrackAction.CTA_BUTTON_CLICK,
										TrackLabel.BUILD_YOUR_PRODUCT,
										getUrl()
									)}
								/>
							</Flex>
						)}
						{button && (
							<Button
								size="large"
								to={scrollTo}
								text={buttonText ?? 'Get in touch'}
								w="auto"
								alignSelf="flex-start"
								onClick={() => trackAnalytic(
									TrackAction.CTA_BUTTON_CLICK,
									TrackLabel.GET_IN_TOUCH,
									getUrl()
								)}
							/>
						)}
					</Flex>
					<Flex
						w="27%"
						h="560px"
						direction="column"
						alignItems="flex-start"
						standardDesktop={[{	w: '40%' }]}
						largeTablet={[
							{
								alignItems: 'center',
								w: '70%',
								h: 'auto',
							},
						]}
						tablet={['fluid']}
					>
						<Flex
							w={largerImageWidth ? '660px' : '560px'}
							h="500px"
							largeTablet={[
								'fluid',
								'justifyContentCenter',
								{
									h: 'unset',
									maxH: '500px',
								},
							]}
						>
							{image}
						</Flex>
					</Flex>
				</Flex>
			</Section>
		</Flex>
	);
};

HeroSection.defaultProps = {
	description: undefined,
	button: undefined,
	buttonText: undefined,
	backgroundColor: 'cream',
	largerImageWidth: undefined,
	scrollTo: '#lets-work-together',
	isHome: false,
};

export default HeroSection;
