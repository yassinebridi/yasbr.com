import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React from 'react';

export interface ThemeChangerProps {}
const ThemeChanger: React.FC<ThemeChangerProps> = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className={clsx('p-2 py-1 leading-none rounded-none ringify')}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle color mode"
      title="Toggle color mode"
    >
      {theme === 'dark' ? (
        <SunIcon
          width="22px"
          height="22px"
          className="stroke-current"
          aria-hidden="true"
        />
      ) : (
        <MoonIcon
          width="22px"
          height="22px"
          className="fill-current"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeChanger;
