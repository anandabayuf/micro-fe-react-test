import ModalWrapper from 'lib/components/shared/ModalWrapper';
import { useAssetSummaryStore } from 'lib/store/useAssetSummary';
import React from 'react';
import AssetSummaryDetail from './AssetSummaryDetail';
import AssetSummaryModalHeader from './AssetSummaryModalHeader';

interface AssetSummaryModalProps {
	isOpen: boolean;
	onClose: () => void;
	datasets: any[];
	selectedData: any;
	id?: string;
}

const AssetSummaryModal: React.FC<AssetSummaryModalProps> = ({
	isOpen,
	onClose,
	selectedData,
	id,
}) => {
	const details = useAssetSummaryStore((state) => state.details);

	const detailData = React.useMemo(() => {
		return details.summary.filter(
			(item) => item.currency === selectedData.currency
		);
	}, [selectedData]);

	return (
		<ModalWrapper
			id={`${id}-modal-detail`}
			size={'4xl'}
			isOpen={isOpen}
			onClose={onClose}
			withCloseButton={false}
			header={
				<AssetSummaryModalHeader
					id={`${id}-modal-detail`}
					onClose={onClose}
				/>
			}
			body={
				<AssetSummaryDetail
					id={`${id}-modal-detail`}
					currency={selectedData.currency}
				/>
			}
		/>
	);
};

export default AssetSummaryModal;
