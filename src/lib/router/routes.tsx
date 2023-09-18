import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

const ChangePasswordPage = lazy(() => import('lib/pages/change-password'));

interface RoutePropsInterface extends PathRouteProps {
	layout?: 'landing' | 'dashboard';
	isRestricted?: boolean;
}

export const routes: Array<RoutePropsInterface> = [
	{
		path: '/',
		element: <ChangePasswordPage />,
	},
	{
		path: '/change-password',
		element: <ChangePasswordPage />,
	},
];
