import React from 'react';

export interface DividerProps {}
const Divider: React.FC<DividerProps> = () => {
  return (
    <>
      <hr className="border-none divider" />
      <style jsx>
        {`
          .divider {
            height: 1.5px;
            background-color: #111;
            margin-top: 3rem;
            margin-bottom: 3rem;
          }
        `}
      </style>
    </>
  );
};

export default Divider;
