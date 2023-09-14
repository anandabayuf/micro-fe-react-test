const GridIcon = () => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <path
      d="M10 3H3v7h7V3Z"
      stroke="#E55300"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 3h-7v7h7V3Z"
      stroke="#067"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 14h-7v7h7v-7Z"
      stroke="#E55300"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14H3v7h7v-7Z"
      stroke="#067"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GridIcon;
