import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlineDrag, AiFillEyeInvisible } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { FormattedMessage } from 'react-intl';

import AddWidgetModal from '../widget/modal/addWidget';
import SuccessModal from '../widget/modal/success';
import type { WidgetManagementType } from 'lib/services/api/widget/getWidget/types';
import { useWidget } from 'lib/store/widgetSettings';

type HowToProps = {
	id?: string;
};

const HowTo = ({ id }: HowToProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: openSuccess,
		onOpen: onOpenSuccess,
		onClose: onCloseSuccess,
	} = useDisclosure();
	const { listWidget, setWidgetList, setModified } = useWidget();
	const [selectWidget, setSelectWidget] =
		useState<WidgetManagementType[]>(listWidget);

	useEffect(() => {
		setSelectWidget(listWidget);
	}, [listWidget, isOpen]);

	const checkSelectWidget = (item: WidgetManagementType) =>
		selectWidget.find((i) => i.id === item.id);

	const handleSelectWidget = (widget: WidgetManagementType) => () => {
		if (selectWidget.includes(widget)) {
			const unSelectWidget = selectWidget.filter(
				(i) => i.id !== widget.id
			);
			setSelectWidget(unSelectWidget);
		} else {
			setSelectWidget([...selectWidget, widget]);
		}
	};

	const addWidget = () => {
		setModified(true);
		setWidgetList(selectWidget);
		onClose();
		onOpenSuccess();
	};

	return (
		<>
			<Box
				width="full"
				rounded="xl"
				bg="white"
				mb={8}
				boxShadow="sm"
			>
				<Flex
					p={8}
					alignItems="center"
					justify="space-between"
				>
					<Flex
						flexDir="column"
						gap={6}
					>
						<Flex
							flexDir="row"
							alignItems="center"
							gap={4}
						>
							<AiOutlineDrag
								size={28}
								color="#E55300"
							/>
							<p>
								<FormattedMessage id="drag" />
							</p>
						</Flex>
						<Flex
							flexDir="row"
							alignItems="center"
							gap={4}
						>
							<AiFillEyeInvisible
								size={28}
								color="#E55300"
							/>
							<p>
								<FormattedMessage id="hideNote" />
							</p>
						</Flex>
					</Flex>
					<Button
						id={`${id}-add-widget-btn`}
						variant="outline"
						onClick={onOpen}
						leftIcon={<FiPlus color="grey" />}
					>
						<FormattedMessage id="addWidget" />
					</Button>
				</Flex>
			</Box>
			<AddWidgetModal
				id={id}
				addWidget={addWidget}
				checkSelectWidget={checkSelectWidget}
				handleSelectWidget={handleSelectWidget}
				isOpen={isOpen}
				onClose={onClose}
			/>
			<SuccessModal
				id={`${id}-add-widget`}
				openSuccess={openSuccess}
				onCloseSuccess={onCloseSuccess}
			/>
		</>
	);
};

export default HowTo;
