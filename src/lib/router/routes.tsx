import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

const MyApproval = lazy(() => import('lib/pages/my-approval'));
const MyApprovalDetail = lazy(() => import('lib/pages/my-approval/detail'));

interface RoutePropsInterface extends PathRouteProps {
	layout?: 'landing' | 'dashboard';
	isRestricted?: boolean;
}

export const routes: Array<RoutePropsInterface> = [
	{
		path: '/',
		element: <MyApproval />,
	},
	{
		path: '/my-approval',
		element: <MyApproval />,
	},
	{
		path: '/my-approval/:id',
		element: <MyApprovalDetail />,
	},
];
