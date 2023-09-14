import { Box, Button } from '@chakra-ui/react';
// import { FiTrash2 } from 'react-icons/fi';
import { AiFillEyeInvisible, AiOutlineDrag } from 'react-icons/ai';
import { useIntl } from 'react-intl';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import WidgetWrapper from '../shared/widgets/WidgetWrapper';
import { listWidgetComponent } from 'lib/constants/widget';
import type { WidgetManagementType } from 'lib/services/api/widget/getWidget/types';

type SortableProps = {
	value: WidgetManagementType;
	edit: boolean;
	selectWidget: (value: WidgetManagementType) => () => void;
	id?: string;
};

type DragItemProps = {
	id?: string;
};

const DragItem = SortableHandle<DragItemProps>(({ id }: DragItemProps) => (
	<Box
		id={id}
		cursor="grab"
	>
		<AiOutlineDrag
			size={28}
			color="#E55300"
		/>
	</Box>
));

const SortableWidget = SortableElement<SortableProps>(
	({ value, edit, selectWidget, id }: SortableProps) => {
		const intl = useIntl();
		const widget = listWidgetComponent[value.id];
		if (widget?.title == null || widget?.href == null) {
			return <Box key={value?.id}>{widget?.component}</Box>;
		}
		return (
			<WidgetWrapper
				id={`${id}-sortable-widget`}
				key={value.id}
				subtitle={widget.subtitle ? widget.subtitle : ''}
				title={intl.formatMessage({
					id: widget.title,
				})}
				href={!edit ? widget.href : undefined}
				hasSeeMore={widget.hasSeeMore}
				dndComponent={
					edit && (
						<>
							<DragItem id={`${id}-sortable-widget-drag-btn`} />
							<Button
								id={`${id}-sortable-widget-hide-btn`}
								variant="ghost"
								onClick={selectWidget(value)}
							>
								<AiFillEyeInvisible
									size={28}
									color="#E55300"
								/>
							</Button>
						</>
					)
				}
			>
				{widget?.component}
			</WidgetWrapper>
		);
	}
);

export default SortableWidget;
