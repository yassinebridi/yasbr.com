import type { UsesContent } from '@/data/types';

export const usesContent: UsesContent = {
  title: 'uses',
  description:
    "I'm frequently asked about the things I use, so here's a complete list",
  categories: [
    {
      title: 'Preferred web stack',
      items: [
        { label: 'React/React Native' },
        { label: 'Next.js' },
        { label: 'Vercel' },
        { label: 'Node.js' },
        { label: 'NestJS' },
        { label: 'GraphQL' },
        { label: 'Tailwind CSS' },
      ],
    },
    {
      title: 'I also use',
      items: [
        { label: 'TypeScript' },
        { label: 'Prisma' },
        { label: 'PostgreSQL' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { label: 'Figma' },
        { label: 'Notion' },
        { label: 'Spotify' },
        { label: 'Ngrok' },
      ],
    },
    {
      title: 'Previous Editors',
      items: [
        { label: 'Sublime Text' },
        { label: 'Brackets' },
        { label: 'Atom' },
        { label: 'Visual Studio Code' },
      ],
    },
    {
      title: 'Current Editor Setup',
      items: [
        { label: 'VIM/Neovim/Lvim' },
        { label: 'JetBrains Mono Font' },
        { label: 'GruvBox Theme' },
      ],
    },
  ],
};
