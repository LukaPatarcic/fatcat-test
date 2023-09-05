import React from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

// Molecules
import Section from '../Section';

// Organism
import SendMessageForm from '../../Organisms/Forms/SendMessageForm';

// Assets
import plane from '../../../assets/images/icons/form-plane.svg';

interface YellowFormSectionProps{
	title: string;
	description: string;
	location: string;
}

const YellowFormSection: React.FC<YellowFormSectionProps> = (props) => {
	const {
		title,
		description,
		location,
	} = props;

	return (
		<Wrapper position="relative">
			<Section>
				<Flex
					padding={['t48', 'b48']}
					justifyContent="center"
					alignItems="center"
					gap="158px"
					largeTablet={['column', {
						gap: '32px',
						paddingY: 's0',
					}]}
				>
					<Flex
						direction="column"
						maxW="500px"
						largeTablet={[
							{
								alignItems: 'center',
							},
						]}
						mobile={[{ alignItems: 'flex-start' }]}
					>
						<Heading
							as="h2"
							marginBottom="s16"
							largeTablet={[
								{
									textAlign: 'center',
								},
							]}
							mobile={[{ textAlign: 'left' }]}
						>
							{title}
						</Heading>
						<Paragraph
							largeTablet={[
								{
									textAlign: 'center',
								},
							]}
							mobile={[{ textAlign: 'left' }]}
						>
							{description}
						</Paragraph>
					</Flex>
					<Flex
						position="relative"
						justifyContent="center"
					>
						<SendMessageForm
							yellowForm
							location={location}
						/>
						<Image
							hide="largeTablet"
							position="absolute"
							alt=""
							src={plane}
							zIndex="1"
							w="94px"
							bottom="0"
							right="0"
							transform="translate(0, 50%)"
						/>
					</Flex>
				</Flex>
			</Section>
			<Wrapper
				position="absolute"
				backgroundColor="tertiaryYellow"
				zIndex="-1"
				right="0"
				top="50%"
				w="40%"
				h="500px"
				transform="translate(0, -50%)"
				hide="largeTablet"
				largeDesktop={[{ w: '30%' }]}
			/>
		</Wrapper>
	);
};

export default YellowFormSection;
