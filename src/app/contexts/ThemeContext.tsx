'use client';

import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useMemo,
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
    initializeWithValue: false,
  });
  // let localStorageTheme;
  // if (typeof window !== 'undefined') {
  //   localStorageTheme =
  //     window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  // }

  const [theme, setTheme] = useState<ThemeContextType['theme']>(() => {
    // if (typeof window !== 'undefined') {
    const localStorageTheme = window.localStorage.getItem('theme');
    if (localStorageTheme) {
      return localStorageTheme === 'dark' ? 'dark' : 'light';
    }
    // }
    return isDarkMode ? 'dark' : 'light';
  });
  // const [theme, setTheme] = useState<'light' | 'dark'>(
  //   typeof window !== 'undefined' &&
  //     window.localStorage.getItem('theme') === 'dark'
  //     ? 'dark'
  //     : 'light'
  // );

  console.log(theme);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storageTheme = window.localStorage.getItem('theme');
  //     setTheme(storageTheme === 'dark' ? 'dark' : 'light');
  //   }
  // }, []);

  // const currentTheme = isDarkMode || theme === 'dark' ? 'dark' : 'light';

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
      {/* {isDarkMode ? (
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
      )} */}
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
      {/* {currentTheme === 'dark' ? (
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
      )} */}
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook that shorthands the context!
export function useTheme() {
  return useContext(ThemeContext);
}
