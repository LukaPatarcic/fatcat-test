import React from 'react';
import { InputHTMLAttributes, forwardRef } from 'react';

// Assets
import error from '../../../assets/images/icons/form-error.svg';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { InputField } from 'fatcat-ui-library/components/Atoms/Input';
import {
	InputWrapper,
	ErrorMsg,
	Label,
} from './Form.atoms';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMsg: string | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const {
		label,
		errorMsg,
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
				<InputField
					id={rest.id}
					ref={ref}
					// @ts-ignore
					errorMsg={errorMsg}
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

Input.displayName = 'Input';

export default Input;
