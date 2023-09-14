import {
	StepOneUser,
	StepTwoUser,
	StepThreeUser,
	StepFourUser,
} from 'lib/components/userManagement/StepsNavigation';

type stepsProps = {
	id?: string;
};

export const steps = ({ id }: stepsProps) => [
	{
		label: '1',
		content: <StepOneUser id={id} />,
	},
	{
		label: '2',
		content: <StepTwoUser id={id} />,
	},
	{
		label: '3',
		content: <StepThreeUser id={id} />,
	},
	{
		label: '4',
		content: <StepFourUser id={id} />,
	},
];
