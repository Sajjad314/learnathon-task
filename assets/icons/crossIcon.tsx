import * as React from "react";
const CrossIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.3332 13.3334L2.6665 2.66675M13.3332 2.66675L2.6665 13.3334"
      stroke="#212121"
      strokeLinecap="round"
    />
  </svg>
);
export default CrossIcon;
