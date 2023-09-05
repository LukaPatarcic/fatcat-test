import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

// Molecules
import Section from 'fatcat-ui-library/components/Molecules/Section/index';

interface TextImageSectionProps {
    title: string | ReactElement;
    description: string | string[];
    eyebrow?: string;
	isImageLeft?: boolean;
    image: ReactElement;
	imageMobile?: ReactElement;
	smaller?: boolean;
	isFirst?: boolean;
	isLast?: boolean;
	aboutUsSection?: boolean;
}

// @TODO: refactor this so that the title is always passed without <Heading> wrapper around it

const TextImageSection: React.FC<TextImageSectionProps> = (props) => {
	const {
		eyebrow,
		title,
		description,
		isImageLeft,
		smaller,
		image,
		imageMobile,
		isFirst,
		isLast,
		aboutUsSection,
	} = props;

	const mobileImage = imageMobile ?? image;
	return (
		<Flex
			as="article"
			alignItems="center"
			overflow="hidden"
		>
			<Section
				as="div"
				paddingTop={!isFirst ? 's96' : undefined}
				paddingBottom={!isLast ? 's96' : undefined}
				largeTablet={[
					{
						paddingTop: !isFirst ? 's56' : undefined,
						paddingBottom: !isLast ? 's56' : undefined,
					},
				]}
				tablet={[
					{
						paddingTop: !isFirst ? 's24' : undefined,
						paddingBottom: !isLast ? 's24' : undefined,
					},
				]}
			>
				<Flex
					alignItems="center"
					gap="160px"
					desktop={[{ gap: '40px' }]}
					largeTablet={['column']}
					direction={isImageLeft ? 'row-reverse' : 'row'}
				>
					<Flex
						w="50%"
						minW="500px"
						direction="column"
						largeTablet={[
							'contentCenter',
							'alignItemsCenter',
						]}
						tablet={[
							'fluid',
							{ minW: 'unset' },
						]}
						mobile={[{ alignItems: 'flex-start' }]}
					>
						<Paragraph
							textSize="h6"
							paddingBottom="s8"
							textColor="purple"
							mobile={[
								{
									textSize: 'h6Mobile',
									fontWeight: 'medium',
									paddingBottom: 's4',
								},
							]}
						>
							{eyebrow}
						</Paragraph>
						{!aboutUsSection ? (
							<Heading
								as="h3"
								textSize="h2Mobile"
								paddingBottom="s16"
								largeTablet={['textCenter']}
								mobile={[
									'textLeft',
									{ textSize: 'h3' },
								]}
								position="relative"
								scale
							>
								{title}
							</Heading>
						) : (
							<Heading
								as="h3"
								textSize="h2Mobile"
								paddingBottom="s16"
								largeTablet={['textCenter']}
								mobile={[
									'textLeft',
									{ textSize: 'h3' },
								]}
								scale
							>
								{title}
							</Heading>
						) }
						{typeof description === 'string' && (
							<Paragraph
								largeTablet={['textCenter']}
								mobile={['textLeft']}
							>
								{description}
							</Paragraph>
						)}
						{description instanceof Array && (
							<Flex
								direction="column"
								gap="16px"
							>
								{description.map((desc, index) => (
									<Paragraph
										/* eslint-disable-next-line react/no-array-index-key */
										key={index}
										largeTablet={['textCenter']}
										mobile={['textLeft']}
									>
										{desc}
									</Paragraph>
								))}
							</Flex>
						)}
					</Flex>
					<Wrapper
						hide="largeTablet"
					>
						<Flex
							w={smaller ? '500px' : '700px'}
							desktop={[{ w: '550px' }]}
						>
							{image}
						</Flex>
					</Wrapper>
					<Flex
						show="largeTablet"
						w="60%"
						tablet={[{ w: '70%' }]}
						mobile={['fluid']}
					>
						{mobileImage}
					</Flex>
				</Flex>
			</Section>
		</Flex>
	);
};

TextImageSection.defaultProps = {
	eyebrow: undefined,
	isImageLeft: false,
	imageMobile: undefined,
	smaller: false,
	isFirst: false,
	isLast: false,
	aboutUsSection: false,
};

export default TextImageSection;
