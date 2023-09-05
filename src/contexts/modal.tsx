import React, {
	useCallback, useMemo,
} from 'react';
import createCtx from '../utils/createCtx';

// Helpers

// Molecules
import SuccessModal from '../components/Molecules/Modals/SuccessModal/SuccessModal';
import useStateTransition from '../utils/hooks/useStateTransition';

interface ModalContextState {
	modalOpen: boolean;
	toggleModalOpen: () => void;
}

const [
	useModalContext,
	ModalProviderOrigin,
	ModalContext,
] = createCtx<ModalContextState>('ModalContext', undefined);

// @TODO: refactor this to use regular hook without context
// @TODO: a11y
const ModalProvider: React.FC<React.PropsWithChildren> = (props) => {
	const {
		children,
	} = props;

	const {
		isActive: isOpen,
		set: setIsOpen,
		transitioning,
	} = useStateTransition(false, 500);

	const handleModalOpen = useCallback(async () => {
		await setIsOpen(true, true);
	}, [setIsOpen]);

	const handleClose = useCallback(async () => {
		await setIsOpen(false);
	}, [setIsOpen]);

	const modalContextValue = useMemo(() => ({
		modalOpen: isOpen,
		toggleModalOpen: handleModalOpen,
	}), [handleModalOpen, isOpen]);

	return (
		<ModalProviderOrigin
			value={modalContextValue}
		>
			<SuccessModal
				isOpen={isOpen}
				transitioning={transitioning}
				handleClose={handleClose}
			/>
			{children}
		</ModalProviderOrigin>
	);
};

export { useModalContext, ModalProvider, ModalContext };
