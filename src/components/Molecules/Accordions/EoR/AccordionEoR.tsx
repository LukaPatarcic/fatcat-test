import React, { useState, useId } from 'react';
import { CSSProp } from 'styled-components';

// Icons
import Plus from '../../../../assets/images/svg-inline/accordion-plus.svg';
import Minus from '../../../../assets/images/svg-inline/accordion-minus.svg';

// Atoms
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph/Paragraph';
import { Text } from 'fatcat-ui-library/components/Atoms/Text';

import {
	AccordionContent,
	AccordionWrapper,
	AccordionTitle,
} from './AccordionEoR.atoms';

export interface AccordionProps {
	title: string | React.ReactElement;
	content?: string;
	styled?: CSSProp;
	isLast?: boolean;
}

const AccordionEoR: React.FC<AccordionProps> = (props) => {
	const {
		title,
		content,
		styled,
		isLast,
	} = props;
	const id = useId();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<AccordionWrapper
			styled={styled}
			className="accordion-item"
			mobile={['fluid']}
			isLast={isLast}
		>
			<AccordionTitle
				as="h4"
				isOpen={isOpen}
			>
				<button
					id={`accordion-title-${id}`}
					aria-controls={`accordion-content-${id}`}
					type="button"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				>
					{title}
					<Text
						hover={[{ textColor: 'purple' }]}
					>
						{isOpen ? <Minus /> : <Plus />}
					</Text>
				</button>
			</AccordionTitle>
			<AccordionContent
				id={`accordion-content-${id}`}
				aria-labelledby={`accordion-title-${id}`}
				isOpen={isOpen}
			>
				<Paragraph
					paddingX="s20"
					paddingBottom="s16"
				>
					{content}
				</Paragraph>
			</AccordionContent>
		</AccordionWrapper>
	);
};

AccordionEoR.defaultProps = {
	styled: undefined,
	content: undefined,
	isLast: false,
};

export default AccordionEoR;
