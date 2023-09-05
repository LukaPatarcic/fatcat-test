import React from 'react';
import { DefaultTheme } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import Button from '../../Atoms/Button';
import { ScreenReaderText } from '../../Atoms/ScreenReaderText';

interface ColorfulCardProps {
    title: string;
    description: string;
    image: string;
	backgroundColor: keyof DefaultTheme['backgroundColor'];
	url: string;
}

const ColorfulCard: React.FC<ColorfulCardProps> = (props) => {
	const {
		title,
		description,
		image,
		backgroundColor,
		url,
	} = props;
	return (
		<Flex
			as="article"
			direction="column"
			justifyContent="space-between"
			alignItems="flex-start"
			backgroundColor={backgroundColor}
			borderRadius="8px"
			w="45%"
			maxW="520px"
			minW="400px"
			paddingY="s40"
			paddingX="s32"
			largeTablet={['fluid']}
			tablet={['fluid', {
				paddingY: 's32',
				paddingX: 's24',
			}]}
		>
			<Flex
				direction="column"
				justifyContent="space-between"
				alignItems="flex-start"
			>
				<Image
					alt=""
					alignSelf="flex-start"
					src={image}
					h="100px"
					w="auto"
				/>
				<Heading
					as="h3"
					textSize="h2Mobile"
					padding={['t16', 'b8']}
				>
					{title}
				</Heading>
				<Paragraph
					textSize="h4"
					fontWeight="normal"
					minH="60px"
					padding={['b32']}
					tablet={[{ paddingBottom: 's16'	}]}
				>
					{description}
				</Paragraph>
			</Flex>
			<Wrapper>
				<Button
					to={url}
					text={(
						<>
							Learn more
							{' '}
							<ScreenReaderText>
								about
								{title}
							</ScreenReaderText>
						</>
					)}
				/>
			</Wrapper>
		</Flex>
	);
};

export default ColorfulCard;
