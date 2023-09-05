import React, { ReactElement } from 'react';
import { DefaultTheme } from 'styled-components';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import Button from '../../Atoms/Button';

// Molecules
import Section from '../Section';

interface CardSectionProps {
	id?: string;
    eyebrow?: string;
	title?: string | ReactElement ;
	description?: string;
    cards: ReactElement | ReactElement[];
	alignCenterMobile?: boolean;
	backgroundColor?: keyof DefaultTheme['backgroundColor'];
	buttonVariant?: keyof DefaultTheme['buttonVariant'];
	numOfColumns?: number;
	button?: string;
	url?: string;
	largerGapTablet?: boolean;
	smallerGap?: boolean;
	clearBottomPadding?: boolean;
	clearTopPadding?: boolean;
	largerRowGap?: boolean;
}

const CardSection: React.FC<CardSectionProps> = (props) => {
	const {
		id,
		eyebrow,
		title,
		description,
		cards,
		alignCenterMobile,
		backgroundColor,
		numOfColumns,
		button,
		url,
		buttonVariant,
		largerGapTablet,
		smallerGap,
		clearTopPadding,
		clearBottomPadding,
		largerRowGap,
	} = props;

	return (
		<Wrapper
			as="section"
			id={id}
		>
			<Section
				as="div"
				backgroundColor={backgroundColor}
				clearTopPadding={clearTopPadding}
				clearBottomPadding={clearBottomPadding}
			>
				<Flex
					direction="column"
					alignItems="center"
					justifyContent="center"
					marginBottom="s80"
					tablet={[{
						marginBottom: 's48',
					}]}
					mobile={[{ marginBottom: 's32' }]}
				>
					{eyebrow && (
						<Text
							as="p"
							textSize="h5"
							marginBottom="s16"
							textColor="purple"
							tablet={[{
								textSize: 'h5Mobile',
								fontWeight: 'medium',
								alignSelf: alignCenterMobile ? 'center' : 'flex-start',
							}]}
							mobile={[{ alignSelf: 'flex-start' }]}
						>
							{eyebrow}
						</Text>
					)}
					{title && (
						<Heading
							as="h2"
							textAlign="center"
							maxW="70%"
							marginBottom={description ? 's16' : 's0'}
							tablet={[{
								maxW: '100%',
								textAlign: alignCenterMobile ? 'center' : 'left',
								alignSelf: alignCenterMobile ? 'center' : 'flex-start',
							}]}
							mobile={[{ textAlign: 'left', alignSelf: 'flex-start' }]}
						>
							{title}
						</Heading>
					)}
					{description && (
						<Paragraph
							maxW="80%"
							textAlign="center"
							tablet={[{
								maxW: '100%',
								textAlign: alignCenterMobile ? 'center' : 'left',
								alignSelf: alignCenterMobile ? 'center' : 'flex-start',
							}]}
							mobile={[{ textAlign: 'left', alignSelf: 'flex-start' }]}
						>
							{description}
						</Paragraph>
					)}
				</Flex>
				<Grid
					gap={smallerGap ? '20px' : '40px'}
					rowGap={largerRowGap ? '40px' : undefined}
					gridTemplateColumns={`repeat(${numOfColumns}, minmax(0, 1fr))`}
					justifyContent="center"
					justifyItems="center"
					w="sauto"
					largeTablet={[
						{
							gap: largerGapTablet ? '36px' : '24px',
							gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
						},
					]}
					tablet={[
						{
							gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
						},
					]}
				>
					{cards}
				</Grid>
				{button && url && (
					<Button
						text={button}
						to={url}
						variant={buttonVariant}
						marginTop="s80"
					/>
				)}
			</Section>
		</Wrapper>
	);
};

CardSection.defaultProps = {
	id: undefined,
	eyebrow: undefined,
	title: undefined,
	description: undefined,
	alignCenterMobile: false,
	backgroundColor: undefined,
	numOfColumns: 2,
	button: undefined,
	buttonVariant: 'ghost',
	largerGapTablet: undefined,
	url: undefined,
	smallerGap: undefined,
	clearTopPadding: false,
	clearBottomPadding: false,
	largerRowGap: false,
};

export default CardSection;
