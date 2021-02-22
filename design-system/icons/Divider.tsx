import React from 'react';

export interface DividerProps {}
const Divider: React.FC<DividerProps> = () => {
  return (
    <>
      <hr className="my-12 border-none divider" />
      <style jsx>
        {`
          .divider {
            height: 1.5px;
            background-color: #111;
          }
        `}
      </style>
    </>
  );
};

export default Divider;
