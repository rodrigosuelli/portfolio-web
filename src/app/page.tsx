import clsx from 'clsx';
import Typography from './components/Typography/Typography';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={clsx(styles.main)}>
      <section className={clsx(styles.section)}>
        <Typography variant="heading1">Olá, sou o Rodrigo 👋</Typography>
      </section>
      <section className={clsx(styles.section)}>
        <Typography variant="heading1">Olá, sou o Rodrigo 👋</Typography>
      </section>
      <section className={clsx(styles.section)}>
        <Typography variant="heading1">Olá, sou o Rodrigo 👋</Typography>
      </section>
      <section className={clsx(styles.section)}>
        <Typography variant="heading1">Olá, sou o Rodrigo 👋</Typography>
      </section>
    </main>
  );
}
