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
const identification = '../../../assets/images/app-dev/app-dev-identification.png';

const AppDevIdentification: React.FC = () => {
	return (
		<IdentificationSection
			image={(
				<StaticImage
					alt=""
					src={identification}
					layout="constrained"
					placeholder="blurred"
				/>
			)}
			title={(
				<>
					<>
						Are you struggling to
						{' '}
						<Text textColor="purple">
							{' '}
							{' '}
							start your app project
						</Text>
						, choose the right tools and technologies,
						find a suitable team, or plan for your app&apos;s future growth?
						<CircledText
							hide="largeTablet"
							text="We got you covered"
							w="186px"
						/>
					</>
					<Flex
						show="largeTablet"
						justifyContent="center"
					>
						<CircledText
							text="We got you covered"
							w="186px"
							arrow={(
								<Image
									alt=""
									w="40px"
									src={yellowArrow90}
									tablet={[{ w: '25px' }]}
								/>
							)}
						/>
					</Flex>
				</>
			)}
		/>
	);
};

export default AppDevIdentification;
