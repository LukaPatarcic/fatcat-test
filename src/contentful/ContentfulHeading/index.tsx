import React from 'react';

// Types
import { TContentfulHeading, TContentfulText } from '../../utils/types';

// Atoms
import { Text } from 'fatcat-ui-library/components/Atoms/Text';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';

export const generateText = (array: TContentfulText[]) => {
	const mainColor = array && array[0] ? array[0].textColor : 'black100';
	return array ? array.map((item, index) => {
		if (item.text === '<br />') {
			return <br key={index} />; // eslint-disable-line
		}
		if (item.textColor !== mainColor) {
			return (
				<Text
					key={`${item.text}-${index}`} // eslint-disable-line
					textColor={item.textColor}
				>
					{item.text}
				</Text>
			);
		}
		return item.text;
	}) : null;
};

const ContentfulHeading: React.FC<TContentfulHeading> = (props) => {
	const {
		headingSize,
		headingText,
		textAlign,
		margin,
	} = props;
	return (
		<Heading
			margin={margin || ['b32']}
			textAlign={textAlign || 'center'}
			textColor={headingText && headingText[0] ? headingText[0].textColor : 'black'}
			{...props}
			as={headingSize}
		>
			{generateText(headingText)}
		</Heading>
	);
};
export default ContentfulHeading;
