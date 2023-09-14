import { Stack, Text, Box } from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';

import type { OldValueUser } from 'lib/services/api/myApproval/getMyApprovalDetail/types';
import { NewValueUser } from '../../../services/api/myApproval/getMyApprovalDetail/types';

interface DetailMyApprovalUserProps {
	newValue?: NewValueUser;
	oldValue?: OldValueUser;
}

const DetailMyApprovalGroup = ({
	newValue,
	oldValue,
}: DetailMyApprovalUserProps) => {
	const newValueLength = newValue?.menuList ? newValue?.menuList?.length : 0;

	return (
		<Stack
			direction="column"
			spacing={6}
		>
			<Stack>
				<Text color="gray.400">
					<FormattedMessage id="group" />
				</Text>
				<Text fontWeight="black">
					{newValue?.name || oldValue?.name}
				</Text>
			</Stack>
			{newValueLength > 0 && (
				<Box>
					<Text color="gray.400">
						<FormattedMessage id="access" />
					</Text>
					<Stack>
						{newValue?.menuList?.map((menu) => (
							<Box
								key={menu.id}
								backgroundColor="white"
								color="orange.500"
								borderWidth={1}
								borderColor="orange.500"
								borderRadius={4}
								mr={1}
								px={2}
								py={1}
								my={1}
							>
								<Text fontSize={12}>
									{menu.name}
									{menu.viewOnly && ' (Read-Only)'}
								</Text>
							</Box>
						))}
					</Stack>
				</Box>
			)}
		</Stack>
	);
};

export default DetailMyApprovalGroup;
