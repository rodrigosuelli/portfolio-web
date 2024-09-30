'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu } from 'lucide-react';
import styles from './HeaderMenu.module.scss';
import Typography from '../Typography/Typography';

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
      <button className={classNames(styles.hamburguerBtn)} type="button">
        <Menu />
      </button>

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
