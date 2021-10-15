import React from 'react';

const MicrosoftSVG = ({
  color,
  size,
}: {
  color: string;
  size: number;
}): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.967392 0.432434H11.4459V10.911H0.967392V0.432434ZM12.3639 0.432434H22.8424V10.911H12.3639V0.432434ZM0.967392 11.8289H11.4459V22.3074H0.967392V11.8289ZM12.3639 11.8289H22.8424V22.3074H12.3639V11.8289Z"
      fill={color}
    />
  </svg>
);

export default MicrosoftSVG;
