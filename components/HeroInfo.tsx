import {
  BriefcaseIcon,
  CheckCircleIcon,
  SupportIcon,
} from '@heroicons/react/outline';
import React from 'react';

export interface HeroInfoProps {}
const HeroInfo: React.FC<HeroInfoProps> = () => {
  return (
    <div className="flex justify-center">
      <div className="absolute py-10 bg-white rounded-full shadow-2xl -bottom-16">
        <div className="grid grid-cols-3 divide-x">
          <InfoCard
            title="5 Years job"
            subtitle="Experience"
            icon={
              <BriefcaseIcon className="w-12 h-12 p-3 text-white rounded-full bg-primary-400" />
            }
          />
          <InfoCard
            title="20+ Projects"
            subtitle="Completed"
            icon={
              <CheckCircleIcon className="w-12 h-12 p-3 text-white rounded-full bg-primary-400" />
            }
          />
          <InfoCard
            title="Support"
            subtitle="Online 24/7"
            icon={
              <SupportIcon className="w-12 h-12 p-3 text-white rounded-full bg-primary-400" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;

export interface InfoCardProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex px-12 space-x-2">
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="font-bold text-gray-800 text-md">{title}</span>
        <span className="text-sm text-primary-500">{subtitle}</span>
      </div>
    </div>
  );
};
