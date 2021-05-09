export interface ProjectItem {
  slug: string;
  name: string;
  desc: string;
  url: string;
  type: 'client' | 'os';
  image: string;
}

export const projectsItems: ProjectItem[] = [
  {
    slug: 'tailwind-direction',
    name: 'Tailwind Direction',
    desc: 'Tailwind bi-directionality plugin',
    url: 'https://github.com/yassinebridi/tailwind-direction',
    type: 'os',
    image: '/static/images/tailwind-direction.gif',
  },
  {
    slug: 'next-direction',
    name: 'Next Direction',
    desc: 'Next.js bi-directionality package',
    url: 'https://github.com/yassinebridi/next-direction',
    type: 'os',
    image: '/static/images/next-direction.gif',
  },
  {
    slug: 'vim-purpura',
    name: 'Vim Purpura',
    desc: 'A bold purple colorscheme for vim',
    url: 'https://github.com/yassinebridi/vim-purpura',
    type: 'os',
    image: '/static/images/vim-purpura.jpg',
  },
  {
    slug: 'tmux-purpura',
    name: 'Tmux Purpura',
    desc: 'A minimal purple theme for tmux',
    url: 'https://github.com/yassinebridi/tmux-purpura',
    type: 'os',
    image: '/static/images/tmux-purpura.jpg',
  },
];
