import BlogSlug from '@components/blog/BlogPage';
import { posts } from '@/data';
import { hostname } from '@utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ParamsType {
  slug: string;
}

export default function BlogPage({ params }: { params: ParamsType }) {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) return notFound();
  return <BlogSlug post={post} />;
}

export function generateMetadata({ params }: { params: ParamsType }): Metadata {
  const post = posts.find((post) => post.slug === params.slug);
  return {
    title: `${post?.title}`,
    description: `${post?.description}`,
    alternates: {
      canonical: `${hostname}/blog/${post?.slug}`,
    },
  };
}

export function generateStaticParams(): ParamsType[] {
  return posts.map((post) => ({ slug: post.slug }));
}
