import React, { ReactElement } from 'react';
import { css } from 'styled-components';

// Assets
import yellowCircleLine from '../../../assets/images/icons/yellow-circle-line.svg';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { TWrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

interface CircledTextProps extends TWrapper {
	text: string;
	arrow?: ReactElement;
}

const CircledText: React.FC<CircledTextProps> = (props) => {
	const {
		text,
		arrow,
		...rest
	} = props;

	return (
		<Flex
			as="span"
			display="inline-flex"
			direction="column"
			styled={css`vertical-align: text-top;`}
			{...rest}
		>
			<Text
				fontFamily="secondary"
				fontSize="s18"
				lineHeight="s130"
				backgroundImage={yellowCircleLine}
				backgroundSize="100% 100%"
				backgroundRepeat="no-repeat"
				marginBottom="s10"
				padding="s20"
				textAlign="center"
				tablet={[{
					fontSize: 's16',
					padding: 's16',
				}]}
			>
				{text}
			</Text>
			{arrow}
		</Flex>
	);
};

CircledText.defaultProps = {
	arrow: undefined,
};

export default CircledText;
