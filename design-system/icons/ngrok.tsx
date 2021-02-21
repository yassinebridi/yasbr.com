import React from 'react';

export interface NgrokIcon {
  cn: string;
}
const NgrokIcon: React.FC<NgrokIcon> = ({ cn }) => (
  <svg
    className={`${cn} fill-current`}
    viewBox="-3 21 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M37.12,35.43c-0.62-0.73-1.32-1.36-2.07-1.92c-0.67-0.49-1.38-0.92-2.15-1.27c-0.37-0.17-0.76-0.31-1.17-0.44   c-0.59-0.19-1.23-0.32-1.89-0.43h-8.32l-5.5,6.27v-0.73V31.5H4.35v33.08h11.67V50.39v-8.13h1.62h3.25h5.95h0.14l0,0l0.91-0.02   v22.33h11.67V43.88c0-1.76-0.17-3.33-0.51-4.71C38.71,37.8,38.07,36.56,37.12,35.43z" />
  </svg>
);

export default NgrokIcon;
