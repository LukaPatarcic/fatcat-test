import React, { useCallback, useRef } from 'react';
import { useTheme } from 'styled-components';
import { useForm } from 'react-hook-form';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { InputField } from 'fatcat-ui-library/components/Atoms/Input';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import {
	Label,
	InputWrapper,
	StatusMessage,
} from '../../Molecules/Form/Form.atoms';
import Button from '../../Atoms/Button';
import Switch from '../../Molecules/Form/Switch';
import Checkbox from '../../Molecules/Form/Checkbox';

// Molecules
import Input from '../../Molecules/Form/Input';
import TextArea from '../../Molecules/Form/TextArea';
import FileInput from '../../Molecules/Form/FileInput';

// Hooks
import useAsyncHandler from '../../../utils/hooks/useAsyncHandler';

// Helpers
import { validateFile } from '../../../utils/validation';

// Requests
import { applyForAJob } from '../../../utils/requests';
import { useModalContext } from '../../../contexts/modal';

const defaultValues = {
	agree: true,
	cv: null,
	name: '',
	email: '',
	phoneNumber: '',
	linkedin: '',
	salary: '',
	message: '',
	showNet: false,
};

interface Inputs {
	name: string;
	email: string;
	phoneNumber: string;
	linkedin: string;
	salary: string;
	message: string;
	agree: boolean;
	showNet: boolean;
	cv: FileList | null;
}

interface JobFormProps {
	careers?: boolean;
	jobId: number;
	jobName: string;
}

const JobForm: React.FC<JobFormProps> = (props) => {
	const {
		careers,
		jobId,
		jobName,
	} = props;

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues,
	});

	const fileInputMethods = useRef<{ reset(): void } | null>(null);

	const { toggleModalOpen } = useModalContext();

	const formHandler = useCallback(
		async (data: Inputs): Promise<void> => {
			await applyForAJob({
				...data,
				cv: data.cv ? data.cv[0] : null,
				jobId,
				jobName,
			});
			reset(defaultValues);
			fileInputMethods.current?.reset();
			toggleModalOpen();
		},
		[jobId, jobName, reset, toggleModalOpen]
	);

	const {
		loading,
		error,
		execute: onSubmit,
	} = useAsyncHandler(formHandler);

	const theme = useTheme();

	const showNetWatched = watch('showNet');
	const agreeWatched = watch('agree');

	return (
		<Flex
			direction="column"
			as="form"
			onSubmit={handleSubmit(onSubmit)}
			gap="34px"
			maxW="600px"
			minH={careers ? '885px' : '1050px'}
			justifyContent="center"
			largeTablet={[{
				minH: careers ? '901px' : '1066px',
				justifyContent: 'flex-start',
			}]}
		>
			<Input
				label="Full name"
				id="input-name"
				type="text"
				{...register('name', {
					required: 'Name is required',
					pattern: {
						value: /^[^ ]+\s[^ ]+$/,
						message: 'Should be firstname and lastname separated by space.',
					},
				})}
				errorMsg={errors.name?.message}
			/>
			<Input
				label="Email address"
				id="input-email"
				type="text"
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Please enter a valid email address.',
					},
				})}
				errorMsg={errors.email?.message}
			/>
			<Input
				label="Phone number"
				id="input-phone"
				type="text"
				{...register('phoneNumber', {
					required: 'Phone number is required',
				})}
				errorMsg={errors.phoneNumber?.message}
			/>
			<Input
				label="Linkedin (optional)"
				id="input-linkedin"
				type="text"
				{...register('linkedin')}
				errorMsg={errors.linkedin?.message}
			/>
			{!careers && (
				<InputWrapper
					position="relative"
					marginBottom="8px"
				>
					<Wrapper
						w="auto"
						position="absolute"
						bottom="16px"
						left="16px"
						right="16px"
						paddingTop="s16"
						borderTop={`1px solid ${theme.color.lightGrey}`}
						zIndex="1"
					>
						<Switch
							afterText="Net"
							aria-label="Switch"
							useSameBackgroundColor
							textColor="purple"
							beforeText="Gross"
							value={showNetWatched}
							{...register('showNet')}
						/>
					</Wrapper>
					<InputField
						id="input-salary"
						type="string"
						h="105px"
						{...register('salary')}
						padding={['b52']}
					/>
					<Label
						htmlFor="input-salary"
					>
						Salary expectation (optional)
					</Label>
				</InputWrapper>
			)}
			<FileInput
				methodsRef={fileInputMethods}
				errorMsg={errors.cv?.message}
				{...register('cv', {
					required: 'CV is required',
					validate: v => validateFile(v ? v[0] : null),
				})}
			/>
			<TextArea
				label="Message (optional)"
				id="input-message"
				minH="150px"
				{...register('message')}
				errorMsg={errors.message?.message}
			/>
			<Wrapper textColor="black">
				<Checkbox
					afterText={<Paragraph>I agree that FatCat Coders can use my data to contact me for this or a similar job opportunity</Paragraph>}
					aria-label="Checkbox"
					backgroundColor="black"
					value={agreeWatched}
					{...register('agree')}
				/>
			</Wrapper>
			<Flex
				direction="column"
				alignItems="flex-end"
				gap="10px"
				position="relative"
			>
				<Button
					type="submit"
					as="button"
					marginTop="s20"
					w="auto"
					largeTablet={['fluid']}
					text={loading ? 'Submitting form...' : 'Submit form'}
				/>
				{!!error && <StatusMessage variant="error">Error sending.</StatusMessage>}
			</Flex>
		</Flex>
	);
};

JobForm.defaultProps = {
	careers: undefined,
};

export default JobForm;
