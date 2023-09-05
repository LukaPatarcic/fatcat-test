import React, { useCallback, useEffect, useId } from 'react';
import { useForm } from 'react-hook-form';
import { useModalContext } from '../../../contexts/modal';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { StatusMessage } from '../../Molecules/Form/Form.atoms';
import Button from '../../Atoms/Button';

// Molecules
import Input from '../../Molecules/Form/Input';
import TextArea from '../../Molecules/Form/TextArea';

// Hooks
import useAsyncHandler from '../../../utils/hooks/useAsyncHandler';

// Requests
import { sendMessage } from '../../../utils/requests';

const defaultValues = {
	name: '',
	email: '',
	message: '',
};

interface Inputs {
	name: string;
	email: string;
	message: string;
}

interface SimpleFormProps {
	yellowForm?: boolean;
	location: string;
}

const SendMessageForm: React.FC<SimpleFormProps> = (props) => {
	const {
		yellowForm,
		location,
	} = props;

	const nameId = useId();
	const emailId = useId();
	const messageId = useId();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>({
		defaultValues,
	});

	const { toggleModalOpen } = useModalContext();

	const formHandler = useCallback(async (data: Inputs) => {
		await sendMessage({
			...data,
			location,
		});
		toggleModalOpen();
	}, [location, toggleModalOpen]);

	const {
		loading,
		error,
		success,
		execute: onSubmit,
	} = useAsyncHandler(formHandler);

	useEffect(() => {
		if (success) {
			reset(defaultValues);
		}
	}, [reset, success]);

	return (
		<Flex
			direction="column"
			as="form"
			minH="487px"
			justifyContent="center"
			onSubmit={handleSubmit(onSubmit)}
			gap="28px"
			maxW={yellowForm ? '384px' : '500px'}
			backgroundColor={yellowForm ? 'tertiaryYellow' : 'cream'}
			paddingX={yellowForm ? 's32' : 's56'}
			paddingY={yellowForm ? 's40' : 's56'}
			borderRadius="8px"
			largeTablet={[{
				padding: 's24',
				paddingX: 's24',
				minH: '455px',
			}]}
			aria-busy={loading}
		>
			{!yellowForm && (
				<Heading
					as="h3"
					textSize="h5"
					marginBottom="s16"
					textAlign="center"
					mobile={[
						{
							textSize: 'h5Mobile',
						},
					]}
				>
					...or, if you rather prefer messages:
				</Heading>
			)}
			<Input
				label="Your name"
				id={nameId}
				type="text"
				{...register('name', { required: 'Name is required' })}
				aria-required
				errorMsg={errors.name?.message}
			/>
			<Input
				label="Your email address"
				id={emailId}
				type="text"
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Invalid email format',
					},
				})}
				aria-required
				errorMsg={errors.email?.message}
			/>
			<TextArea
				label="Message"
				id={messageId}
				minH={yellowForm ? 'unset' : '150px'}
				{...register('message', { required: 'Message is required' })}
				aria-required
				errorMsg={errors.message?.message}
			/>
			<Flex
				direction="column"
				alignItems="flex-end"
				gap="10px"
				position="relative"
			>
				<Button
					type="submit"
					as="button"
					w="100%"
					marginTop="s16"
					variant={yellowForm ? 'primary' : 'secondary'}
					text={yellowForm ? (loading ? 'Submitting form...' : 'Submit form') : (loading ? 'Sending message...' : 'Send message')}
				/>
				{!!error && <StatusMessage variant="error">Error sending.</StatusMessage>}
			</Flex>
		</Flex>
	);
};

SendMessageForm.defaultProps = {
	yellowForm: undefined,
};

export default SendMessageForm;
