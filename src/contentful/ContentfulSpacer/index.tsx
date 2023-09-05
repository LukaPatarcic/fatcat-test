import React from 'react';
// Types
import { TContentfulSpacer } from '../../utils/types';

import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

const ContentfulSpacer: React.FC<TContentfulSpacer> = ({ size, scale }) => {
	return (
		<Wrapper
			as="hr"
			paddingTop={size}
			border="none"
			margin="s0"
			scale={scale}
		/>
	);
};
export default ContentfulSpacer;
