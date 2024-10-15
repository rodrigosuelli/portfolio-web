'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MenuIcon, MoonStarIcon, SunIcon } from 'lucide-react';
import Typography from '../Typography/Typography';
import IconButton from '../IconButton/IconButton';
import Button from '../Button/Button';

/**
 * Import CSS files in the correct order:
 * The last imported file has higher specificity and will override previous styles.
 * Ensure styles that need to take precedence are imported last.
 */
import styles from './HeaderMenu.module.scss';

const CVLink =
  'https://drive.google.com/file/d/1RSKvhmEOuj1tvPEjeYzjpaZtiiMW2pCm/view?usp=drive_link';

export default function HeaderMenu() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={classNames(styles.headerMenu)}>
      <nav className={classNames(styles.navContainer)}>
        <Link className={classNames(styles.logo)} href="/">
          <Typography style={{ fontWeight: 700 }} variant="heading3">
            {'<RS />'}
          </Typography>
        </Link>
        <IconButton className={classNames(styles.hamburguerBtn)} size="md">
          <MenuIcon />
        </IconButton>

        <div className={classNames(styles.rightContainer)}>
          <div className={classNames(styles.headerLinks)}>
            <Link className={classNames(styles.link)} href="#Sobre">
              Sobre
            </Link>
            <Link className={classNames(styles.link)} href="#Habilidades">
              Habilidades
            </Link>
            <Link className={classNames(styles.link)} href="#Experiência">
              Experiência
            </Link>
            <Link className={classNames(styles.link)} href="#Contato">
              Contato
            </Link>
          </div>
          <div className={classNames(styles.divider)}></div>
          <div className={classNames(styles.headerButtons)}>
            {!mounted ? (
              <IconButton
                size="md"
                className={classNames(styles.btnBaixarCv)}
                type="button"
              >
                <MoonStarIcon />
              </IconButton>
            ) : (
              <IconButton
                size="md"
                onClick={handleToggleTheme}
                className={classNames(styles.btnBaixarCv)}
                type="button"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonStarIcon />}
              </IconButton>
            )}
            <Button asChild={true}>
              <Link href={CVLink} target="_blank">
                Baixar CV
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
