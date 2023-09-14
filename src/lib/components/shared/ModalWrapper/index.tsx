import type { ModalContentProps, ModalProps } from '@chakra-ui/react';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import type * as React from 'react';

export type ModalWrapperProps = Pick<
	ModalProps,
	'isOpen' | 'onClose' | 'size' | 'closeOnOverlayClick' | 'closeOnEsc'
> & {
	header?: React.ReactNode;
	withCloseButton?: boolean;
	body?: React.ReactNode;
	footer?: React.ReactNode;
	contentWrapperProps?: ModalContentProps;
	isCentered?: boolean;
	id?: string;
};

const ModalWrapper = ({
	isOpen,
	size = 'sm',
	header,
	withCloseButton = true,
	body,
	footer,
	closeOnOverlayClick = false,
	closeOnEsc = false,
	onClose,
	contentWrapperProps,
	isCentered = true,
	id,
}: ModalWrapperProps) => {
	return (
		<Modal
			size={size}
			isOpen={isOpen}
			onClose={onClose}
			closeOnEsc={closeOnEsc}
			closeOnOverlayClick={closeOnOverlayClick}
			isCentered
			id={`${id}-modal`}
		>
			<ModalOverlay />

			<ModalContent
				borderRadius={{ base: 0, md: 16 }}
				{...contentWrapperProps}
			>
				{header && (
					<ModalHeader
						fontWeight="700"
						fontSize={{ base: '2xl', lg: '3xl' }}
						boxShadow={{
							base: '0px 8px 16px -8px #FCECE2',
							md: 'none',
						}}
					>
						{header}
					</ModalHeader>
				)}
				{withCloseButton && (
					<ModalCloseButton id={`${id}-modal-close-btn`} />
				)}

				{body && (
					<ModalBody
						display="flex"
						flexDirection="column"
					>
						{body}
					</ModalBody>
				)}

				{footer && <ModalFooter gridGap={2}>{footer}</ModalFooter>}
			</ModalContent>
		</Modal>
	);
};

export default ModalWrapper;
