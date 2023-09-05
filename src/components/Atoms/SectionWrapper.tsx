import React, { PropsWithChildren } from 'react';
// Atoms
import { Flex, TFlex } from 'fatcat-ui-library/components/Atoms/Flex';

export interface SectionWrapperProps extends TFlex {
	as?: 'div' | 'section' | 'article';
	id?: string;
	clearTopPadding?: boolean;
	clearBottomPadding?: boolean;
}

export const SectionWrapper: React.FC<PropsWithChildren<SectionWrapperProps>> = (props) => {
	const {
		clearTopPadding,
		clearBottomPadding,
		...rest
	} = props;
	return (
		<Flex
			paddingBottom={clearBottomPadding ? 's0' : 's192'}
			direction="column"
			paddingTop={clearTopPadding ? 's0' : 's192'}
			scale
			{...rest}
		/>
	);
};

SectionWrapper.defaultProps = {
	as: 'div',
	id: undefined,
	clearTopPadding: false,
	clearBottomPadding: false,
};
