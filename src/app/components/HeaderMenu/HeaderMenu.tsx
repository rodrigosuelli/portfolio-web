'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import * as DrawerPrimitive from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Typography from '../Typography/Typography';
import IconButton from '../IconButton/IconButton';
import Button from '../Button/Button';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

/**
 * Import CSS files in the correct order:
 * The last imported file has higher specificity and will override previous styles.
 * Ensure styles that need to take precedence are imported last.
 */
import styles from './HeaderMenu.module.scss';

const CVLink =
  'https://drive.google.com/file/d/1RSKvhmEOuj1tvPEjeYzjpaZtiiMW2pCm/view?usp=drive_link';

function Logo() {
  return (
    <Typography style={{ fontWeight: 700 }} variant="heading3">
      {'<RS />'}
    </Typography>
  );
}

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={clsx(styles.headerMenu)}>
      <nav className={clsx(styles.navContainer)}>
        <Link className={clsx(styles.logo)} href="/">
          <Logo />
        </Link>

        <div className={clsx(styles.rightContainer)}>
          <div className={clsx(styles.headerLinks)}>
            <Link className={clsx(styles.link)} href="#Sobre">
              Sobre
            </Link>
            <Link className={clsx(styles.link)} href="#Habilidades">
              Habilidades
            </Link>
            <Link className={clsx(styles.link)} href="#Experiência">
              Experiência
            </Link>
            <Link className={clsx(styles.link)} href="#Contato">
              Contato
            </Link>
          </div>
          <div className={clsx(styles.divider)}></div>
          <div className={clsx(styles.headerButtons)}>
            <ThemeSwitcher />
            <Button asChild={true}>
              <Link href={CVLink} target="_blank">
                Baixar CV
              </Link>
            </Button>
          </div>
        </div>

        <DrawerPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
          <DrawerPrimitive.Trigger
            asChild
            className={clsx(styles.hamburguerBtn)}
          >
            <IconButton size="md">
              <MenuIcon />
            </IconButton>
          </DrawerPrimitive.Trigger>
          <DrawerPrimitive.Portal>
            <DrawerPrimitive.Overlay className={clsx(styles.sidebarOverlay)} />
            <DrawerPrimitive.Content className={clsx(styles.sidebar)}>
              <VisuallyHidden.Root>
                <DrawerPrimitive.Title>Menu Lateral</DrawerPrimitive.Title>
                <DrawerPrimitive.Description>
                  Menu De Navegação Lateral
                </DrawerPrimitive.Description>
              </VisuallyHidden.Root>
              <div className={clsx(styles.sidebarSecBrand)}>
                <Logo />
                <DrawerPrimitive.Close asChild>
                  <IconButton>
                    <XIcon />
                  </IconButton>
                </DrawerPrimitive.Close>
              </div>
              <div className={clsx(styles.sidebarSecLinks)}>
                <Link className={clsx(styles.link)} href="#Sobre">
                  Sobre
                </Link>
                <Link className={clsx(styles.link)} href="#Habilidades">
                  Habilidades
                </Link>
                <Link className={clsx(styles.link)} href="#Experiência">
                  Experiência
                </Link>
                <Link className={clsx(styles.link)} href="#Contato">
                  Contato
                </Link>
              </div>
              <div className={clsx(styles.sidebarSecTheme)}>
                <div className={clsx(styles.switchThemeRow)}>
                  <Typography variant="body2">Trocar Tema</Typography>
                  <ThemeSwitcher />
                </div>
                <Button asChild={true}>
                  <Link href={CVLink} target="_blank">
                    Baixar CV
                  </Link>
                </Button>
              </div>
            </DrawerPrimitive.Content>
          </DrawerPrimitive.Portal>
        </DrawerPrimitive.Root>
      </nav>
    </header>
  );
}
