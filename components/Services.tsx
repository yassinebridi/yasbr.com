import { servicesItems, ServicesType } from '@data';
import clsx from 'clsx';
import React from 'react';

export interface ServicesProps {}
const Services: React.FC<ServicesProps> = () => {
  return (
    <div className="py-16">
      <div className="flex items-center max-w-4xl mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Services</h3>
            <h2 id="services" className="text-3xl font-extrabold">
              <a href="#services" title="services" className="ringify">
                What i offer
              </a>
            </h2>
          </div>

          <div className="mt-12">
            <ul className="grid grid-cols-3 gap-8">
              {servicesItems.map((item, i) => {
                return <ServiceCard key={i} item={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

export interface ServiceCardProps {
  item: ServicesType;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <li
      className={clsx(
        'relative flex flex-col p-6 border-2 border-dashed border-primary-300'
      )}
    >
      <span className="absolute -top-6">
        {typeof item.icon === 'string'
          ? item.icon
          : React.createElement(item.icon, {
              className:
                'w-12 h-12 p-3 text-white rounded-full bg-primary-400 group-hover:bg-white group-hover:text-primary-400 group-hover:shadow-md',
            })}
      </span>
      <span className="mt-3 font-extrabold text-gray-900 text-md group-hover:text-white">
        {item.title}
      </span>
      <span className="mt-2 text-sm text-gray-800 group-hover:text-white">
        {item.desc}
      </span>
    </li>
  );
};
