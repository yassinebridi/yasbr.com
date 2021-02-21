import { Item } from '@components/List';
import AtomIcon from '@design-system/icons/atom';
import BracketsIcon from '@design-system/icons/brackets';
import GruvboxIcon from '@design-system/icons/gruvbox';
import JetbrainsIcon from '@design-system/icons/jetbrains';
import NvimIcon from '@design-system/icons/nvim';
import SublimeIcon from '@design-system/icons/sublime';
import VscodeIcon from '@design-system/icons/vscode';

export const prevItems: Item[] = [
  {
    desc: 'Sublime Text',
    icon: SublimeIcon,
  },
  {
    desc: 'Brackets',
    icon: BracketsIcon,
  },
  {
    desc: 'Atom',
    icon: AtomIcon,
  },
  {
    desc: 'Visual Studio Code',
    icon: VscodeIcon,
  },
];

export const nowItems: Item[] = [
  {
    desc: 'VIM/NVIM',
    icon: NvimIcon,
  },
  {
    desc: 'JetBrains Mono Font',
    icon: JetbrainsIcon,
  },
  {
    desc: 'GruvBox Theme',
    icon: GruvboxIcon,
  },
];
