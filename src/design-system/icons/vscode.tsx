import React from 'react';

export interface VscodeIcon {
  cn: string;
}
const VscodeIcon: React.FC<VscodeIcon> = ({ cn }) => (
  <svg
    className={`${cn}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 68 68"
    width="64"
    height="64"
    fill="#007acc"
  >
    <path d="M48 0v55L0 47.84 48 64l16-6.66V6.65zM31.2 9.36L16.5 23.9l-8.85-6.67L4 18.45l9 8.9-9 8.9 3.65 1.22 8.85-6.67 14.7 14.53L40 41.6V13.1zm0 10.37V35l-10.1-7.65z" />
  </svg>
);

export default VscodeIcon;
