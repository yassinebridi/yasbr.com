import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 xl:px-6">{children}</div>
  );
};

export default Container;
