import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import Button from '../../Atoms/Button';

interface CreamCardProps {
    title: string;
    description: string | ReactElement;
    image: string;
	url: string;
}

const CreamCard: React.FC<CreamCardProps> = (props) => {
	const {
		title,
		image,
		description,
		url,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
			alignItems="center"
			backgroundColor="cream"
			marginTop="s24"
			paddingBottom="s40"
			paddingX="s40"
			borderRadius="8px"
			largeTablet={[{
				paddingBottom: 's24',
				paddingX: 's20',
			}]}
		>
			<Image
				alt=""
				src={image}
				maxW="130px"
				w="30%"
				marginBottom="s16"
				largeTablet={[{
					marginBottom: 's8',
				}]}
				transform="translate(0, -24px)"
			/>
			<Flex
				direction="column"
				gap="24px"
				flexGrow="1"
				marginBottom="s40"
				largeTablet={[{
					marginBottom: 's32',
				}]}
			>
				<Heading
					as="h3"
					textAlign="center"
				>
					{title}
				</Heading>
				<Paragraph
					textAlign="center"
				>
					{description}
				</Paragraph>
			</Flex>
			<Button
				to={url}
				text="Learn more"
			/>
		</Flex>
	);
};

export default CreamCard;
