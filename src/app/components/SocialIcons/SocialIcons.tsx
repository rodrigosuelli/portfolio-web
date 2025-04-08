'use client';

import clsx from 'clsx';
import SOCIAL_LINKS from './social-icons.constant';
import IconButton from '../IconButton/IconButton';

import styles from './SocialIcons.module.scss';

export default function SocialIcons() {
  return (
    <div className={clsx(styles.socialIcons)}>
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconButton
          key={index}
          onClick={() => window.open(socialLink.url, '_blank')}
        >
          <socialLink.icon />
        </IconButton>
      ))}
    </div>
  );
}
