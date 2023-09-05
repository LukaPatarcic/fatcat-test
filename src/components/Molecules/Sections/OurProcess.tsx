import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';
import { SecondaryHeading } from '../../Atoms/SecondaryHeading';

// Molecules
import Section from '../Section';

interface OurProcessProps {
    cards: ReactElement;
}

const OurProcess: React.FC<OurProcessProps> = (props) => {
	const {
		cards,
	} = props;

	return (
		<Section
			w="wide"
			clearBottomPadding
		>
			<Flex
				direction="column"
				alignItems="center"
			>
				<SecondaryHeading>
					How it works?
				</SecondaryHeading>
				<Grid
					gridTemplateColumns="repeat(4, minmax(0, 1fr))"
					gap="32px"
					standardDesktop={[
						{
							gap: '40px',
							gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
						},
					]}
					largeTablet={[
						{
							gap: '40px',
							gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
						},
					]}
				>
					{cards}
				</Grid>
			</Flex>
		</Section>
	);
};

export default OurProcess;
