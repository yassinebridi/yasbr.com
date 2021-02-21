import React from 'react';

export interface Item {
  icon: any;
  desc: string;
}
interface ListProps {
  title: string;
  items: Item[];
}
const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <div>
      <p className="">{title}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item, i) => {
          return (
            <li key={i} className="flex items-center">
              <span className="inline-block mr-2">
                {typeof item.icon === 'string'
                  ? item.icon
                  : React.createElement(item.icon, { cn: 'h-5 w-5' })}
              </span>
              <span>{item.desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
