export interface ProjectItem {
  name: string;
  desc: string;
  url: string;
  image: string;
}

export const openSourceProjects: ProjectItem[] = [
  {
    name: 'tailwind-direction',
    desc: 'Tailwind bi-directionality plugin',
    url: 'https://github.com/yassinebridi/tailwind-direction',
    image: '/static/images/tailwind-direction.gif',
  },
  {
    name: 'next-direction',
    desc: 'Next.js bi-directionality package',
    url: 'https://github.com/yassinebridi/next-direction',
    image: '/static/images/next-direction.gif',
  },
  {
    name: 'vim-purpura',
    desc: 'A bold purple colorscheme for vim',
    url: 'https://github.com/yassinebridi/vim-purpura',
    image: '/static/images/vim-purpura.jpg',
  },
  {
    name: 'tmux-purpura',
    desc: 'A minimal purple theme for tmux',
    url: 'https://github.com/yassinebridi/tmux-purpura',
    image: '/static/images/tmux-purpura.jpg',
  },
];