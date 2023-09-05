import React from 'react';

// Molecules
import ExtraMileSection from '../../Molecules/Sections/ExtraMile';

// Assets
import tablet from '../../../assets/images/app-dev/extra-mile/tablet.png';
import bottom from '../../../assets/images/app-dev/extra-mile/extra-mile-bottom.png';
import right from '../../../assets/images/app-dev/extra-mile/extra-mile-right.png';

// @TODO: maybe add better alt text for images

const ExtraMile: React.FC = () => {
	return (
		<ExtraMileSection
			title="We always go the extra mile to build the product you’ve envisioned."
			rightImage={right}
			rightImageAlt="FoxVision screens"
			bottomImage={bottom}
			bottomImageAlt="Various projects"
			tabletImage={tablet}
			tabletImageAlt="ConvertMore admin dashboard"
		/>
	);
};

export default ExtraMile;
