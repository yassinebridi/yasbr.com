import { BlogPostCard } from '@components/blog/BlogCard';
import { posts } from '@/data';
import { hostname } from '@utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog Posts',
  alternates: {
    canonical: `${hostname}/blog`,
  },
};
export default function BlogPage() {
  return (
    <div className="max-w-xl py-3 mx-auto">
      <h2 className="text-3xl font-bold text-center">Blog</h2>
      <p className="px-4 mt-2 text-center dark:text-primary-300 text-primary-600">
        Check out my blog, where i write mostly about web and mobile
        development, startups, and life.
      </p>
      <div className="px-4 mt-8">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
