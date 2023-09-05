import React, { useState, useId } from 'react';
import { CSSProp, useTheme } from 'styled-components';

// Icons
import { AiOutlinePlusCircle } from '@react-icons/all-files/ai/AiOutlinePlusCircle';
import { AiOutlineMinusCircle } from '@react-icons/all-files/ai/AiOutlineMinusCircle';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import {
	AccordionTitle,
	Plus,
	AccordionContent,
	AccordionWrapper,
} from './Accordion.atoms';

export interface AccordionProps {
	title: string | React.ReactElement;
	content?: string | React.ReactElement;
	styled?: CSSProp;
}

const Accordion: React.FC<AccordionProps> = (props) => {
	const {
		title,
		content,
		styled,
	} = props;
	const id = useId();
	const theme = useTheme();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<AccordionWrapper
			styled={styled}
			margin={['b16']}
			className="accordion-item"
			mobile={['fluid']}
		>
			<AccordionTitle
				as="h4"
				isOpen={isOpen}
				hoverColor="cream"
				id={`accordion-title-${id}`}
			>
				<button
					aria-controls={`accordion-content-${id}`}
					type="button"
					aria-expanded={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				>
					{title}
					{isOpen ?
						<Plus as={AiOutlineMinusCircle} minW="24px" />
						:
						<Plus as={AiOutlinePlusCircle} minW="24px" />}
				</button>
			</AccordionTitle>
			<AccordionContent
				id={`accordion-content-${id}`}
				aria-labelledby={`accordion-title-${id}`}
				padding={['l20', 'b32', 't24', 'r20']}
				mobile={[
					{
						padding: ['l8', 'b24', 'r8'],
					},
				]}
				isOpen={isOpen}
				hidden={!isOpen}
			>
				<Wrapper
					borderLeft={`2px solid ${theme.color.mainYellow}`}
					padding={['l16']}
				>
					{content}
				</Wrapper>
			</AccordionContent>
		</AccordionWrapper>
	);
};

Accordion.defaultProps = {
	styled: undefined,
	content: undefined,
};

export default Accordion;
