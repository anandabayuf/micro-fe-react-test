import ModalWrapper from 'lib/components/shared/ModalWrapper';
import React from 'react';
import LoanSummaryDetail from './LoanSummaryDetail';
import LoanSummaryModalHeader from './LoanSummaryModalHeader';

interface LoanSummaryModalProps {
	isOpen: boolean;
	onClose: () => void;
	selectedData: any;
	datasets: any[];
	data: any;
	id?: string;
}

const LoanSummaryModal: React.FC<LoanSummaryModalProps> = ({
	isOpen,
	onClose,
	selectedData,
	data,
	id,
}) => {
	return (
		<ModalWrapper
			id={`${id}-modal-detail`}
			size={'4xl'}
			isOpen={isOpen}
			onClose={onClose}
			withCloseButton={false}
			header={
				<LoanSummaryModalHeader
					id={`${id}-modal-detail`}
					onClose={onClose}
				/>
			}
			body={
				<LoanSummaryDetail
					id={`${id}-modal-detail`}
					data={data}
					currency={selectedData.currency}
				/>
			}
		/>
	);
};

export default LoanSummaryModal;
