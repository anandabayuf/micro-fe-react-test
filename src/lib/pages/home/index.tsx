import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { arrayMoveImmutable } from 'array-move';
import { useState } from 'react';
import { FiEdit2, FiGrid } from 'react-icons/fi';
import { IoGridOutline } from 'react-icons/io5';
import { FormattedMessage } from 'react-intl';
import { SortableContainer } from 'react-sortable-hoc';

import HowTo from 'lib/components/home/howto';
import HideWidget from 'lib/components/widget/modal/hideWidget';
import SuccessModal from 'lib/components/widget/modal/success';
import SortableWidget from 'lib/components/widget/sortableWidget';
import updateWidget from 'lib/services/api/widget/addWidget';
import { useGetWidgetList } from 'lib/services/api/widget/getWidget';
import type { WidgetManagementType } from 'lib/services/api/widget/getWidget/types';
import { useAuth } from 'lib/store/auth';
import { useWidget } from 'lib/store/widgetSettings';
import { changeDotSeparatorIntoIdFormat } from 'lib/utils/id';

type SortEndProps = {
	oldIndex: number;
	newIndex: number;
};

const HomePage = () => {
	const {
		listWidget,
		setWidgetList,
		setOldListWidget,
		// oldListWidget,
		modified,
		setModified,
	} = useWidget();
	const { user } = useAuth();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [edit, setEdit] = useState<boolean>(false);
	const { data: widgetLists, mutate } = useGetWidgetList();
	const [selectWidget, setSelectWidget] =
		useState<WidgetManagementType | null>(null);
	const {
		isOpen: openSuccess,
		onOpen: onOpenSuccess,
		onClose: onCloseSuccess,
	} = useDisclosure();

	const onSelectWidget = (value: WidgetManagementType) => () => {
		onOpen();
		setSelectWidget(value);
	};

	const removeWidget = () => {
		setModified(true);
		if (listWidget) {
			const newList =
				listWidget.filter((_) => _.id !== selectWidget?.id) || [];
			setWidgetList(newList);
			onClose();
		}
	};

	const handleEdit = () => {
		setWidgetList(widgetLists?.content || []);
		setOldListWidget(widgetLists?.content || []);
		setEdit(!edit);
	};
	const SortableList = SortableContainer(() => (
		<SimpleGrid
			columns={{ base: 1, lg: 2 }}
			gap={6}
			_active={{ cursor: 'grabbing' }}
		>
			{!edit
				? //tmp
				  [...(widgetLists?.content || [])]?.map((widget, index) => {
						return (
							<SortableWidget
								id={`dashboard-widget-list-item-${changeDotSeparatorIntoIdFormat(
									widget.name
								)}`}
								index={index}
								key={`${widget.id}`}
								selectWidget={onSelectWidget}
								value={widget}
								edit={edit}
							/>
						);
				  })
				: listWidget.map((item, index) => {
						return (
							<SortableWidget
								id={`dashboard-widget-list-item-${changeDotSeparatorIntoIdFormat(
									item.name
								)}`}
								index={index}
								key={`${item.id}`}
								selectWidget={onSelectWidget}
								value={item}
								edit={edit}
							/>
						);
				  })}
		</SimpleGrid>
	));

	const onSortEnd = ({ oldIndex, newIndex }: SortEndProps) => {
		if (listWidget) {
			const moveList = arrayMoveImmutable(listWidget, oldIndex, newIndex);
			setWidgetList(moveList);
			setModified(true);
		}
	};

	const handleCancel = () => {
		if (modified) {
			mutate();
		}
		setModified(false);
		setEdit(false);
		setOldListWidget([]);
		onCloseSuccess();
	};

	const handleSave = () => {
		setModified(false);
		updateWidget({
			features: listWidget,
		}).then(() => {
			mutate();
			onOpenSuccess();
		});
	};

	return (
		<>
			<Container
				maxW="full"
				pt={{ base: '7', md: '10' }}
				px={{ base: 5, md: 12 }}
			>
				<Box mb={6}>
					<Flex
						flexDir="row"
						justifyContent="space-between"
					>
						<HStack>
							<Flex
								background="teal.500"
								width={42}
								height={42}
								borderRadius={100}
								justifyContent="center"
								alignItems="center"
							>
								<Icon
									as={FiGrid}
									color="white"
								/>
							</Flex>
							<Heading fontSize="2xl">Dashboard</Heading>
						</HStack>
						{/* TODO: Temporarily hide adjust widget  */}
						{edit ? (
							<Flex gap={6}>
								<Button
									id="dashboard-adjust-widget-back-to-dashboard-btn"
									variant="outline"
									onClick={handleCancel}
									w={{ base: 'full', md: '44' }}
								>
									<FormattedMessage id="backDashboard" />
								</Button>
								<Button
									id="dashboard-adjust-widget-save-settings-btn"
									variant="solid"
									onClick={handleSave}
									disabled={!modified}
									_disabled={{
										bg: 'gray.400',
									}}
									w={{ base: 'full', md: '44' }}
								>
									<FormattedMessage id="saveSettings" />
								</Button>
							</Flex>
						) : (
							user?.permissions?.includes(
								'MNU_CUST_HUB_DASHBOARD'
							) && (
								<Button
									id="dashboard-adjust-widget-btn"
									variant="outline"
									onClick={handleEdit}
									leftIcon={<FiEdit2 color="grey" />}
								>
									<FormattedMessage id="adjustWidget" />
								</Button>
							)
						)}
					</Flex>
				</Box>
				{edit && <HowTo id="dashboard-adjust-widget" />}
			</Container>
			{user?.permissions?.includes('MNU_CUST_HUB_DASHBOARD') && (
				<Container
					maxW="full"
					px={{ base: 0, md: 12 }}
					pb={24}
					position="relative"
				>
					{widgetLists?.content?.length || edit ? (
						<SortableList
							onSortEnd={onSortEnd}
							axis="xy"
							useDragHandle
						/>
					) : (
						<Flex
							w="full"
							textAlign="center"
							alignItems="center"
							gap={4}
							mt={{ base: 10, md: '52' }}
							flexDir="column"
						>
							<IoGridOutline
								size={50}
								color="#E55300"
							/>
							<Text w={{ base: 'full', md: 'sm' }}>
								Belum ada widget yang ditambahkan. Mohon
								tambahkan minimal satu widget untuk menyimpan
								pengaturan.
							</Text>
						</Flex>
					)}
				</Container>
			)}
			<HideWidget
				id="dashboard-adjust-widget"
				isOpen={isOpen}
				onClose={onClose}
				removeWidget={removeWidget}
				selectWidget={selectWidget}
			/>
			<SuccessModal
				id="dashboard-adjust-widget"
				openSuccess={openSuccess}
				onCloseSuccess={onCloseSuccess}
			/>
		</>
	);
};

export default HomePage;
