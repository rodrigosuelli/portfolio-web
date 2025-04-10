import rodrigoHeadshot from '@/../public/images/rodrigo-headshot.png';
import clsx from 'clsx';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Typography from './components/Typography/Typography';

import HeaderMenu from './components/HeaderMenu/HeaderMenu';

import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <HeaderMenu />

      <main className={clsx(styles.main)}>
        <section className={clsx(styles.section)}>
          <div className={clsx(styles.heroImageContainer)}>
            <Image
              priority
              src={rodrigoHeadshot}
              alt="Retrato do Rodrigo"
              className={clsx(styles.heroImage)}
            />
            <div className={clsx(styles.heroImageFrame)} />
          </div>
          <div className={clsx(styles.heroContent)}>
            <div className={clsx(styles.heroTextContainer)}>
              <Typography variant="heading1">
                Olá, sou Rodrigo{' '}
                <span className={clsx(styles.handEmoji)}>👋</span>
              </Typography>
              <Typography variant="body2">
                I&apos;m a full stack developer (React.js & Node.js) with a
                focus on creating (and occasionally designing) exceptional
                digital experiences that are fast, accessible, visually
                appealing, and responsive. Even though I have been creating web
                applications for over 7 years, I still love it as if it was
                something new.
              </Typography>
            </div>
            <div className={clsx(styles.iconDataContainer)}>
              <div className={clsx(styles.iconData)}>
                <MapPin />
                <Typography variant="body2">Conchal, São Paulo</Typography>
              </div>
              <div className={clsx(styles.iconData)}>
                <div className={clsx(styles.availableIconContainer)}>
                  <div className={clsx(styles.availableIconSubContainer)}>
                    <div className={clsx(styles.availableIconPing)} />
                    <div className={clsx(styles.availableIcon)} />
                  </div>
                </div>
                <Typography variant="body2">
                  Available for new projects
                </Typography>
              </div>
            </div>

            <SocialIcons />
          </div>
        </section>
      </main>
    </>
  );
}
