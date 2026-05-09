import rodrigoHeadshot from '@/../public/images/rodrigo-headshot.png';
import rodrigoHeadshot2 from '@/../public/images/rodrigo-headshot2.png';
import clsx from 'clsx';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Chip from './components/Chip/Chip';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import SocialIcons from './components/SocialIcons/SocialIcons';
import Typography from './components/Typography/Typography';

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quis feugiat enim, sit amet pretium ligula. Nullam lacus felis,
                tempus nec molestie sed, dignissim. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Duis quis feugiat enim, sit amet
                pretium ligula. Nullam lacus felis, tempus nec molestie sed,
                dignissim.
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

        <section className={clsx(styles.section)}>
          <div className={clsx(styles.sectionContainer)}>
            <Chip label="Sobre mim" />
            <div className={clsx(styles.aboutMeImageContainer)}>
              <Image
                priority
                src={rodrigoHeadshot2}
                alt="Retrato do Rodrigo"
                className={clsx(styles.aboutMeImage)}
              />
              <div className={clsx(styles.aboutMeImageFrame)} />
            </div>

            <Typography variant="heading3">
              Curioso sobre mim? Aqui está:
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
              feugiat enim, sit amet pretium ligula. Nullam lacus felis, tempus
              nec molestie sed, dignissim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Duis quis feugiat enim, sit amet
              pretium ligula. Nullam lacus felis, tempus nec molestie sed,
              dignissim.
            </Typography>
          </div>
        </section>
      </main>
    </>
  );
}
