import React from 'react';

export interface SublimeIcon {
  cn: string;
}
const SublimeIcon: React.FC<SublimeIcon> = ({ cn }) => (
  <svg
    className={`${cn}`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="26.6 26.6 446.8 446.7"
    width="2500"
    height="2499"
  >
    <linearGradient
      id="a"
      gradientUnits="userSpaceOnUse"
      x1="136.178"
      x2="372.681"
      y1="369.638"
      y2="287.81"
    >
      <stop offset=".233" stop-color="#f89822" />
      <stop offset="1" stop-color="#c27818" />
    </linearGradient>
    <path
      d="M456.1 473.3H43.9c-9.5 0-17.3-7.8-17.3-17.3V43.9c0-9.5 7.8-17.3 17.3-17.3h412.2c9.5 0 17.3 7.8 17.3 17.3v412.2c-.1 9.5-7.8 17.2-17.3 17.2z"
      fill="#4d4d4e"
    />
    <path
      d="M129.6 161.5l233.8-74.2s16.6-8.7 12.6 7.4l.6 71.5s2.9 10.5-11.5 13.1l-95 29.7z"
      fill="#f89820"
    />
    <path
      d="M129.6 161.5s-9.2 2.2-6.5 17.9l-.5 68.9s-.8 8.7 15.7 12.2L370 335.1s7.8 3.1 6.9-6.5l.1-76.8s2.2-7.9-12.2-13.1L270.1 209z"
      fill="#f89820"
    />
    <path
      d="M231.7 290.5l-98.6 30.1s-11.9.4-10.5 22.7-.1 67.2-.1 67.2 1 8.3 12.4 3.5l233.8-74.6s8.3-2.1 1.3-4.4c-7-2.2-138.3-44.5-138.3-44.5z"
      fill="url(#a)"
    />
  </svg>
);

export default SublimeIcon;
