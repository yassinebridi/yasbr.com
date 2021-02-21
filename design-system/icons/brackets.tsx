import React from 'react';

export interface BracketsIcon {
  cn: string;
}
const BracketsIcon: React.FC<BracketsIcon> = ({ cn }) => (
  <svg
    className={`${cn}`}
    xmlns="http://www.w3.org/2000/svg"
    height="64"
    viewBox="0 0 64 64"
    width="64"
  >
    <linearGradient
      id="a"
      gradientTransform="matrix(2500 0 0 -2250 1326969 2428888.25)"
      gradientUnits="userSpaceOnUse"
      x1="-530.7748"
      x2="-530.7748"
      y1="1079.506"
      y2="1079.4803"
    >
      <stop offset="0" stop-color="#29abe2" />
      <stop offset=".4757" stop-color="#28a9e1" />
      <stop offset=".6639" stop-color="#23a2dc" />
      <stop offset=".8012" stop-color="#1a96d4" />
      <stop offset=".913" stop-color="#0e85c9" />
      <stop offset="1" stop-color="#0071bc" />
    </linearGradient>
    <path
      d="m64 51.2c0 7-5.8 12.8-12.8 12.8h-38.4c-7 0-12.8-5.8-12.8-12.8v-38.4c0-7 5.8-12.8 12.8-12.8h38.4c7 0 12.8 5.8 12.8 12.8z"
      fill="#115a91"
    />
    <path
      d="m51.2 7c3.2 0 5.8 2.6 5.8 5.8v32c0 3.2-2.6 5.8-5.8 5.8h-38.4c-3.2 0-5.8-2.6-5.8-5.8v-32c0-3.2 2.6-5.8 5.8-5.8z"
      fill="#fff"
    />
    <path
      d="m51.2 7c3.2 0 5.8 2.6 5.8 5.8v32c0 3.2-2.6 5.8-5.8 5.8h-38.4c-3.2 0-5.8-2.6-5.8-5.8v-32c0-3.2 2.6-5.8 5.8-5.8zm0-7h-38.4c-7 0-12.8 5.8-12.8 12.8v32c0 7 5.8 12.8 12.8 12.8h38.4c7 0 12.8-5.8 12.8-12.8v-32c0-7-5.8-12.8-12.8-12.8z"
      fill="#115a91"
    />
    <g fill="#4d4d4d">
      <path d="m49.9 13.4v30.7h-16v-7.7h9v-16h-9v-7z" />
      <path d="m30.1 13.4v7h-9v16h9v7.7h-16v-30.7z" />
    </g>
  </svg>
);

export default BracketsIcon;
