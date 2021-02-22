import React from 'react';

export interface DividerProps {}
const Divider: React.FC<DividerProps> = () => {
  return (
    <hr
      className="my-12 border-none"
      style={{ height: '1.5px', backgroundColor: '#111' }}
    />
  );
};

export default Divider;
