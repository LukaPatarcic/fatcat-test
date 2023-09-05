import React from 'react';

// Molecules
import BaseSection, { TSection } from 'fatcat-ui-library/components/Molecules/Section';

export interface SectionProps extends TSection {
	clearTopPadding?: boolean;
	clearBottomPadding?: boolean;
}

const Section: React.FC<React.PropsWithChildren<SectionProps>> = (props) => {
	const {
		children,
		clearTopPadding,
		clearBottomPadding,
		...rest
	} = props;
	return (
		<BaseSection
			scale
			paddingTop={clearTopPadding ? 's0' : 's192'}
			paddingBottom={clearBottomPadding ? 's0' : 's192'}
			{...rest}
		>
			{children}
		</BaseSection>
	);
};

Section.defaultProps = {
	clearTopPadding: false,
	clearBottomPadding: false,
};

export default Section;
