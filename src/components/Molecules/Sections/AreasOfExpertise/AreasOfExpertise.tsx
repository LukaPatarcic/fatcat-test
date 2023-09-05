import React, { ReactElement } from 'react';

// Assets
import areaOfExpertiseCat from '../../../../assets/images/icons/area-of-expertise-cat.svg';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import Button from '../../../Atoms/Button';

// Molecules
import Section from '../../Section';
import AreaOfExpertiseCard from './Molecules/AreaOfExpertiseCard';

// Utils
import { TrackLabel } from '../../../../utils/gtag';

interface AreasOfExpertiseProps {
	title: string;
	description: string;
	items: {
		title: string | ReactElement;
	}[];
	buttonProps: {
		buttonText: string;
		gaTrackLabel: TrackLabel;
	};
}

const AreasOfExpertise: React.FC<AreasOfExpertiseProps> = (props) => {
	const {
		title,
		description,
		items,
		buttonProps,
	} = props;

	return (
		<Section
			backgroundColor="mainYellow"
			position="relative"
		>
			<Flex
				alignItems="flex-start"
				gap="64px"
				largeTablet={[
					'column',
					{
						gap: '80px',
					},
				]}
				tablet={[
					{
						gap: '48px',
					},
				]}
			>
				<Flex
					direction="column"
					maxW="35%"
					alignItems="flex-start"
					largeTablet={[
						{
							maxW: '100%',
							alignItems: 'center',
						},
					]}
				>
					<Heading
						as="h2"
						marginBottom="s16"
						largeTablet={[
							'textCenter',
						]}
						w="100%"
						mobile={[
							{
								textAlign: 'left',
							},
						]}
					>
						{title}
					</Heading>
					<Paragraph
						zIndex="1"
						marginBottom="s32"
						largeTablet={[
							'textCenter',
						]}
						mobile={[
							{
								textAlign: 'left',
							},
						]}
					>
						{description}
					</Paragraph>
					<Button
						to="#lets-work-together"
						text={buttonProps.buttonText}
						zIndex="1"
					/>
				</Flex>
				<Grid
					as="ul"
					gridTemplateColumns="repeat(2, minmax(0, 1fr))"
					justifyItems="center"
					gap="20px"
					tablet={[{
						gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
					}]}
				>
					{items.map((item, index) => (
						<AreaOfExpertiseCard
							/* eslint-disable-next-line react/no-array-index-key */
							key={index}
							title={item.title}
						/>
					))}
				</Grid>
			</Flex>
			<Wrapper
				position="absolute"
				maxW="1080px"
				w="100%"
				bottom="0"
				left="50%"
				transform="translateX(-50%)"
			>
				<Image
					alt=""
					src={areaOfExpertiseCat}
					maxW="200px"
					marginLeft="s40"
					hide="largeTablet"
				/>
			</Wrapper>
		</Section>
	);
};

export default AreasOfExpertise;
