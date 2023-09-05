import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';

import { Heading as BaseHeading } from 'fatcat-ui-library/components/Atoms/Heading';

const BorderHeading: React.FC<{ children: ReactElement}> = (props) => {
	const {
		children,
	} = props;

	const theme = useTheme();

	return (
		<BaseHeading
			as="h2"
			margin={['b24', 't24']}
			padding={['b24']}
			borderBottom={`2px solid ${theme.color.gray20}`}
		>
			{children}
		</BaseHeading>
	);
};

export default BorderHeading;
