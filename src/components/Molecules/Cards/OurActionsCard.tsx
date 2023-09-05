import React, { ReactElement } from 'react';
import { css, DefaultTheme } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Text } from 'fatcat-ui-library/components/Atoms/Text/Text';

interface OurActionsCardProps {
	title: string;
	description: string | ReactElement;
	markColor: keyof DefaultTheme['backgroundColor'];
	markText: string;
	button: ReactElement;
	image: string;
	imageAlt: string;
}
const OurActionsCard: React.FC<OurActionsCardProps> = (props) => {
	const {
		title,
		description,
		image,
		imageAlt,
		markColor,
		markText,
		button,
	} = props;

	return (

		<Flex
			as="article"
			direction="column"
			backgroundColor="white"
			borderRadius="8px"
			largeTablet={['fluid']}
			position="relative"
		>
			<Flex
				direction="column"
			>
				<Text
					textSize="h5"
					paddingY="s4"
					paddingX="s8"
					backgroundColor={markColor}
					textColor="white"
					borderRadius="4px"
					transform="translate(16px, -16px)"
					w="fit-content"
					position="absolute"
					aria-label={`Status: ${markText}`}
				>
					{markText}
				</Text>
				<Wrapper>
					<Image
						borderRadius="8px 8px 0px 0px"
						alt={imageAlt}
						minH="174px"
						src={image}
						styled={css`object-fit: cover;`}
					/>
				</Wrapper>
			</Flex>
			<Flex
				padding={['t40', 'l24', 'b24', 'r24']}
				direction="column"
				h="100%"
				flexGrow="1"
			>
				<Flex
					flexGrow="1"
				>
					<Heading
						marginBottom="s24"
						as="h3"
					>
						{title}
					</Heading>
				</Flex>
				<Flex
					flexGrow="1"
				>
					<Paragraph
						marginBottom="s24"
					>
						{description}
					</Paragraph>
				</Flex>
				{button}
			</Flex>
		</Flex>
	);
};

export default OurActionsCard;
