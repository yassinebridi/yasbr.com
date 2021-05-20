import format from 'comma-number';
import React from 'react';

export interface ViewCountProps {
  views: number;
}
const ViewCount: React.FC<ViewCountProps> = ({ views }) => {
  return <>{views ? format(views) : '0'} views</>;
};

export default ViewCount;
