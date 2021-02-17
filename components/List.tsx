import React from 'react';

export interface Item {
  icon: string;
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
            <li key={i}>
              <span className="inline-block mr-2">{item.icon}</span>
              <span>{item.desc}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
