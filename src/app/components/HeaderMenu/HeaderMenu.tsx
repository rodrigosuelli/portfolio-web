import Link from 'next/link';
import classNames from 'classnames';
import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <header className={classNames(styles.headerMenu)}>
      <Link href="/">{'<RS />'}</Link>
      <h1>Header Menu</h1>
      <nav className={classNames(styles.headerLinks)}>
        <Link href="#Sobre">Sobre</Link>
        <Link href="#Habilidades">Habilidades</Link>
        <Link href="#Experiência">Experiência</Link>
        <Link href="#Contato">Contato</Link>
      </nav>
      <div className={classNames(styles.headerButtons)}>
        <div>Hamburguer Menu</div>
      </div>
    </header>
  );
}
