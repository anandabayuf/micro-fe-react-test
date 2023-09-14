import { Stack, SimpleGrid, Text } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import type {
	NewValueUser,
	OldValueUser,
} from 'lib/services/api/myApproval/getMyApprovalDetail/types';

interface DetailMyApprovalUserProps {
	newValue?: NewValueUser;
	oldValue?: OldValueUser;
}

const DetailMyApprovalUser = ({
	newValue,
	oldValue,
}: DetailMyApprovalUserProps) => {
	return (
		<Stack
			direction="column"
			w="full"
		>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="name" />
				</Text>
				<Text>{newValue?.name || oldValue?.name}</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="nik" />
				</Text>
				<Text>{newValue?.nik || oldValue?.nik}</Text>
			</SimpleGrid>
			{newValue?.identifier && (
				<SimpleGrid
					columns={2}
					gap={12}
				>
					<Text>
						<FormattedMessage id="userIdLoginLabel" />
					</Text>
					<Text>{newValue?.identifier}</Text>
				</SimpleGrid>
			)}
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="email" />
				</Text>
				<Text>{newValue?.email || oldValue?.email}</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="phone" />
				</Text>
				<Text>{newValue?.mobilePhone || oldValue?.mobilePhone}</Text>
			</SimpleGrid>
			<SimpleGrid
				columns={2}
				gap={12}
			>
				<Text>
					<FormattedMessage id="role" />
				</Text>
				<Text>{newValue?.role || oldValue?.role}</Text>
			</SimpleGrid>
		</Stack>
	);
};

export default DetailMyApprovalUser;
