import React, { ReactElement } from 'react';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

import {
	SquareWrapper,
	SquareWrapperContent,
} from './atoms';

export interface TestimonialProps {
	testimonial: string | ReactElement;
	logo: ReactElement;
	avatar: ReactElement;
	// Client name
	name: string;
	// Client title
	title: string;
}

const Testimonial: React.FC<TestimonialProps> = (props) => {
	const {
		testimonial,
		logo,
		avatar,
		name,
		title,
	} = props;

	return (
		<Flex
			as="article"
			gap="80px"
			maxW="1080px"
			alignItems="flex-start"
			tablet={[
				'column',
				'alignItemsCenter',
				{
					gap: '40px',
				},
			]}
		>
			<Flex
				padding={['b40', 'r40', 'l20', 't16']}
				position="relative"
				w="230px"
				flexShrink="0"
				tablet={[{ padding: ['l0'] }]}
				mobile={[
					{
						w: '140px',
						padding: ['b24', 'r24'],
					},
				]}
			>
				<SquareWrapper
					backgroundColor="white"
					boxShadow="0px 5.61462px 20.2126px rgba(0, 0, 0, 0.1)"
					borderRadius="10px"
				>
					<SquareWrapperContent
						padding="s30"
						mobile={[
							{
								padding: 's18',
							},
						]}
					>
						<Flex
							h="100%"
							alignItems="center"
						>
							{logo}
						</Flex>
					</SquareWrapperContent>
				</SquareWrapper>
				<Wrapper
					w="80px"
					position="absolute"
					bottom="0"
					right="0"
					borderRadius="10px"
					mobile={[
						{
							w: '48px',
						},
					]}
				>
					{avatar}
				</Wrapper>
			</Flex>
			<Wrapper
				as="figure"
			>
				<Wrapper
					as="blockquote"
					margin={['b32']}
					fontSize="s20"
					mobile={[
						{
							textSize: 'paragraphMobile',
							fontWeight: 'normal',
						},
					]}
				>
					{testimonial}
				</Wrapper>
				<Wrapper
					as="figcaption"
				>
					<Paragraph
						margin={['b4']}
						textColor="gray60"
						fontWeight="medium"
					>
						{name}
					</Paragraph>
					<Paragraph
						textColor="gray60"
						fontWeight="medium"
					>
						{title}
					</Paragraph>
				</Wrapper>
			</Wrapper>
		</Flex>
	);
};

export default Testimonial;
