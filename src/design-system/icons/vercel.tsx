import React from 'react';

export interface VercelIcon {
  cn: string;
}
const VercelIcon: React.FC<VercelIcon> = ({ cn }) => (
  <svg
    className={`${cn}`}
    width="116"
    height="100"
    viewBox="0 0 116 100"
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0z" />
  </svg>
);

export default VercelIcon;
