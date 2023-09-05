import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

interface SimpleCardProps {
	eyebrow?: ReactElement;
	title: string | ReactElement;
	description?: string | ReactElement;
	image?: string;
	alignItemsLeft?: boolean;
	id?: string;
	showEyebrowOnLargeTablet?: boolean;
	smallerImage?: boolean;
	titleGrow?: boolean;
	fixedHeight?: boolean;
}

const SimpleCard: React.FC<SimpleCardProps> = (props) => {
	const {
		eyebrow,
		title,
		image,
		description,
		alignItemsLeft,
		id,
		showEyebrowOnLargeTablet,
		smallerImage,
		titleGrow,
		fixedHeight,
	} = props;

	return (
		<Flex
			as="article"
			direction="column"
			alignItems={alignItemsLeft ? 'flex-start' : 'center'}
			id={id}
			mobile={[{ alignItems: 'flex-start' }]}
		>
			{eyebrow && (
				<Paragraph
					show={showEyebrowOnLargeTablet ? 'largeTablet' : undefined}
					marginBottom="s16"
				>
					{eyebrow}
				</Paragraph>
			)}
			{image && (
				<Image
					alt=""
					marginBottom="s8"
					maxW={fixedHeight ? undefined : (smallerImage ? '24px' : '40px')}
					h={fixedHeight ? '40px' : 'unset'}
					w="auto"
					src={image}
					alignSelf={alignItemsLeft ? 'flex-start' : 'center'}
					mobile={[{
						h: fixedHeight ? '30px' : 'unset',
						alignSelf: 'flex-start',
					}]}
				/>
			)}
			<Flex
				flexGrow={titleGrow ? '1' : '0'}
				w="fit-content"
			>
				<Heading
					as="h3"
					marginBottom="s8"
					textAlign={alignItemsLeft ? 'left' : 'center'}
					mobile={[{
						textAlign: 'left',
					}]}
				>
					{title}
				</Heading>
			</Flex>
			<Paragraph
				textAlign={alignItemsLeft ? 'left' : 'center'}
				mobile={[{ textAlign: 'left' }]}
			>
				{description}
			</Paragraph>
		</Flex>
	);
};

SimpleCard.defaultProps = {
	eyebrow: undefined,
	alignItemsLeft: false,
	id: undefined,
	image: undefined,
	showEyebrowOnLargeTablet: undefined,
	smallerImage: undefined,
	titleGrow: true,
	description: undefined,
	fixedHeight: undefined,
};

export default SimpleCard;
