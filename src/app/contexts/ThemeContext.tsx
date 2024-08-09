'use client';

import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { useMediaQuery } from 'usehooks-ts';

type ThemeContextType = {
  theme: 'light' | 'dark';
  handleSwitchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  handleSwitchTheme: () => {},
});

export default function ThemeContextComp({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    initializeWithValue: true,
  });

  const [theme, setTheme] = useState<ThemeContextType['theme']>(() => {
    if (typeof window !== 'undefined') {
      const localStorageTheme = window.localStorage.getItem('theme');
      if (localStorageTheme) {
        return localStorageTheme === 'dark' ? 'dark' : 'light';
      }
    }
    return isDarkMode ? 'dark' : 'light';
  });

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem('theme');

    // if (localStorageTheme) {
    //   if (localStorageTheme === 'dark') {
    //     setTheme('dark');
    //   } else {
    //     setTheme('light');
    //   }
    // } else if (isDarkMode) {
    //   setTheme('dark');
    // } else {
    //   setTheme('light');
    // }
    if (!localStorageTheme) {
      if (isDarkMode) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  }, [isDarkMode]);

  const handleSwitchTheme: ThemeContextType['handleSwitchTheme'] =
    useCallback(() => {
      const newMode = theme === 'light' ? 'dark' : 'light';
      window.localStorage.setItem('theme', newMode);
      setTheme(newMode);
    }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      handleSwitchTheme,
    }),
    [theme, handleSwitchTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {theme === 'dark' ? (
        <style jsx global>{`
          html {
            color-scheme: dark;
          }
        `}</style>
      ) : (
        <style jsx global>{`
          html {
            color-scheme: light;
          }
        `}</style>
      )}
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook that shorthands the context!
export function useTheme() {
  return useContext(ThemeContext);
}
