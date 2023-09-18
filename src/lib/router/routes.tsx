import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

const ForgotPasswordPage = lazy(() => import('lib/pages/forgot-password'));

interface RoutePropsInterface extends PathRouteProps {
	layout?: 'landing' | 'dashboard';
	isRestricted?: boolean;
}

export const routes: Array<RoutePropsInterface> = [
	{
		path: '/',
		element: <ForgotPasswordPage />,
	},
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
		layout: 'landing',
		isRestricted: true,
	},
];
