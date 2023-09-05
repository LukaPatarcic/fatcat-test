import React from 'react';

// Assets
import bottomImg from '../../../assets/images/software-dev/extra-mile/bottom.png';
import rightImg from '../../../assets/images/software-dev/extra-mile/right.png';
import tablet from '../../../assets/images/software-dev/extra-mile/tablet.png';

// Molecules
import ExtraMileSection from '../../Molecules/Sections/ExtraMile';

// @TODO: maybe add better alt text for images

const ExtraMile: React.FC = () => {
	return (
		<ExtraMileSection
			title="We always go the extra mile to build the product you’ve envisioned."
			rightImage={rightImg}
			rightImageAlt="Shapa screens"
			bottomImage={bottomImg}
			bottomImageAlt="Various projects"
			tabletImage={tablet}
			tabletImageAlt="Shapa screens"
		/>
	);
};

export default ExtraMile;
