import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Calendar = lazy(() => import('lib/pages/calendar'));

interface RoutePropsInterface extends PathRouteProps {
	layout?: 'landing' | 'dashboard';
	isRestricted?: boolean;
}

export const routes: Array<RoutePropsInterface> = [
	{
		path: '/',
		element: <Calendar />,
	},
	{
		path: '/calendar',
		element: <Calendar />,
	},
];
