import React from 'react';
import { css } from 'styled-components';

// Assets
import greenCat from '../../../../assets/images/careers/cat-talk/zoran-cat.svg';
import purpleCat from '../../../../assets/images/careers/cat-talk/danica-cat.svg';
import yellowArrow from '../../../../assets/images/careers/cat-talk/yellow-arrow.svg';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import Section from '../../../Molecules/Section';
import { CatTalk } from './Molecules/CatTalk';

const CareersCatTalk = () => {
	return (
		<Section>
			<Flex
				direction="column"
				alignItems="center"
			>
				<Heading
					as="h2"
					textAlign="center"
					maxW="70%"
					marginBottom="s16"
					tablet={['fluid']}
				>
					Team of
					<Text
						textColor="purple"
					>
						{' '}
						IT professionals
						{' '}
					</Text>
					who enjoy spending time together, whether working or having fun.
				</Heading>
				<Image
					alt=""
					src={yellowArrow}
					w="32px"
				/>
				<Wrapper
					marginTop="s48"
				>
					<Wrapper>
						<CatTalk
							pos="left"
							catImage={greenCat}
							text="We decided to create the culture we love: the one that drives us to try new ideas, embrace success and learn from failure."
						/>
					</Wrapper>
					<Wrapper
						styled={css`margin-top: -164px;`}
						largeTablet={[
							{
								styled: css`margin-top: -100px;`,
							},
						]}
					>
						<CatTalk
							pos="right"
							catImage={purpleCat}
							text="Values that we hold are real, not empty phrases. They guide our efforts, define our culture, and shape the way we approach business."
						/>
					</Wrapper>
				</Wrapper>
			</Flex>
		</Section>
	);
};

export default CareersCatTalk;
