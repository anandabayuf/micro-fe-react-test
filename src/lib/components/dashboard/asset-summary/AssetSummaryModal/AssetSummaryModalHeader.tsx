import { Flex, Icon, IconButton, Spacer } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import React from 'react';
import { FormattedMessage } from 'react-intl';

interface AssetSummaryModalHeaderProps {
	onClose: () => void;
	id?: string;
}

const AssetSummaryModalHeader: React.FC<AssetSummaryModalHeaderProps> = ({
	onClose,
	id,
}) => {
	return (
		<div>
			<Flex>
				<FormattedMessage id="detailTitle" />
				<Spacer />
				<IconButton
					id={`${id}-close-btn`}
					variant="ghost"
					padding={0}
					icon={
						<Icon
							as={FiX}
							fontSize="lg"
						/>
					}
					aria-label="close-button"
					color={{ base: 'black', md: 'orange.500' }}
					onClick={() => onClose()}
				/>
			</Flex>
		</div>
	);
};

export default AssetSummaryModalHeader;
