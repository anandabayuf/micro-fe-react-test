import {
	StepOneRole,
	StepTwoRole,
} from 'lib/components/userManagement/StepsNavigation';

type stepsProps = {
	id?: string;
};

export const steps = ({ id }: stepsProps) => [
	{
		label: '1',
		content: <StepOneRole id={id} />,
	},
	{
		label: '2',
		content: <StepTwoRole id={id} />,
	},
];
