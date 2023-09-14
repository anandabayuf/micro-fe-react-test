import { Button, Flex, Grid, Spacer, Text } from '@chakra-ui/react';
import { FormattedMessage, useIntl } from 'react-intl';

import TableBox from 'lib/components/sso/shared/TableBox';
import type { RowItemInfoProps } from 'lib/components/sso/shared/TableBox/components/RowItemInfo';
import type { ConnectedChannelEntry } from 'lib/services/api/cxo/channelportal/types';

type ConfirmRemoveChannelFormProps = {
	data?: ConnectedChannelEntry;
	isLoading: boolean;
	onConfirmRemove: () => void;
	onClose: () => void;
	id?: string;
};

const ConfirmRemoveChannelForm = ({
	data,
	isLoading,
	onConfirmRemove,
	onClose,
	id,
}: ConfirmRemoveChannelFormProps) => {
	const intl = useIntl();
	if (!data) return null;

	const tableItems: Array<RowItemInfoProps> = [
		{
			label: intl.formatMessage({ id: 'service' }),
			value: data.channelName,
		},
		{
			label: intl.formatMessage({ id: 'corpIdLoginLabel' }),
			value: data.corporateId,
		},
		{
			label: intl.formatMessage({ id: 'userIdLoginLabel' }),
			value: data.userId,
		},
	];

	return (
		<Flex
			direction="column"
			gap={8}
			paddingBottom={6}
			paddingTop={{ base: 6, md: 0 }}
			flex={1}
		>
			<Grid gap={4}>
				<Text>
					<FormattedMessage id="unlinkChannelConfirm" />
				</Text>
				<TableBox items={tableItems} />
			</Grid>

			<Spacer />

			<Grid
				templateColumns="repeat(2, 1fr)"
				gap={4}
			>
				<Button
					id={`${id}-cancel-btn`}
					variant="outline"
					onClick={onClose}
					isDisabled={isLoading}
				>
					<FormattedMessage id="cancel" />
				</Button>
				<Button
					id={`${id}-unlink-btn`}
					variant="outline"
					onClick={onConfirmRemove}
					isLoading={isLoading}
					isDisabled={isLoading}
				>
					<FormattedMessage id="unlink" />
				</Button>
			</Grid>
		</Flex>
	);
};

export default ConfirmRemoveChannelForm;
