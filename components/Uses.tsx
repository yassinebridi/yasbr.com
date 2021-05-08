import { List } from '@components';
import { webStackItems, toolsItems } from '@data';
import React from 'react';

export interface UsesProps {}
const Uses: React.FC<UsesProps> = () => {
  return (
    <div className="text-xl font-normal text-gray-400">
      <h2 id="uses" className="pt-2 text-3xl font-bold text-white">
        <a href="#uses" title="uses">
          Uses
        </a>
      </h2>

      <p className="mt-2">
        I'm frequently asked about the things I use, so here's a complete list!
      </p>

      <div className="mt-6">
        <List title="Preferred web stack:" items={webStackItems} />
      </div>

      {/* <div className="mt-6"> */}
      {/*   <List title="I also use:" items={alsoUseItems} /> */}
      {/* </div> */}

      <div className="mt-6">
        <List title="Tools:" items={toolsItems} />
      </div>
    </div>
  );
};

export default Uses;
