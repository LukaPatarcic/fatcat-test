import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import Button from '../../Atoms/Button';

// Molecules
import Section from '../Section';

// Assets
import catBannerBg from '../../../assets/images/banners/cat-banner-bg.svg';
import triangles from '../../../assets/images/icons/triangles.svg';

// Utils
import { TrackAction, trackAnalytic, TrackLabel } from '../../../utils/gtag';
import { getUrl } from '../../../utils/helpers';

interface CatBannerProps {
	title: string | ReactElement;
	text: string;
	buttonText: string;
	slug?: string;
}

const CatBanner: React.FC<CatBannerProps> = (props) => {
	const {
		title,
		text,
		buttonText,
		slug,
	} = props;

	const theme = useTheme();
	return (
		<Section
			w="wide"
			background={`${theme.color.primary} url(${catBannerBg}) center top / auto 100% no-repeat`}
		>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				tablet={[
					'column',
					{ gap: '40px' },
				]}
			>
				<Flex
					w="11%"
					flexGrow="0"
				>
					<Image
						alt=""
						src={triangles}
						tablet={[
							{ transform: 'rotate(90deg)' },
						]}
					/>
				</Flex>
				<Flex
					w="50%"
					direction="column"
					alignItems="center"
					tablet={[
						'fluid',
					]}
				>
					<Heading
						as="h2"
						textAlign="center"
						textColor="white"
						marginBottom="s16"
					>
						{title}
					</Heading>
					<Paragraph
						textAlign="center"
						textColor="white"
						marginBottom="s40"
					>
						{text}
					</Paragraph>
					<Button
						size="medium"
						text={buttonText}
						buttonColor="primaryLight"
						to={slug}
						onClick={() => trackAnalytic(
							TrackAction.CTA_BUTTON_CLICK,
							TrackLabel.GET_IN_TOUCH,
							getUrl()
						)}
					/>
				</Flex>
				<Flex
					w="11%"
					flexGrow="0"
				>
					<Image
						alt=""
						src={triangles}
						transform="scaleX(-1)"
						tablet={[
							{ transform: 'rotate(-90deg)' },
						]}
					/>
				</Flex>
			</Flex>
		</Section>
	);
};

CatBanner.defaultProps = {
	slug: '#lets-work-together',
};

export default CatBanner;
