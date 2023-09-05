import React from 'react';

// Atoms
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

export const SecondaryHeading: React.FC<React.PropsWithChildren> = (props) => {
	const {
		children,
	} = props;

	return (
		<Heading
			as="h2"
			w="100%"
			textAlign="center"
			mobile={[{
				textAlign: 'left',
			}]}
			margin={['b80']}
			scale
		>
			{children}
		</Heading>
	);
};
