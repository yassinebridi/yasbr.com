import { Notion } from '@components';
import React from 'react';
import { BlockMapType } from 'react-notion';

export interface HomeProps {
  blocks: BlockMapType;
}
const Home: React.FC<HomeProps> = ({ blocks }) => {
  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto">
      <Notion blocks={blocks} />
    </div>
  );
};

export default Home;
