import React, { ReactNode } from 'react';

import { BR } from 'fatcat-ui-library/components/Atoms/Divider';

const SplitText = (text: string) => {
	return text.split('\n')
		.reduce((prev, curr, index) => {
			if (index > 0) {
				prev.push((<BR key={index}  hide="tablet" />));  // eslint-disable-line
			}
			prev.push(curr);
			return prev;
		}, [] as ReactNode[]);
};

export default SplitText;
