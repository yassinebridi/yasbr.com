'use client';

import { ArticleEntity } from '@adapters';
import { dateFormat } from '@utils/helpers';
import comma from 'comma-number';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export interface BlogPostCardProps {
  post: ArticleEntity;
}
export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const date = dateFormat(post?.attributes?.publishedAt);
  const router = useRouter();
  return (
    <div
      className="p-4 my-4 border-2 border-dashed cursor-pointer dark:border-primary-800 border-primary-200 dark:hover:bg-primary-800 hover:bg-primary-50"
      onClick={() => router.push(`/blog/${post?.attributes?.slug}`)}
    >
      <h3 className="mt-2">
        <Link
          href={`/blog/${post?.attributes?.slug}`}
          className="text-xl font-extrabold dark:text-primary-300 text-primary-800"
        >
          {post.attributes?.title}
        </Link>
      </h3>
      <p className="mt-1 text-primary-600 dark:text-primary-400">
        {post.attributes?.desc}
      </p>

      <div className="flex items-center justify-between mt-4 text-sm font-light">
        <p className="">{date}</p>
        <p>{comma(post.attributes?.views!)} Views</p>
      </div>
    </div>
  );
};
