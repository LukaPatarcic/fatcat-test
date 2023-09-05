import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// Assets
import yellowArrow90 from '../../../assets/images/icons/yellow-arrow-90deg.svg';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

// Molecules
import IdentificationSection from '../../Molecules/Sections/IdentificationSection';
import CircledText from '../../Molecules/CircledText';

// Static Assets
const identificationImage = '../../../assets/images/home/home-identification.png';

const HomeIdentification = () => {
	return (
		<IdentificationSection
			title={(
				<>
					<>
						Whether you&apos;re looking to build your product,
						grow your business, or expand your team,
						the FatCat Coders got the
						{' '}
						<Text
							textColor="purple"
						>
							tools
						</Text>
						{' '}
						and
						{' '}
						<Text
							textColor="purple"
						>
							expertise
						</Text>
						{' '}
						to help you succeed.
						<CircledText
							hide="largeTablet"
							text="We offer tailored solutions for any IT challenge."
							w="236px"
						/>
					</>
					<Flex
						justifyContent="center"
					>
						<CircledText
							show="largeTablet"
							text="We offer tailored solutions for any IT challenge."
							arrow={(
								<Image
									alt=""
									w="40px"
									src={yellowArrow90}
									tablet={[{ w: '25px' }]}
								/>
							)}
							w="236px"
						/>
					</Flex>
				</>
			)}
			image={(
				<StaticImage
					alt=""
					src={identificationImage}
					layout="constrained"
					placeholder="blurred"
				/>
			)}
		/>
	);
};

export default HomeIdentification;
