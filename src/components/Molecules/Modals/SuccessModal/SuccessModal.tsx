import React, { useEffect, useRef } from 'react';

// Atoms
import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';
import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';
import { Image } from 'fatcat-ui-library/components/Atoms/Image';
import { Heading } from 'fatcat-ui-library/components/Atoms/Heading';
import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';
import {
	ModalWrapper,
	CloseButton,
} from './SuccessModal.atoms';

// Assets
import Cross from '../../../../assets/images/svg-inline/cross.svg';
import confirmationImage from '../../../../assets/images/confirmation.svg';

// Hooks
import { useClickOutsideElement } from '../../../../utils/hooks/useClickOutsideElement';

interface SuccessModalProps {
	isOpen: boolean;
	transitioning: boolean;
	handleClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = (props) => {
	const {
		isOpen,
		transitioning,
		handleClose,
	} = props;

	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (isOpen) ref?.current?.showModal();
		else ref?.current?.close();
	}, [isOpen, ref]);

	useClickOutsideElement(handleClose, ref);

	return (
		<ModalWrapper
			isOpen={isOpen}
			transitioning={transitioning}
			ref={ref}
		>
			<Wrapper
				w="fit-content"
				h="fit-content"
				position="absolute"
				top="0"
				right="0"
			>
				<CloseButton
					title="Close dialog"
					aria-label="Close dialog"
					onClick={handleClose}
				>
					<Cross />
				</CloseButton>
			</Wrapper>
			<Flex
				direction="column"
				backgroundColor="white"
				paddingX="s56"
				paddingY="s64"
				marginX="sauto"
				alignItems="center"
				justifyContent="center"
				borderRadius="5px"
				largeTablet={[
					{
						paddingX: 's20',
						paddingBottom: 's64',
						paddingTop: 's54',
					},
				]}
			>
				<Image
					src={confirmationImage}
					alt=""
					w="70px"
					marginBottom="s32"
				/>
				<Heading
					as="h3"
					textAlign="center"
					marginBottom="s32"
					largeTablet={[{ marginBottom: 's24'	}]}
				>
					Your message has been sent successfully!
				</Heading>
				<Paragraph textAlign="center">
					Our team will contact you shortly.
				</Paragraph>
			</Flex>
		</ModalWrapper>
	);
};

export default SuccessModal;
