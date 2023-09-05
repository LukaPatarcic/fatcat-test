import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

// Molecules
import Section from '../Section';
import ScrollDown from '../ScrollDown';

interface IdentificationSectionProps {
	title: string | ReactElement;
	image: ReactElement;
	description?: string;
}

const IdentificationSection: React.FC<IdentificationSectionProps> = (props) => {
	const {
		title,
		image,
		description,
	} = props;

	return (
		<Section>
			<Flex
				alignItems="center"
				gap="160px"
				standardDesktop={[{ gap: '20px' }]}
				largeTablet={[
					'column',
					'alignItemsCenter',
					{ gap: '40px' },
				]}
				tablet={[{ gap: '25px' }]}
			>
				<Flex
					w="60%"
					flexShrink="0"
					direction="column"
					gap="32px"
					tablet={[
						'fluid',
						{
							minW: 'unset',
							gap: '24px',
						},
					]}
					largeTablet={[{
						w: 'auto',
					}]}
				>
					<Heading
						as="h2"
						tablet={[
							{
								fontSize: 's32',
							},
						]}
						mobile={[
							{
								fontSize: 's24',
							},
						]}
					>
						{title}
					</Heading>
					{description && (
						<Paragraph>
							{description}
						</Paragraph>
					)}
				</Flex>
				<Flex
					w="560px"
					flexShrink="0"
					standardDesktop={[
						{
							w: '40%',
						},
					]}
					largeTablet={[
						{
							w: '60%',
						},
						'justifyContentCenter',
					]}
					tablet={[
						{
							w: '70%',
						},
					]}
					mobile={['fluid']}
				>
					{image}
				</Flex>
			</Flex>
			<ScrollDown
				hide="largeTablet"
				margin={['t48']}
				mobile={[
					{
						margin: ['t32'],
					},
				]}
			/>
		</Section>
	);
};

IdentificationSection.defaultProps = {
	description: undefined,
};

export default IdentificationSection;
