'use client';

import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { useMediaQuery, useLocalStorage } from 'usehooks-ts';

type ThemeContextType = {
  theme: 'light' | 'dark';
  handleToggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  handleToggleTheme: () => {},
});

export default function ThemeContextComp({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    initializeWithValue: true,
  });

  const [localStorageTheme, setLocalStorageTheme] = useLocalStorage<
    string | undefined
  >('theme', undefined, {
    initializeWithValue: true,
    deserializer: (value) => value,
    serializer: (value) => value ?? '',
  });

  const [theme, setTheme] = useState<ThemeContextType['theme']>(() => {
    if (localStorageTheme) {
      return localStorageTheme === 'dark' ? 'dark' : 'light';
    }
    return isDarkMode ? 'dark' : 'light';
  });

  useEffect(() => {
    if (localStorageTheme) {
      if (localStorageTheme === 'dark') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } else if (isDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [isDarkMode, localStorageTheme]);

  const handleToggleTheme: ThemeContextType['handleToggleTheme'] =
    useCallback(() => {
      const newMode = theme === 'light' ? 'dark' : 'light';
      setLocalStorageTheme(newMode);
      setTheme(newMode);
    }, [setLocalStorageTheme, theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      handleToggleTheme,
    }),
    [theme, handleToggleTheme]
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
