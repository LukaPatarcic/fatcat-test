import React from 'react';
import { InputHTMLAttributes, forwardRef } from 'react';

// Assets
import error from '../../../assets/images/icons/form-error.svg';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import {
	Label,
	ErrorMsg,
	InputWrapper,
} from './Form.atoms';
import { TextArea as TextAreaLib } from 'fatcat-ui-library/components/Atoms/TextArea';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorMsg: string | undefined;
  minH?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>((props, ref) => {
	const {
		label,
		errorMsg,
		minH,
		...rest
	} = props;

	return (
		<InputWrapper>
			<ErrorMsg>
				{errorMsg && (
					<Flex
						gap="8px"
						alignItems="center"
					>
						<Image
							alt=""
							src={error}
							w="16px"
						/>
						{errorMsg}
					</Flex>
				)}
			</ErrorMsg>
			<Wrapper position="relative">
				<TextAreaLib
					minH={minH}
					id={rest.id}
					ref={ref}
					// @ts-ignore
					errorMsg={!!errorMsg}
					aria-invalid={!!errorMsg}
					{...rest}
				/>
			</Wrapper>
			<Label
				htmlFor={rest.id}
			>
				{label}
			</Label>
		</InputWrapper>
	);
},);

TextArea.displayName = 'Input';

TextArea.defaultProps = {
	minH: undefined,
};

export default TextArea;
