import { Button, Grid, Spacer, Text } from '@chakra-ui/react';
import { FormattedMessage, useIntl } from 'react-intl';
import shallow from 'zustand/shallow';

import TableBox from 'lib/components/sso/shared/TableBox';
import type { RowItemInfoProps } from 'lib/components/sso/shared/TableBox/components/RowItemInfo';
import { useConnectServiceFormStore } from 'lib/store/connectServiceForm';

type ConnectRequestSuccessProps = {
	onClose: () => void;
	id?: string;
};

const ConnectRequestSuccess = ({ onClose, id }: ConnectRequestSuccessProps) => {
	const intl = useIntl();
	const [stepTwo, stepThree] = useConnectServiceFormStore(
		(state) => [state.stepTwo, state.stepThree],
		shallow
	);

	const tableItems: Array<RowItemInfoProps> = [
		{
			label: intl.formatMessage({ id: 'service' }),
			value: stepTwo?.channel.name ?? '',
		},
		...(stepTwo?.channel.needcorporate
			? [
					{
						label: intl.formatMessage({ id: 'corpIdLoginLabel' }),
						value: stepThree?.corporateId ?? '',
					},
			  ]
			: []),
		{
			label: intl.formatMessage({ id: 'userIdLoginLabel' }),
			value: stepThree?.userId ?? '',
		},
	];

	return (
		<>
			<Grid gap={4}>
				<Text>
					<FormattedMessage id="connectServiceSuccess" />
				</Text>

				<TableBox items={tableItems} />
			</Grid>

			<Spacer />

			<Button
				id={`${id}-ok-btn`}
				color="white"
				onClick={onClose}
			>
				OK
			</Button>
		</>
	);
};

export default ConnectRequestSuccess;
