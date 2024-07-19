import Link from 'next/link';
import classNames from 'classnames';
import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <header className={classNames(styles.headerMenu)}>
      <Link className={classNames(styles.logo)} href="/">
        {'<RS />'}
      </Link>
      <nav className={classNames(styles.headerLinks)}>
        <Link href="#Sobre">Sobre</Link>
        <Link href="#Habilidades">Habilidades</Link>
        <Link href="#Experiência">Experiência</Link>
        <Link href="#Contato">Contato</Link>
      </nav>
      <div className={classNames(styles.headerButtons)}>
        <button type="button">Hamburguer</button>
      </div>
    </header>
  );
}
