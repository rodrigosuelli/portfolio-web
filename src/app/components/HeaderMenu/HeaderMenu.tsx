'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import * as DrawerPrimitive from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Typography from '../Typography/Typography';
import IconButton from '../IconButton/IconButton';
import Button from '../Button/Button';

/**
 * Import CSS files in the correct order:
 * The last imported file has higher specificity and will override previous styles.
 * Ensure styles that need to take precedence are imported last.
 */
import styles from './HeaderMenu.module.scss';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

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
    <header className={classNames(styles.headerMenu)}>
      <nav className={classNames(styles.navContainer)}>
        <Link className={classNames(styles.logo)} href="/">
          <Logo />
        </Link>

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
            className={classNames(styles.hamburguerBtn)}
          >
            <IconButton size="md">
              <MenuIcon />
            </IconButton>
          </DrawerPrimitive.Trigger>
          <DrawerPrimitive.Portal>
            <DrawerPrimitive.Overlay
              className={classNames(styles.sidebarOverlay)}
            />
            <DrawerPrimitive.Content className={classNames(styles.sidebar)}>
              <VisuallyHidden.Root>
                <DrawerPrimitive.Title>Menu Lateral</DrawerPrimitive.Title>
                <DrawerPrimitive.Description>
                  Menu De Navegação Lateral
                </DrawerPrimitive.Description>
              </VisuallyHidden.Root>
              <div className={classNames(styles.sidebarSecBrand)}>
                <Logo />
                <DrawerPrimitive.Close asChild>
                  <IconButton>
                    <XIcon />
                  </IconButton>
                </DrawerPrimitive.Close>
              </div>
              <div className={classNames(styles.sidebarSecLinks)}>
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
              <div className={classNames(styles.sidebarSecTheme)}>
                <div className={classNames(styles.switchThemeRow)}>
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
