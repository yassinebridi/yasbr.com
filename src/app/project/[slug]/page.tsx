import ProjectSlug from '@components/project/ProjectPage';
import { projects } from '@/data';
import { hostname } from '@utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ParamsType {
  slug: string;
}

export default function ProjectPage({ params }: { params: ParamsType }) {
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) return notFound();
  return <ProjectSlug project={project} />;
}

export function generateMetadata({ params }: { params: ParamsType }): Metadata {
  const project = projects.find((project) => project.slug === params.slug);
  return {
    title: `${project?.name} Project`,
    description: `Project details of ${project?.name}`,
    alternates: {
      canonical: `${hostname}/project/${project?.slug}`,
    },
  };
}

export function generateStaticParams(): ParamsType[] {
  return projects.map((project) => ({ slug: project.slug }));
}
