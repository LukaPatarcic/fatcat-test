import React, {
	useState,
	forwardRef,
	InputHTMLAttributes,
	MutableRefObject,
	useImperativeHandle,
} from 'react';

// Atoms
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { InputField } from 'fatcat-ui-library/components/Atoms/Input';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import {
	UploadLabel,
	InputText,
} from './FileInput.atoms';
import {
	ErrorMsg,
	InputWrapper,
	Label,
} from '../Form.atoms';

// Assets
import upload from '../../../../assets/images/upload.svg';
import errorIcon from '../../../../assets/images/icons/form-error.svg';

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	errorMsg?: string;
	methodsRef: MutableRefObject<{ reset: () => void } | null>;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
	const {
		errorMsg,
		methodsRef,
		onChange,
		...rest
	} = props;
	const [fileName, setFileName] = useState<string>('');

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		setFileName(files?.length ? files[0].name : '');
		onChange && onChange(event);
	};

	// @TODO: find a way to reset file input without using exposed `reset` function
	useImperativeHandle(methodsRef, () => ({
		reset: () => {
			setFileName('');
		},
	}), [setFileName]);

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
							src={errorIcon}
							w="16px"
						/>
						{errorMsg}
					</Flex>
				)}
			</ErrorMsg>
			<Wrapper>
				<InputField
					ref={ref}
					id={rest.name}
					type="file"
					accept="application/pdf"
					hidden
					position="relative"
					{...rest}
					onChange={handleOnChange}
				/>
				<UploadLabel
					htmlFor={rest.name}
					borderFocus="theme.color.primary"
					errorMsg={errorMsg}
				>
					{fileName && (
						<InputText>
							{fileName}
						</InputText>
					)}
					<Image
						src={upload}
						alt=""
						w="20px"
						position="absolute"
						right="20px"
					/>
				</UploadLabel>
			</Wrapper>
			<Label
				htmlFor="input-cv"
			>
				Upload you CV (only PDF)
			</Label>
		</InputWrapper>
	);
});

FileInput.defaultProps = {
	errorMsg: undefined,
};

FileInput.displayName = 'FileInput';

export default FileInput;
