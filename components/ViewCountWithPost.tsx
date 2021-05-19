import useSWR from 'swr';
import format from 'comma-number';
import React from 'react';
import { fetcher } from '@lib';

export interface ViewCountWithPostProps {
  slug: string;
}
const ViewCountWithPost: React.FC<ViewCountWithPostProps> = ({ slug }) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  React.useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });

    registerView();
  }, [slug]);

  return <>{views ? format(views) : '–––'} views</>;
};

export default ViewCountWithPost;
