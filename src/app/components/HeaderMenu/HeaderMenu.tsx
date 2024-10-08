'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu } from 'lucide-react';
import Typography from '../Typography/Typography';
import IconButton from '../IconButton/IconButton';

/**
 * Import CSS files in the correct order:
 * The last imported file has higher specificity and will override previous styles.
 * Ensure styles that need to take precedence are imported last.
 */
import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={classNames(styles.headerMenu)}>
      <Link className={classNames(styles.logo)} href="/">
        <Typography style={{ fontWeight: 700 }} variant="heading3">
          {'<RS />'}
        </Typography>
      </Link>
      <IconButton className={classNames(styles.hamburguerBtn)} size="md">
        <Menu />
      </IconButton>

      <div className={classNames(styles.navContainer)}>
        <nav className={classNames(styles.headerLinks)}>
          <Link href="#Sobre">Sobre</Link>
          <Link href="#Habilidades">Habilidades</Link>
          <Link href="#Experiência">Experiência</Link>
          <Link href="#Contato">Contato</Link>
        </nav>
        <div className={classNames(styles.divider)}></div>
        <div className={classNames(styles.headerButtons)}>
          {!mounted ? (
            <button className={classNames(styles.btnBaixarCv)} type="button">
              Light Mode
            </button>
          ) : (
            <button
              onClick={handleToggleTheme}
              className={classNames(styles.btnBaixarCv)}
              type="button"
            >
              {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </button>
          )}
          <button className={classNames(styles.btnBaixarCv)} type="button">
            Baixar CV
          </button>
        </div>
      </div>
    </header>
  );
}
