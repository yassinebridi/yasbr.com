import { cloudinaryLoader, ServiceType } from '@utils';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export interface ServicesProps {
  items: ServiceType[];
}
const Services: React.FC<ServicesProps> = ({ items }) => {
  return (
    <div className="py-16">
      <div className="flex items-center max-w-4xl mx-auto">
        <div className="w-full">
          <div className="font-normal text-center">
            <h3 className="uppercase text-md text-primary-500">Services</h3>
            <h2 id="services" className="text-3xl font-extrabold">
              <a href="#services" title="services" className="ringify">
                What I offer
              </a>
            </h2>
          </div>

          <div className="mt-12">
            <ul className="grid grid-cols-3 gap-8">
              {items.map((item, i) => {
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
  item: ServiceType;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  return (
    <li
      className={clsx(
        'relative flex flex-col p-6 border-2 border-dashed border-primary-300'
      )}
    >
      <span className="absolute -top-6">
        <div className="w-12 h-12 p-3 text-white rounded-full bg-primary-100 group-hover:bg-white group-hover:text-primary-400 group-hover:shadow-md">
          <Image
            alt={item.Title}
            src={item.Icon[0].rawUrl}
            loader={cloudinaryLoader}
            width={23}
            height={23}
          />
        </div>
      </span>
      <span className="mt-3 font-extrabold text-gray-900 text-md group-hover:text-white">
        {item.Title}
      </span>
      <span className="mt-2 text-sm text-gray-800 group-hover:text-white">
        {item.Desc}
      </span>
    </li>
  );
};
