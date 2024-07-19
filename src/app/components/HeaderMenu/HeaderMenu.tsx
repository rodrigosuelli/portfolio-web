import Link from 'next/link';
import classNames from 'classnames';
import styles from './HeaderMenu.module.scss';

export default function HeaderMenu() {
  return (
    <div className={classNames(styles.headerMenu)}>
      <Link href="/">{'<RS />'}</Link>
      <h1>Header Menu</h1>
    </div>
  );
}
