import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';

// Assets
import catCareersBenefits from '../../../assets/images/icons/careers-benefits-cat.svg';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';

// Molecules
import Section from '../Section';

interface BenefitsSectionProps {
	title: string | ReactElement;
	belowTitle?: ReactElement;
    cards: ReactElement;
	hasBackground?: boolean;
	button?: ReactElement;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = (props) => {
	const {
		title,
		belowTitle,
		cards,
		hasBackground,
		button,
	} = props;

	const theme = useTheme();

	return (
		<Section
			background={hasBackground ? `${theme.color.cream} url(${catCareersBenefits}) center bottom / auto 100%  no-repeat` : undefined}
			largeTablet={[{
				background: hasBackground ? `${theme.color.cream} url(${catCareersBenefits}) center bottom / 100%  auto  no-repeat` : undefined,
			}]}
		>
			<Flex
				direction="column"
				alignItems="center"
				mobile={[{ alignItems: 'flex-start' }]}
			>
				<Heading
					as="h2"
					textAlign="center"
					tablet={[
						{
							fontSize: 's32',
						},
					]}
					mobile={[
						{
							fontSize: hasBackground ? 's32' : 's24',
							textAlign: 'left',
							paddingBottom: belowTitle ? 's16' : undefined,
						},
					]}
					padding={['b80']}
					scale
				>
					{title}
				</Heading>
				{belowTitle}
				<Grid
					gridTemplateColumns="repeat(2, minmax(0, 1fr));"
					justifyItems="center"
					rowGap="56px"
					gap="40px"
					largeTablet={[{
						gridTemplateColumns: 'repeat(1, minmax(0, 1fr));',
						gap: '32px',
					}]}
				>
					{cards}
				</Grid>
				{button}
			</Flex>
		</Section>
	);
};

BenefitsSection.defaultProps = {
	hasBackground: false,
	button: undefined,
	belowTitle: undefined,
};

export default BenefitsSection;
