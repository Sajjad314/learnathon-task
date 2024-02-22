import * as React from "react";
const LineSVG = (props: any) => (
  <svg
    width={205}
    height={1}
    viewBox="0 0 205 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line y1={0.5} x2={205} y2={0.5} stroke="#F8F7FF" />
  </svg>
);
export default LineSVG;
