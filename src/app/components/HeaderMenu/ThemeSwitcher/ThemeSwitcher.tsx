'use client';

import { useEffect, useState } from 'react';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import IconButton from '../../IconButton/IconButton';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
      {!mounted ? (
        <IconButton size="md" type="button">
          <MoonStarIcon />
        </IconButton>
      ) : (
        <IconButton size="md" onClick={handleToggleTheme} type="button">
          {theme === 'dark' ? <SunIcon /> : <MoonStarIcon />}
        </IconButton>
      )}
    </>
  );
}
