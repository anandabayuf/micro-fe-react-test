import { Divider, Grid, Link, VStack } from '@chakra-ui/react';

import { promotionsPath } from 'lib/constants/landing_routes';
import { promos } from 'lib/constants/promos';
import { changeIntoIdFormat } from 'lib/utils/id';

type LatestPromoListProps = {
	id?: string;
};

const LatestPromoList = ({ id }: LatestPromoListProps) => {
	return (
		<Grid gap={4}>
			{promos.map(({ title, slug }) => (
				<VStack alignItems="start">
					<Link
						id={`${id}-latest-promo-list-item-${changeIntoIdFormat(
							title
						)}-link`}
						textAlign="left"
						href={`${promotionsPath}/${slug}`}
						fontWeight="bold"
					>
						{title}
					</Link>
					<Divider
						height={2}
						borderColor="orange.100"
					/>
				</VStack>
			))}
		</Grid>
	);
};

export default LatestPromoList;
