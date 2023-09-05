import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { SecondaryHeading } from '../../Atoms/SecondaryHeading';

// Molecules
import SimpleCard from '../../Molecules/Cards/SimpleCard';
import Button from '../../Atoms/Button';

// Utils
import {
	TrackAction,
	trackAnalytic,
	TrackLabel,
} from '../../../utils/gtag';
import { getUrl } from '../../../utils/helpers';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';

// This section is only used for guiding principles
// If you need a section for cards use CardSection

type SimpleCardSectionProps = {
	title: string;
	cards: {
		title: string | ReactElement;
		description: string;
		image: string;
	}[];
	buttonProps?: {
		buttonText: string;
		url: string;
		gaTrackLabel: TrackLabel;
	};
	numOfColumns?: number;
}

const SimpleCardSection: React.FC<SimpleCardSectionProps> = (props) => {
	const {
		title,
		cards,
		buttonProps,
		numOfColumns,
	} = props;

	return (
		<Flex
			direction="column"
			alignItems="center"
		>
			<SecondaryHeading>{title}</SecondaryHeading>
			<Grid
				gap="40px"
				rowGap="80px"
				gridTemplateColumns={`repeat(${numOfColumns}, minmax(0, 1fr))`}
				justifyContent="center"
				justifyItems="center"
				w="sauto"
				largeTablet={[
					{
						gap: '30px',
						gridTemplateColumns: `repeat(${numOfColumns === 4 ? 2 : 1}, minmax(0, 1fr))`,
						maxW: numOfColumns === 4 ? 'unset' : '350px',
					},
				]}
				tablet={[
					{
						gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
						maxW: '350px',
					},
				]}
				mobile={[{ maxW: 'unset' }]}
			>
				{cards.map(card => (
					<SimpleCard
						key={card.image}
						fixedHeight
						titleGrow={false}
						{...card}
					/>
				))}
			</Grid>
			{buttonProps && (
				<Button
					to={buttonProps.url}
					text={buttonProps.buttonText}
					alignSelf="center"
					marginTop="s80"
					mobile={[{ marginTop: 's32' }]}
					onClick={() => trackAnalytic(
						TrackAction.CTA_BUTTON_CLICK,
						buttonProps?.gaTrackLabel,
						getUrl()
					)}
				/>
			)}
		</Flex>
	);
};

SimpleCardSection.defaultProps = {
	buttonProps: undefined,
	numOfColumns: 2,
};

export default SimpleCardSection;
