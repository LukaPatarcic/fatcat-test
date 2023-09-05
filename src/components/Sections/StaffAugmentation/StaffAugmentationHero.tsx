import React from 'react';

// Assets
import formCat from '../../../assets/images/staff-augmentation/form-cat.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section';

// Organisms
import StaffAugmentationForm from '../../Organisms/Forms/StaffAugmentationForm';

const StaffAugmentationHero: React.FC = () => {
	return (
		<Flex
			backgroundColor="mainYellow"
			position="relative"
			minH="calc(100vh - 77px)"
			alignItems="center"
			overflow="hidden"
		>
			<Section
				padding={['t48', 'b48']}
			>
				<Flex
					minH="600px"
					gap="66px"
					desktop={[{ gap: '40px' }]}
					largeTablet={[
						'column',
						'alignItemsCenter',
					]}
					tablet={[{ minH: '100%' }]}
				>
					<Flex
						marginTop="s80"
						w="58%"
						direction="column"
						gap="32px"
						zIndex="20"
						largeDesktop={[{ w: '54%' }]}
						largeTablet={[
							'fluid',
							{
								marginTop: 's0',
							},
						]}
					>
						<Heading
							as="h1"
						>
							<Text
								fontWeight="medium"
							>
								Scale your team
								{' '}
							</Text>
							fast, and boost your business growth
						</Heading>
						<Paragraph>
							The Staff Augmentation service enables easy team expansion with skilled experts, enhancing your project outcomes.
						</Paragraph>
					</Flex>
					<Flex
						minH="500px"
						position="absolute"
						left="60%"
						direction="column"
						backgroundColor="tertiaryYellow"
						borderRadius="8px"
						maxW="450px"
						alignItems="center"
						marginTop="s48"
						padding="s32"
						desktop={[{
							maxW: '400px',
							left: '57%',
						}]}
						largeTablet={[{
							alignSelf: 'center',
							position: 'relative',
							left: 'unset',
							marginTop: 's64',
						}]}
						mobile={[{ marginTop: 's80' }]}
					>
						<Heading
							as="h2"
							fontWeight="normal"
							textSize="h3"
							maxW="80%"
							textAlign="center"
							marginBottom="s40"
							standardDesktop={[{
								marginBottom: 's32',
								maxW: '70%',
							}]}
							mobile={[
								'fluid',
								{
									textSize: 'h5',
									fontWeight: 'normal',
								}]}
						>
							What IT talent are you looking for?
						</Heading>
						<StaffAugmentationForm />
						<Image
							src={formCat}
							alt=""
							position="absolute"
							top="0"
							right="50%"
							maxW="175px"
							transform="translate(60%,-115px)"
							standardDesktop={[{
								maxW: '150px',
								transform: 'translate(60%,-98px)',
							}]}
						/>
					</Flex>
				</Flex>
			</Section>
		</Flex>
	);
};

export default StaffAugmentationHero;
