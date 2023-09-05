import React, { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Assets
import Tick from '../../../assets/images/svg-inline/tick.svg';
import Dot from '../../../assets/images/svg-inline/dot.svg';
import CircleArrowDown from '../../../assets/images/svg-inline/circle-arrow-down.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Link } from 'fatcat-ui-library/components/Atoms/Link';
import Button from '../../Atoms/Button';

// Utils
import {
	TrackAction,
	trackAnalytic,
	TrackLabel,
} from '../../../utils/gtag';
import { getUrl } from '../../../utils/helpers';

// TODO: Add h5 style for things that are not headings but look like h5

interface PricingCardProps {
    eyebrow?: string;
    title: string | ReactElement;
    description?: string;
    bulletList: string[];
    bulletLink?: string;
    image: string;
    mark?: string;
	buttonText?: string;
	gaTrackLabel?: TrackLabel;
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
	const {
		eyebrow,
		title,
		description,
		bulletList,
		bulletLink,
		image,
		mark,
		buttonText = 'Get in touch for details',
		gaTrackLabel = TrackLabel.GET_IN_TOUCH,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
			alignItems="flex-start"
			backgroundColor="cream"
			marginTop="s16"
			paddingX="s40"
			paddingTop={mark ? 's0' : 's32'}
			paddingBottom="s32"
			borderRadius="8px"
			position="relative"
			tablet={[{
				paddingX: 's20',
			}]}
		>
			<Flex
				direction="column"
				alignItems="flex-start"
				marginBottom="s40"
				tablet={[{
					marginBottom: 's32',
				}]}
			>
				{mark && (
					<Text
						textSize="h5"
						paddingY="s4"
						paddingX="s8"
						backgroundColor="primary"
						textColor="white"
						borderRadius="4px"
						transform="translate(0, -16px)"
					>
						{mark}
					</Text>
				)}
				{eyebrow && (
					<Paragraph
						textSize="h4"
						marginBottom="s16"
						textColor="gray60"
						mobile={[
							{
								textSize: 'h4Mobile',
								fontWeight: 'medium',
							},
						]}
					>
						{eyebrow}
					</Paragraph>
				)}
				<Heading
					as="h3"
					marginBottom={description ? 's16' : 's24'}
					tablet={[{
						marginBottom: 's16',
					}]}
				>
					{title}
				</Heading>
				{description && (
					<Paragraph marginBottom="s24">
						{description}
					</Paragraph>
				)}
				<Flex
					direction="column"
					gap="16px"
				>
					{bulletList.map(elem => (
						<Flex
							alignItems="center"
							key={elem}
						>
							<Tick />
							<Paragraph
								textColor="gray80"
								marginLeft="s16"
							>
								{elem}
							</Paragraph>
						</Flex>
					))}
				</Flex>
				{bulletLink && (
					<Link
						to="#add-ons"
						as={GatsbyLink}
						fontWeight="medium"
					>
						<Flex
							alignItems="center"
							marginTop="s16"
						>
							<Dot />
							<Text
								textSize="h5"
								marginLeft="s24"
								marginRight="s10"
							>
								{bulletLink}
							</Text>
							<CircleArrowDown />
						</Flex>
					</Link>
				)}
			</Flex>
			<Button
				text={buttonText}
				to="#lets-work-together"
				marginTop="sauto"
				zIndex="1"
				onClick={() => trackAnalytic(
					TrackAction.CTA_BUTTON_CLICK,
					gaTrackLabel,
					getUrl(),
				)}
			/>
			<Image
				alt=""
				src={image}
				maxW="90px"
				position="absolute"
				bottom="0"
				right="0"
			/>
		</Flex>
	);
};

PricingCard.defaultProps = {
	eyebrow: undefined,
	description: undefined,
	bulletLink: undefined,
	mark: undefined,
	buttonText: 'Get in touch for details',
	gaTrackLabel: TrackLabel.GET_IN_TOUCH,
};

export default PricingCard;
