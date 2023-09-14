import { lazy } from 'react';
import type { PathRouteProps } from 'react-router-dom';

import MyApprovalDetail from 'lib/pages/my-approval/detail';
import AdjustWidget from 'lib/pages/widget';
//@ts-ignore
import UserManagement from 'usermanagement/user-management';

const Page404 = lazy(() => import('lib/pages/404'));
const HomePage = lazy(() => import('lib/pages/home'));
const DepositPage = lazy(() => import('lib/pages/deposit'));
const LoanPage = lazy(() => import('lib/pages/loan'));
const CashFlowPage = lazy(() => import('lib/pages/cashflow'));
const Calendar = lazy(() => import('lib/pages/calendar'));
const LoginPage = lazy(() => import('lib/pages/login'));
const ForgotPasswordPage = lazy(() => import('lib/pages/forgot-password'));
const ChangePasswordPage = lazy(() => import('lib/pages/change-password'));
// const UserManagement = lazy(() => import('lib/pages/user-management'));
const MyApproval = lazy(() => import('lib/pages/my-approval'));
const OtherBankAccountPage = lazy(() => import('lib/pages/OtherBankAccount'));
const Kurs = lazy(() => import('lib/pages/kurs'));
const MultiBankCashFlowPage = lazy(() => import('lib/pages/MultiBankCashFlow'));
const AggregateBank = lazy(() => import('lib/pages/aggregate-bank'));

interface RoutePropsInterface extends PathRouteProps {
	layout?: 'landing' | 'dashboard';
	isRestricted?: boolean;
}

export const routes: Array<RoutePropsInterface> = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
		layout: 'landing',
		isRestricted: true,
	},
	{
		path: '/forgot-password',
		element: <ForgotPasswordPage />,
		layout: 'landing',
		isRestricted: true,
	},
	{
		path: '/change-password',
		element: <ChangePasswordPage />,
	},
	{
		path: '/deposit',
		element: <DepositPage />,
	},
	{
		path: '/cashflow',
		element: <CashFlowPage />,
	},
	{
		path: '/loan',
		element: <LoanPage />,
	},
	{
		path: '/calendar',
		element: <Calendar />,
	},
	{
		path: '/user-management',
		element: <UserManagement />,
	},
	{
		path: '/my-approval',
		element: <MyApproval />,
	},
	{
		path: '/my-approval/:id',
		element: <MyApprovalDetail />,
	},
	{
		path: '/widget-settings',
		element: <AdjustWidget />,
	},
	{
		path: '/other-bank-account',
		element: <OtherBankAccountPage />,
	},
	{
		path: '/kurs',
		element: <Kurs />,
	},
	{
		path: '/aggregate-bank',
		element: <AggregateBank />,
	},
	{
		path: '/multi-bank-cash-flow',
		element: <MultiBankCashFlowPage />,
	},
	{
		path: '*',
		element: <Page404 />,
	},
];
