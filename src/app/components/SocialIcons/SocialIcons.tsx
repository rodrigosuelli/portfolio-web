'use client';

import clsx from 'clsx';

import styles from './SocialIcons.module.scss';
import { SOCIAL_LINKS } from './social-icons.constant';
import IconLink from '../IconButton/IconLink';

export default function SocialIcons() {
  return (
    <div className={clsx(styles.socialIcons)}>
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconLink key={index} href={socialLink.url} target="_blank">
          <socialLink.icon />
        </IconLink>
      ))}
    </div>
  );
}
