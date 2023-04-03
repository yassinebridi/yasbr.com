import { getPages } from '@/adapters';
import { Home } from '@components';
import { globalRevalidateTiming } from '@utils';
import { notFound } from 'next/navigation';

export const revalidate = globalRevalidateTiming;
export default async function IndexPage() {
  const { homePage } = await getData();
  if (!homePage) return notFound();

  return (
    <div className="py-6">
      <Home page={homePage as any} />
    </div>
  );
}

async function getData() {
  const home = await getPages({
    filters: { slug: { eq: 'home' } },
  });

  return {
    homePage: home?.pages?.data[0].attributes,
  };
}
