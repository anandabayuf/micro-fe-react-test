import { useTour } from '@reactour/tour';
import * as React from 'react';
import shallow from 'zustand/shallow';

import { onBoardingSteps } from 'lib/components/sso/ConnectService/constants';
import { useChannels } from 'lib/components/sso/shared/hooks';
import { useAuth } from 'lib/store/auth';

type useSSOTourProps = {
	id?: string;
};

export const useSSOTour = ({ id }: useSSOTourProps) => {
	const { setIsOpen, setSteps } = useTour();
	const [isFirstTimeLogin, setFirstTimeLogin] = useAuth(
		(state) => [state.firstTimeLogin, state.setFirstTimeLogin],
		shallow
	);
	const { data: connectedChannelListData } = useChannels();

	const handleCloseTour = React.useCallback(
		() => setIsOpen(false),
		[setIsOpen]
	);

	React.useEffect(() => {
		if (isFirstTimeLogin && connectedChannelListData?.length === 0) {
			setSteps(onBoardingSteps(handleCloseTour, id));
			setIsOpen(true);
			setFirstTimeLogin(false);
		}
	}, [
		connectedChannelListData?.length,
		handleCloseTour,
		isFirstTimeLogin,
		setFirstTimeLogin,
		setIsOpen,
		setSteps,
	]);

	return { handleCloseTour };
};
