import React from 'react';

// Assets
import bottomImg from '../../../assets/images/web-dev/extra-mile/bottom.png';
import rightImg from '../../../assets/images/web-dev/extra-mile/right.png';
import tablet from '../../../assets/images/web-dev/extra-mile/tablet.png';

// Molecules
import ExtraMileSection from '../../Molecules/Sections/ExtraMile';

// @TODO: change alt text for images

const ExtraMile: React.FC = () => {
	return (
		<ExtraMileSection
			title="We always go the extra mile to build the product you’ve envisioned."
			rightImage={rightImg}
			rightImageAlt=""
			bottomImage={bottomImg}
			bottomImageAlt=""
			tabletImage={tablet}
			tabletImageAlt=""
		/>
	);
};

export default ExtraMile;
