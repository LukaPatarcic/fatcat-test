import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

type AreaOfExpertiseCardProps = {
	title: string | ReactElement;
}

const AreaOfExpertiseCard: React.FC<AreaOfExpertiseCardProps> = (props) => {
	const {
		title,
	} = props;

	const theme = useTheme();

	return (
		<Flex
			as="li"
			direction="column"
			gap="20px"
			border={`2px solid ${theme.color.tertiaryYellow}`}
			borderLeft={`8px solid ${theme.color.tertiaryYellow}`}
			borderRadius="8px"
			paddingX="s32"
			paddingY="s20"
		>
			<Paragraph
				textSize="h3"
				mobile={[
					{
						textSize: 'h3Mobile',
						fontWeight: 'medium',
					},
				]}
			>
				{title}
			</Paragraph>
		</Flex>
	);
};

export default AreaOfExpertiseCard;
