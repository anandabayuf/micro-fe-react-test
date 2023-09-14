import type { PlacementWithLogical } from '@chakra-ui/react';
import {
	Flex,
	Grid,
	Heading,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useBreakpointValue,
	Box,
} from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import {
	FiBriefcase,
	FiMoreVertical,
	// FiSettings,
	FiUser,
	FiXCircle,
} from 'react-icons/fi';
import { useIntl } from 'react-intl';

import ConnectServiceWrapper from '../../ConnectService';
import type { ConnectedChannelEntry } from 'lib/services/api/cxo/channelportal/types';
import type { ChannelEntry } from 'lib/services/api/cxo/getChannelSelection/types';
import { changeIntoIdFormat } from 'lib/utils/id';

type ConnectedChannelMenu = {
	icon: IconType;
	title: string;
	onClick?: (id: string) => void;
};

type ConnectedChannelItemProps = {
	data: ConnectedChannelEntry[];
	channel: ChannelEntry;
	disabled: boolean;
	onClickRemove: (id: string) => void;
	onClickRedirect: (id: string) => void;
	id?: string;
};

const ConnectedChannelItem = ({
	data,
	channel,
	onClickRemove,
	onClickRedirect,
	disabled,
	id,
}: ConnectedChannelItemProps) => {
	const intl = useIntl();
	const menuPlacement: PlacementWithLogical =
		useBreakpointValue({
			base: 'bottom-end',
			md: 'bottom',
		}) ?? 'bottom';

	const handleClickRemove = (id: string) => {
		onClickRemove(id);
	};

	const handleClickRedirect = (id: string) => () => {
		if (!disabled) {
			onClickRedirect(id);
		}
	};

	const menuItems: Array<ConnectedChannelMenu> = [
		// TODO: handle settings redirect
		// {
		//   icon: FiSettings,
		//   title: 'Pengaturan',
		// },
		{
			icon: FiXCircle,
			title: intl.formatMessage({ id: 'unlinkChannel' }),
			onClick: handleClickRemove,
		},
	];

	return (
		<Grid maxWidth="full">
			<Grid gap={3}>
				<Flex
					alignItems="center"
					justify="space-between"
					id={`${id}-${changeIntoIdFormat(channel.name)}`}
				>
					<Heading fontSize="sm">{channel?.name}</Heading>
					<ConnectServiceWrapper
						id={`${changeIntoIdFormat(channel.name)}`}
						channel={channel}
						disabled={disabled}
					/>
				</Flex>

				{data?.map((entry) => (
					<Box
						fontSize="xs"
						fontWeight="medium"
						cursor={disabled ? 'not-allowed' : 'pointer'}
						key={entry.id}
						borderRadius={16}
						borderWidth={1}
						borderColor={disabled ? 'gray.200' : 'brand.100'}
						boxShadow="0px 8px 16px -8px #FCECE2"
						bg={disabled ? 'gray.200' : 'white'}
					>
						<Flex
							gap={5}
							p={3}
						>
							{channel?.needcorporate && (
								<Flex
									alignItems="center"
									gap={2}
									maxWidth={{ base: '45%', md: '100px' }}
									onClick={handleClickRedirect(entry.id)}
								>
									<Icon
										as={FiBriefcase}
										color={
											disabled ? 'gray.400' : 'orange.100'
										}
									/>
									<Text
										textOverflow="ellipsis"
										whiteSpace="nowrap"
										overflow="hidden"
									>
										{entry.corporateId}
									</Text>
								</Flex>
							)}
							{entry.userId && (
								<Flex
									alignItems="center"
									gap={2}
									overflow="hidden"
									maxWidth={{ base: '45%', md: '100px' }}
									onClick={handleClickRedirect(entry.id)}
								>
									<Icon
										as={FiUser}
										color={
											disabled ? 'gray.400' : 'orange.100'
										}
									/>
									<Text
										textOverflow="ellipsis"
										whiteSpace="nowrap"
										overflow="hidden"
									>
										{entry.userId}
									</Text>
								</Flex>
							)}
							<Menu
								id={`${id}-${changeIntoIdFormat(
									channel.name
								)}-menu`}
								placement={menuPlacement}
								size="sm"
							>
								<MenuButton
									id={`${id}-${changeIntoIdFormat(
										channel.name
									)}-menu-btn`}
									marginLeft="auto"
									as={IconButton}
									disabled={disabled}
									cursor={
										disabled ? 'not-allowed' : 'pointer'
									}
									variant="ghost"
									justifyContent="flex-end"
									icon={<FiMoreVertical />}
									pr={2.5}
									_hover={{
										backgroundColor: 'none',
									}}
									_active={{
										backgroundColor: 'none',
									}}
									_focus={{ backgroundColor: 'none' }}
									height={4}
									color={disabled ? 'gray.400' : 'orange.500'}
								/>
								<MenuList
									id={`${id}-${changeIntoIdFormat(
										channel.name
									)}-menu-list`}
									color="black"
									fontSize="sm"
									border="1px solid"
									borderColor={
										disabled ? 'gray.500' : 'orange.500'
									}
									boxShadow="0px 16px 32px -8px rgba(240, 141, 84, 0.4)"
									borderRadius={16}
									mr={2}
								>
									{menuItems.map((menuItem) => (
										<MenuItem
											id={`${id}-${changeIntoIdFormat(
												channel.name
											)}-menu-list-item-${changeIntoIdFormat(
												menuItem.title
											)}`}
											key={menuItem.title}
											gap={2}
											fontWeight="medium"
											onClick={menuItem.onClick?.bind(
												null,
												entry.id
											)}
											borderRadius={20}
											_hover={{
												backgroundColor: 'brand.100',
											}}
											_focus={{
												backgroundColor: 'brand.100',
											}}
										>
											<Icon
												as={menuItem.icon}
												color="orange.100"
											/>
											<Text>{menuItem.title}</Text>
										</MenuItem>
									))}
								</MenuList>
							</Menu>
						</Flex>
					</Box>
				))}
			</Grid>
		</Grid>
	);
};

export default ConnectedChannelItem;
