import React from 'react';
import { DefaultTheme } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { ScreenReaderText } from '../../Atoms/ScreenReaderText';
import Button from '../../Atoms/Button';

// Molecules
import Section from '../Section';

interface ServiceCardProps {
    title: string;
	eyebrow: string;
    image: string;
    imageFirst?: boolean;
	backgroundColor: keyof DefaultTheme['backgroundColor'];
	url: string;
	id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
	const {
		title,
		eyebrow,
		image,
		imageFirst,
		backgroundColor,
		url,
		id,
	} = props;

	return (
		<article
			id={id}
		>
			<Section
				as="div"
				backgroundColor={backgroundColor}
			>
				<Flex
					direction={imageFirst ? 'row' : 'row-reverse'}
					alignItems="center"
					gap="24px"
					justifyContent="space-between"
					tablet={[
						'wrap',
						'justifyContentFlexStart',
						'row',
						{ gap: '32px' },
					]}
				>
					<Image
						alt=""
						src={image}
						w="auto"
						maxW="40%"
						alignSelf="center"
						tablet={[
							{ maxW: '80px' },
						]}
					/>
					<Flex
						direction="column"
						maxW="55%"
						gap="48px"
						tablet={[
							'fluid',
							{
								gap: '32px',
							},
						]}
					>
						<Paragraph
							show="tablet"
							textSize="h5"
							textColor="gray80"
							mobile={[{ fontWeight: 'medium' }]}
						>
							{eyebrow}
						</Paragraph>
						<Heading
							as="h3"
							textSize="h2"
							mobile={[
								{
									textSize: 'h2Mobile',
								},
							]}
							fontWeight="normal"
						>
							{title}
						</Heading>
						<Button
							size="small"
							alignSelf="flex-start"
							// This screen reader text is added in order to resolve
							// "links don't have a descriptive text" in lighthouse tests.
							text={(
								<>
									Learn more
									<ScreenReaderText>
										{' '}
										about
										{eyebrow}
									</ScreenReaderText>
								</>
							)}
							to={url}
						/>
					</Flex>
				</Flex>
			</Section>
		</article>
	);
};

ServiceCard.defaultProps = {
	imageFirst: false,
};

export default ServiceCard;
