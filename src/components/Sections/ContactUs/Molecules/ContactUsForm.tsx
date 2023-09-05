import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useModalContext } from '../../../../contexts/modal';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { StatusMessage } from '../../../Molecules/Form/Form.atoms';
import Button from '../../../Atoms/Button';

// Molecules
import Input from '../../../Molecules/Form/Input';
import TextArea from '../../../Molecules/Form/TextArea';

// Hooks
import useAsyncHandler from '../../../../utils/hooks/useAsyncHandler';

// Requests
import { sendMessage } from '../../../../utils/requests';

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

const ContactUsForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>({ defaultValues });

	const { toggleModalOpen } = useModalContext();

	const formHandler = useCallback(async (data: Inputs) => {
		await sendMessage({
			...data,
			location: 'Contact us',
		});
		toggleModalOpen();
	}, [toggleModalOpen]);

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
			onSubmit={handleSubmit(onSubmit)}
			gap="28px"
		>
			<Input
				label="Your name"
				id="input-name"
				type="text"
				{...register('name', { required: 'Name is required' })}
				errorMsg={errors.name?.message}
			/>
			<Input
				label="Your email address"
				id="input-email"
				type="text"
				{...register('email', {
					required: 'Email required',
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: 'Invalid email format',
					},
				})}
				errorMsg={errors.email?.message}
			/>
			<TextArea
				label="Message"
				id="input-message"
				minH="150px"
				{...register('message', { required: 'Message is required' })}
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
					marginTop="s20"
					variant="secondary"
					text={loading ? 'Sending message...' : 'Send message'}
				/>
				{!!error && <StatusMessage variant="error">Error sending.</StatusMessage>}
			</Flex>
		</Flex>
	);
};

export default ContactUsForm;
