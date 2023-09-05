import React, {
	useCallback,
	useEffect,
	useId,
} from 'react';
import {
	useForm,
} from 'react-hook-form';

// Atoms
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import {
	StatusMessage,
} from '../../Molecules/Form/Form.atoms';
import Button from '../../Atoms/Button';

// Molecules
import Input from '../../Molecules/Form/Input';

// Hooks
import useAsyncHandler from '../../../utils/hooks/useAsyncHandler';

// Requests
import { sendMessage } from '../../../utils/requests';

// Contexts
import { useModalContext } from '../../../contexts/modal';

const defaultValues = {
	name: '',
	email: '',
	position: '',
};

interface Inputs {
	name: string;
	email: string;
	position: string;
}

const StaffAugmentationForm = () => {
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
			location: 'Staff augmentation - Availability check',
		});
		toggleModalOpen();
	}, [toggleModalOpen]);

	const {
		loading,
		success,
		error,
		execute: onSubmit,
	} = useAsyncHandler(formHandler);

	const id = useId();

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
				id={`${id}-name`}
				type="text"
				{...register('name', { required: 'Name is required' })}
				errorMsg={errors.name?.message}
			/>
			<Input
				label="Your email address"
				id={`${id}-email`}
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
			<Input
				label="Enter a role"
				id={`${id}-position`}
				type="text"
				{...register('position', {
					required: 'Position is required',
				})}
				errorMsg={errors.position?.message}
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
					marginTop="s24"
					text={loading ? 'Checking Availability...' : 'Check Availability'}
				/>
				{!!error && <StatusMessage variant="error">Error sending.</StatusMessage>}
			</Flex>
		</Flex>
	);
};

export default StaffAugmentationForm;
