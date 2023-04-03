import { getArticles, updateArticle } from '@adapters';
import BlogSlug from '@components/blog/BlogPage';
import { hostname } from '@utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function BlogPage({ params }: { params: ParamsType }) {
  const { post } = await getData(params);
  if (!post) return notFound();
  return <BlogSlug post={post as any} />;
}

export async function generateMetadata({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> {
  const posts = await getArticles({
    filters: { slug: { eq: params?.slug as string } },
  });

  const post = posts.articles?.data?.[0].attributes;
  return {
    title: `${post?.title}`,
    description: `${post?.desc}`,
    alternates: {
      canonical: `${hostname}/blog/${post?.slug}`,
    },
  };
}
export async function generateStaticParams(): Promise<ParamsType[]> {
  const paths: ParamsType[] = [];
  const articles = await getArticles();
  articles?.articles?.data.map((post) => {
    paths.push({ slug: post?.attributes?.slug! });
  });

  return paths;
}
interface ParamsType {
  slug: string;
}
async function getData(params: ParamsType) {
  const posts = await getArticles({
    filters: { slug: { eq: params?.slug as string } },
  });

  const post = posts.articles?.data?.[0].attributes;
  if (post) {
    await updateArticle({
      id: posts.articles?.data?.[0].id!,
      data: {
        views: post?.views! + 1,
      },
    });
  }

  return {
    post,
  };
}
