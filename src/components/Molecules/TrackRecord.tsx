import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import NumberCard, { TrackRecordNumbers } from './Cards/NumberCard';
import Section from './Section';

interface TrackRecordProps {
	title: string | ReactElement;
	trackRecordNumbers: TrackRecordNumbers[];
	content: ReactElement;
	clearTopPadding?: boolean;
	isAboutUs?: boolean;
}

const TrackRecord: React.FC<TrackRecordProps> = (props) => {
	const {
		title,
		trackRecordNumbers,
		content,
		clearTopPadding,
		isAboutUs,
	} = props;

	return (
		<Section clearTopPadding={clearTopPadding}>
			<Wrapper
				paddingBottom={isAboutUs ? 's80' : 's192'}
				scale
			>
				<Flex
					direction="column"
					justifyContent="center"
				>
					<Heading
						as="h2"
						textSize="h3"
						textAlign="center"
						alignSelf="center"
						maxW="80%"
						margin={['b64']}
						tablet={[
							{
								margin: ['b48'],
							},
						]}
						mobile={['fluid', { textSize: 'h3' }]}
					>
						{title}
					</Heading>
					<Grid
						gridTemplateColumns="repeat(4, 1fr)"
						tablet={[
							{
								gridTemplateColumns: 'repeat(2, 1fr)',
							},
						]}
						mobile={[
							{
								gridTemplateColumns: '1fr',
							},
						]}
					>
						{trackRecordNumbers.map(record => (
							<NumberCard
								key={record.title}
								{...record}
							/>
						))}
					</Grid>
				</Flex>
			</Wrapper>
			{content}
		</Section>
	);
};

TrackRecord.defaultProps = {
	clearTopPadding: false,
	isAboutUs: false,
};

export default TrackRecord;
