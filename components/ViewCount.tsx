import { fetcher } from '@lib';
import format from 'comma-number';
import React from 'react';
import useSWR from 'swr';

export interface ViewCountProps {
  slug: string;
}
const ViewCount: React.FC<ViewCountProps> = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return <>{views ? format(views) : '–––'} views</>;
};

export default ViewCount;
