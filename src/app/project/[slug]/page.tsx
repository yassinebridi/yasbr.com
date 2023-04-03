import { getPortfolioPage } from '@adapters';
import ProjectSlug from '@components/project/ProjectPage';
import { hostname } from '@utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }: { params: ParamsType }) {
  const { project } = await getData(params);
  if (!project) return notFound();
  return <ProjectSlug project={project as any} />;
}

export async function generateMetadata({
  params,
}: {
  params: ParamsType;
}): Promise<Metadata> {
  const portfolio = await getPortfolioPage();
  const project = portfolio?.portfolio?.data?.attributes?.Projects?.find(
    (project) => project?.slug === params?.slug
  );
  return {
    title: `${project?.name} Project`,
    description: `Project details of ${project?.name}`,
    alternates: {
      canonical: `${hostname}/project/${project?.slug}`,
    },
  };
}
export async function generateStaticParams(): Promise<ParamsType[]> {
  const paths: ParamsType[] = [];
  const portfolio = await getPortfolioPage();
  const projects = portfolio?.portfolio?.data?.attributes?.Projects;
  projects?.map((project) => {
    paths.push({ slug: project?.slug! });
  });

  return paths;
}
interface ParamsType {
  slug: string;
}
async function getData(params: ParamsType) {
  const portfolio = await getPortfolioPage();
  const project = portfolio?.portfolio?.data?.attributes?.Projects?.find(
    (project) => project?.slug === params?.slug
  );

  return {
    project,
  };
}
