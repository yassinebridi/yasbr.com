import useSWR from 'swr';
import format from 'comma-number';
import React from 'react';
import { fetcher } from '@lib';

export interface ViewCountProps {
  slug: string;
}
const ViewCount: React.FC<ViewCountProps> = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return <>${views ? format(views) : '–––'} views</>;
};

export default ViewCount;
