import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import AddModal from '../Modal/Add';
import { useOtherBankAccount } from '../../../../../store/otherBankAccount';

const AddButton: React.FC = () => {
	const { setActiveSteps, resetFormBanksAndAccounts } = useOtherBankAccount();
	const [isModalAddOpen, setIsModalAddOpen] = React.useState(false);

	const handleOpenModalAdd = () => setIsModalAddOpen(true);

	const handleCloseModalAdd = () => {
		setActiveSteps(0);
		resetFormBanksAndAccounts();
		setIsModalAddOpen(false);
	};

	return (
		<>
			<Button
				leftIcon={<FaPlus />}
				w={{ base: 'full', md: 'auto' }}
				onClick={handleOpenModalAdd}
			>
				<Text fontWeight={400}>
					<FormattedMessage id="listOfBanksAndAccounts.button.add" />
				</Text>
			</Button>

			<AddModal
				isOpen={isModalAddOpen}
				handleClose={handleCloseModalAdd}
			/>
		</>
	);
};

export default AddButton;
