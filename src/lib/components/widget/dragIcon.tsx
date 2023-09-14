import type { SVGProps } from 'react';

const DragIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke="#B3B3B3"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DragIcon;
